use std::collections::VecDeque;
use std::fmt;
use std::io;

use bytes::{Buf, BufMut, Bytes, BytesMut};
use futures::{Async, Poll};
use futures::task;
use futures::io::{AsyncRead, AsyncWrite};
use iovec::IoVec;

use proto::{Http1Transaction, MessageHead};

const INIT_BUFFER_SIZE: usize = 8192;
pub const DEFAULT_MAX_BUFFER_SIZE: usize = 8192 + 4096 * 100;
const MAX_BUF_LIST_BUFFERS: usize = 16;

pub struct Buffered<T, B> {
    flush_pipeline: bool,
    io: T,
    max_buf_size: usize,
    read_blocked: bool,
    read_buf: BytesMut,
    write_buf: WriteBuf<B>,
}

impl<T, B> fmt::Debug for Buffered<T, B>
where
    B: Buf,
{
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        f.debug_struct("Buffered")
            .field("read_buf", &self.read_buf)
            .field("write_buf", &self.write_buf)
            .finish()
    }
}

impl<T, B> Buffered<T, B>
where
    T: AsyncRead + AsyncWrite,
    B: Buf,
{
    pub fn new(io: T) -> Buffered<T, B> {
        Buffered {
            flush_pipeline: false,
            io: io,
            max_buf_size: DEFAULT_MAX_BUFFER_SIZE,
            read_buf: BytesMut::with_capacity(0),
            write_buf: WriteBuf::new(),
            read_blocked: false,
        }
    }

    pub fn set_flush_pipeline(&mut self, enabled: bool) {
        self.flush_pipeline = enabled;
        self.write_buf.set_strategy(if enabled {
            Strategy::Flatten
        } else {
            Strategy::Auto
        });
    }

    pub fn set_max_buf_size(&mut self, max: usize) {
        self.max_buf_size = max;
        self.write_buf.max_buf_size = max;
    }

    pub fn set_write_strategy_flatten(&mut self) {
        // this should always be called only at construction time,
        // so this assert is here to catch myself
        debug_assert!(self.write_buf.buf.bufs.is_empty());
        self.write_buf.set_strategy(Strategy::Flatten);
    }

    pub fn read_buf(&self) -> &[u8] {
        self.read_buf.as_ref()
    }

    //TODO(perf): don't return a `&mut Vec<u8>`, but a wrapper
    //that protects the Vec when growing. Specifically, if this
    //Vec couldn't be reset, as it's position isn't at the end,
    //any new reserves will copy the bytes before the position,
    //which is unnecessary.
    pub fn write_buf_mut(&mut self) -> &mut Vec<u8> {
        let buf = self.write_buf.head_mut();
        buf.maybe_reset();
        &mut buf.bytes
    }

    pub fn buffer(&mut self, buf: B) {
        self.write_buf.buffer(buf)
    }

    pub fn can_buffer(&self) -> bool {
        self.flush_pipeline || self.write_buf.can_buffer()
    }

    pub fn consume_leading_lines(&mut self) {
        if !self.read_buf.is_empty() {
            let mut i = 0;
            while i < self.read_buf.len() {
                match self.read_buf[i] {
                    b'\r' | b'\n' => i += 1,
                    _ => break,
                }
            }
            self.read_buf.split_to(i);
        }
    }

    pub(super) fn parse<S: Http1Transaction>(&mut self, cx: &mut task::Context) -> Poll<MessageHead<S::Incoming>, ::Error> {
        loop {
            match try!(S::parse(&mut self.read_buf)) {
                Some((head, len)) => {
                    debug!("parsed {} headers ({} bytes)", head.headers.len(), len);
                    return Ok(Async::Ready(head))
                },
                None => {
                    if self.read_buf.capacity() >= self.max_buf_size {
                        debug!("max_buf_size ({}) reached, closing", self.max_buf_size);
                        return Err(::Error::new_too_large());
                    }
                },
            }
            match try_ready!(self.read_from_io(cx).map_err(::Error::new_io)) {
                0 => {
                    trace!("parse eof");
                    return Err(::Error::new_incomplete());
                }
                _ => {},
            }
        }
    }

    pub fn read_from_io(&mut self, cx: &mut task::Context) -> Poll<usize, io::Error> {
        use bytes::BufMut;
        self.read_blocked = false;
        if self.read_buf.remaining_mut() < INIT_BUFFER_SIZE {
            self.read_buf.reserve(INIT_BUFFER_SIZE);
        }
        read_buf(&mut self.io, cx, &mut self.read_buf).map(|ok| {
            match ok {
                Async::Ready(n) => {
                    debug!("read {} bytes", n);
                    Async::Ready(n)
                },
                Async::Pending => {
                    self.read_blocked = true;
                    Async::Pending
                }
            }
        })
    }

    pub fn into_inner(self) -> (T, Bytes) {
        (self.io, self.read_buf.freeze())
    }

    pub fn io_mut(&mut self) -> &mut T {
        &mut self.io
    }

    pub fn is_read_blocked(&self) -> bool {
        self.read_blocked
    }

    pub fn flush(&mut self, cx: &mut task::Context) -> Poll<(), io::Error> {
        if self.flush_pipeline && !self.read_buf.is_empty() {
            //Ok(())
        } else if self.write_buf.remaining() == 0 {
            try_ready!(self.io.poll_flush(cx));
        } else {
            loop {
                let n = try_ready!(self.write_buf.poll_flush_into(&mut self.io, cx));
                debug!("flushed {} bytes", n);
                if self.write_buf.remaining() == 0 {
                    break;
                } else if n == 0 {
                    trace!("write returned zero, but {} bytes remaining", self.write_buf.remaining());
                    return Err(io::ErrorKind::WriteZero.into())
                }
            }
            try_ready!(self.io.poll_flush(cx))
        }
        Ok(Async::Ready(()))
    }
}

fn read_buf<I: AsyncRead, B: BufMut>(io: &mut I, cx: &mut task::Context, buf: &mut B) -> Poll<usize, io::Error> {
    if !buf.has_remaining_mut() {
        return Ok(Async::Ready(0));
    }

    unsafe {
        let n = {
            let b = buf.bytes_mut();

            io.initializer().initialize(b);

            try_ready!(io.poll_read(cx, b))
        };

        buf.advance_mut(n);
        Ok(Async::Ready(n))
    }
}

pub trait MemRead {
    fn read_mem(&mut self, cx: &mut task::Context, len: usize) -> Poll<Bytes, io::Error>;
}

impl<T, B> MemRead for Buffered<T, B> 
where
    T: AsyncRead + AsyncWrite,
    B: Buf,
{
    fn read_mem(&mut self, cx: &mut task::Context, len: usize) -> Poll<Bytes, io::Error> {
        if !self.read_buf.is_empty() {
            let n = ::std::cmp::min(len, self.read_buf.len());
            Ok(Async::Ready(self.read_buf.split_to(n).freeze()))
        } else {
            let n = try_ready!(self.read_from_io(cx));
            Ok(Async::Ready(self.read_buf.split_to(::std::cmp::min(len, n)).freeze()))
        }
    }
}

#[derive(Clone)]
pub struct Cursor<T> {
    bytes: T,
    pos: usize,
}

impl<T: AsRef<[u8]>> Cursor<T> {
    pub fn new(bytes: T) -> Cursor<T> {
        Cursor {
            bytes: bytes,
            pos: 0,
        }
    }

    #[inline]
    pub fn buf(&self) -> &[u8] {
        &self.bytes.as_ref()[self.pos..]
    }

    #[inline]
    pub fn consume(&mut self, num: usize) {
        self.pos += num;
    }
}

impl Cursor<Vec<u8>> {
    fn maybe_reset(&mut self) {
        if self.pos != 0 && self.remaining() == 0 {
            self.pos = 0;
            unsafe {
                self.bytes.set_len(0);
            }
        }
    }
}

impl<T: AsRef<[u8]>> fmt::Debug for Cursor<T> {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        f.debug_struct("Cursor")
            .field("pos", &self.pos)
            .field("len", &self.bytes.as_ref().len())
            .finish()
    }
}

impl<T: AsRef<[u8]>> Buf for Cursor<T> {
    #[inline]
    fn remaining(&self) -> usize {
        self.bytes.as_ref().len() - self.pos
    }

    #[inline]
    fn bytes(&self) -> &[u8] {
        self.buf()
    }

    #[inline]
    fn advance(&mut self, cnt: usize) {
        self.consume(cnt)
    }
}

// an internal buffer to collect writes before flushes
struct WriteBuf<B> {
    buf: BufDeque<B>,
    max_buf_size: usize,
    strategy: Strategy,
}

impl<B> WriteBuf<B> {
    fn new() -> WriteBuf<B> {
        WriteBuf {
            buf: BufDeque::new(),
            max_buf_size: DEFAULT_MAX_BUFFER_SIZE,
            strategy: Strategy::Auto,
        }
    }
}


impl<B> WriteBuf<B>
where
    B: Buf,
{
    fn set_strategy(&mut self, strategy: Strategy) {
        self.strategy = strategy;
    }

    fn buffer(&mut self, buf: B) {
        match self.strategy {
            Strategy::Flatten => {
                let head = self.head_mut();
                head.maybe_reset();
                head.bytes.put(buf);
            },
            Strategy::Auto | Strategy::Queue => {
                self.buf.bufs.push_back(VecOrBuf::Buf(buf));
            },
        }
    }

    fn can_buffer(&self) -> bool {
        match self.strategy {
            Strategy::Flatten => {
                self.remaining() < self.max_buf_size
            },
            Strategy::Auto | Strategy::Queue => {
                self.buf.bufs.len() < MAX_BUF_LIST_BUFFERS
                    && self.remaining() < self.max_buf_size
            },
        }
    }

    fn head_mut(&mut self) -> &mut Cursor<Vec<u8>> {
        // this dance is brought to you, The Borrow Checker!

        let reuse_back = if let Some(&VecOrBuf::Vec(_)) = self.buf.bufs.back() {
            true
        } else {
            false
        };

        if !reuse_back {
            let head_buf = Cursor::new(Vec::with_capacity(INIT_BUFFER_SIZE));
            self.buf.bufs.push_back(VecOrBuf::Vec(head_buf));
        }
        if let Some(&mut VecOrBuf::Vec(ref mut v)) = self.buf.bufs.back_mut() {
            v
        } else {
            unreachable!("head_buf just pushed on back");
        }
    }

    fn poll_flush_into<I: AsyncWrite>(&mut self, io: &mut I, cx: &mut task::Context) -> Poll<usize, io::Error> {
        if !self.has_remaining() {
            return Ok(Async::Ready(0));
        }

        let (num_bufs_avail, num_bytes_written, len_first_buf) = {
            static PLACEHOLDER: &[u8] = &[0];
            let mut bufs = [From::from(PLACEHOLDER); 64];
            let num_bufs_avail = self.bytes_vec(&mut bufs[..]);
            let num_bytes_written = try_ready!(io.poll_vectored_write(cx, &bufs[..num_bufs_avail]));
            (num_bufs_avail, num_bytes_written, bufs[0].len())
        };
        self.advance(num_bytes_written);

        if let Strategy::Auto = self.strategy {
            if num_bufs_avail > 1 {
                // If there's more than one IoVec available, attempt to
                // determine the best buffering strategy based on whether
                // the underlying AsyncWrite object supports vectored I/O.
                if num_bytes_written == len_first_buf {
                    // If only the first of many IoVec was written, we can assume
                    // with some certainty that vectored I/O _is not_ supported.
                    //
                    // Switch to a flattening strategy for buffering data.
                    trace!("detected no usage of vectored write, flattening");
                    let mut vec = Vec::new();
                    vec.put(&mut self.buf);
                    self.buf.bufs.push_back(VecOrBuf::Vec(Cursor::new(vec)));
                    self.strategy = Strategy::Flatten;
                } else if num_bytes_written > len_first_buf {
                    // If more than the first IoVec was written, we can assume
                    // with some certainty that vectored I/O _is_ supported.
                    //
                    // Switch to a queuing strategy for buffering data.
                    self.strategy = Strategy::Queue;
                }
            }
        }

        Ok(Async::Ready(num_bytes_written))
    }
}

impl<B: Buf> fmt::Debug for WriteBuf<B> {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        f.debug_struct("WriteBuf")
            .field("remaining", &self.remaining())
            .field("strategy", &self.strategy)
            .finish()
    }
}

impl<B: Buf> Buf for WriteBuf<B> {
    #[inline]
    fn remaining(&self) -> usize {
        self.buf.remaining()
    }

    #[inline]
    fn bytes(&self) -> &[u8] {
        self.buf.bytes()
    }

    #[inline]
    fn advance(&mut self, cnt: usize) {
        self.buf.advance(cnt)
    }

    #[inline]
    fn bytes_vec<'t>(&'t self, dst: &mut [&'t IoVec]) -> usize {
        self.buf.bytes_vec(dst)
    }
}

#[derive(Debug)]
enum Strategy {
    Auto,
    Flatten,
    Queue,
}

enum VecOrBuf<B> {
    Vec(Cursor<Vec<u8>>),
    Buf(B),
}

impl<B: Buf> Buf for VecOrBuf<B> {
    #[inline]
    fn remaining(&self) -> usize {
        match *self {
            VecOrBuf::Vec(ref v) => v.remaining(),
            VecOrBuf::Buf(ref b) => b.remaining(),
        }
    }

    #[inline]
    fn bytes(&self) -> &[u8] {
        match *self {
            VecOrBuf::Vec(ref v) => v.bytes(),
            VecOrBuf::Buf(ref b) => b.bytes(),
        }
    }

    #[inline]
    fn advance(&mut self, cnt: usize) {
        match *self {
            VecOrBuf::Vec(ref mut v) => v.advance(cnt),
            VecOrBuf::Buf(ref mut b) => b.advance(cnt),
        }
    }

    #[inline]
    fn bytes_vec<'t>(&'t self, dst: &mut [&'t IoVec]) -> usize {
        match *self {
            VecOrBuf::Vec(ref v) => {
                if v.has_remaining() {
                    v.bytes_vec(dst)
                } else {
                    0
                }
            },
            VecOrBuf::Buf(ref b) => {
                if b.has_remaining() {
                    b.bytes_vec(dst)
                } else {
                    0
                }
            },
        }
    }
}

struct BufDeque<T> {
    bufs: VecDeque<VecOrBuf<T>>,
}


impl<T> BufDeque<T> {
    fn new() -> BufDeque<T> {
        BufDeque {
            bufs: VecDeque::new(),
        }
    }
}

impl<T: Buf> Buf for BufDeque<T> {
    #[inline]
    fn remaining(&self) -> usize {
        self.bufs.iter()
            .map(|buf| buf.remaining())
            .sum()
    }

    #[inline]
    fn bytes(&self) -> &[u8] {
        for buf in &self.bufs {
            if buf.has_remaining() {
                return buf.bytes();
            }
        }
        &[]
    }

    #[inline]
    fn advance(&mut self, mut cnt: usize) {
        let mut maybe_reclaim = None;
        while cnt > 0 {
            {
                let front = &mut self.bufs[0];
                let rem = front.remaining();
                if rem > cnt {
                    front.advance(cnt);
                    return;
                } else {
                    front.advance(rem);
                    cnt -= rem;
                }
            }
            maybe_reclaim = self.bufs.pop_front();
        }

        if let Some(VecOrBuf::Vec(v)) = maybe_reclaim {
            trace!("reclaiming write buf Vec");
            self.bufs.push_back(VecOrBuf::Vec(v));
        }
    }

    #[inline]
    fn bytes_vec<'t>(&'t self, dst: &mut [&'t IoVec]) -> usize {
        if dst.is_empty() {
            return 0;
        }
        let mut vecs = 0;
        for buf in &self.bufs {
            vecs += buf.bytes_vec(&mut dst[vecs..]);
            if vecs == dst.len() {
                break;
            }
        }
        vecs
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::io::Read;
    use futures::task;
    use futures::future;
    use futures::executor::block_on;
    use futures::io::AsyncRead;
    use mock::AsyncIo;

    #[cfg(test)]
    impl<T: Read> MemRead for ::mock::AsyncIo<T> {
        fn read_mem(&mut self, cx: &mut task::Context, len: usize) -> Poll<Bytes, io::Error> {
            let mut v = vec![0; len];
            let n = try_ready!(self.poll_read(cx, v.as_mut_slice()));
            Ok(Async::Ready(BytesMut::from(&v[..n]).freeze()))
        }
    }

    #[test]
    fn iobuf_write_empty_slice() {
        block_on(future::lazy(|cx| {
            let mut mock = AsyncIo::new_buf(vec![], 256);
            mock.error(io::Error::new(io::ErrorKind::Other, "logic error"));

            let mut io_buf = Buffered::<_, Cursor<Vec<u8>>>::new(mock);

            // underlying io will return the logic error upon write,
            // so we are testing that the io_buf does not trigger a write
            // when there is nothing to flush
            io_buf.flush(cx).expect("should short-circuit flush");

            Ok::<_, ()>(())
        })).unwrap()
    }

    #[test]
    fn parse_reads_until_blocked() {
        block_on(future::lazy(|cx| {
            // missing last line ending
            let raw = "HTTP/1.1 200 OK\r\n";

            let mock = AsyncIo::new_buf(raw, raw.len());
            let mut buffered = Buffered::<_, Cursor<Vec<u8>>>::new(mock);

            assert_eq!(buffered.parse::<::proto::ClientTransaction>(cx).unwrap(), Async::Pending);
            assert!(buffered.io.blocked());

            Ok::<_, ()>(())
        })).unwrap()
    }

    #[test]
    fn write_buf_skips_empty_bufs() {
        block_on(future::lazy(|cx| {
            let mut mock = AsyncIo::new_buf(vec![], 1024);
            mock.max_read_vecs(0); // disable vectored IO
            let mut buffered = Buffered::<_, Cursor<Vec<u8>>>::new(mock);

            buffered.buffer(Cursor::new(Vec::new()));
            buffered.buffer(Cursor::new(b"hello".to_vec()));
            buffered.flush(cx).unwrap();
            assert_eq!(buffered.io, b"hello");

            Ok::<_, ()>(())
        })).unwrap()
    }

    #[test]
    fn write_buf_queue() {
        extern crate pretty_env_logger;
        let _ = pretty_env_logger::try_init();

        block_on(future::lazy(|cx| {
            let mock = AsyncIo::new_buf(vec![], 1024);
            let mut buffered = Buffered::<_, Cursor<Vec<u8>>>::new(mock);

            buffered.write_buf_mut().extend(b"hello ");
            buffered.buffer(Cursor::new(b"world, ".to_vec()));
            buffered.write_buf_mut().extend(b"it's ");
            buffered.buffer(Cursor::new(b"hyper!".to_vec()));
            assert_eq!(buffered.io.num_writes(), 0);
            buffered.flush(cx).unwrap();

            assert_eq!(buffered.io, b"hello world, it's hyper!");
            assert_eq!(buffered.io.num_writes(), 1);

            Ok::<_, ()>(())
        })).unwrap()
    }

    #[test]
    fn write_buf_reclaim_vec() {
        extern crate pretty_env_logger;
        let _ = pretty_env_logger::try_init();

        block_on(future::lazy(|cx| {
            let mock = AsyncIo::new_buf(vec![], 1024);
            let mut buffered = Buffered::<_, Cursor<Vec<u8>>>::new(mock);

            buffered.write_buf_mut().extend(b"hello ");
            assert_eq!(buffered.write_buf.buf.bufs.len(), 1);
            buffered.write_buf_mut().extend(b"world, ");
            assert_eq!(buffered.write_buf.buf.bufs.len(), 1);

            // after flushing, reclaim the Vec
            buffered.flush(cx).unwrap();
            assert_eq!(buffered.write_buf.remaining(), 0);
            assert_eq!(buffered.write_buf.buf.bufs.len(), 1);

            // add a user buf in the way
            buffered.buffer(Cursor::new(b"it's ".to_vec()));
            // and then add more hyper bytes
            buffered.write_buf_mut().extend(b"hyper!");
            buffered.flush(cx).unwrap();
            assert_eq!(buffered.write_buf.buf.bufs.len(), 1);

            assert_eq!(buffered.io, b"hello world, it's hyper!");

            Ok::<_, ()>(())
        })).unwrap()
    }

    #[test]
    fn write_buf_flatten() {
        extern crate pretty_env_logger;
        let _ = pretty_env_logger::try_init();

        block_on(future::lazy(|cx| {
            let mock = AsyncIo::new_buf(vec![], 1024);
            let mut buffered = Buffered::<_, Cursor<Vec<u8>>>::new(mock);
            buffered.write_buf.set_strategy(Strategy::Flatten);

            buffered.write_buf_mut().extend(b"hello ");
            buffered.buffer(Cursor::new(b"world, ".to_vec()));
            buffered.write_buf_mut().extend(b"it's ");
            buffered.buffer(Cursor::new(b"hyper!".to_vec()));
            assert_eq!(buffered.write_buf.buf.bufs.len(), 1);

            buffered.flush(cx).unwrap();

            assert_eq!(buffered.io, b"hello world, it's hyper!");
            assert_eq!(buffered.io.num_writes(), 1);
            assert_eq!(buffered.write_buf.buf.bufs.len(), 1);

            Ok::<_, ()>(())
        })).unwrap()
    }

    #[test]
    fn write_buf_auto_flatten() {
        extern crate pretty_env_logger;
        let _ = pretty_env_logger::try_init();

        block_on(future::lazy(|cx| {
            let mut mock = AsyncIo::new_buf(vec![], 1024);
            mock.max_read_vecs(0); // disable vectored IO
            let mut buffered = Buffered::<_, Cursor<Vec<u8>>>::new(mock);

            // we have 4 buffers, but hope to detect that vectored IO isn't
            // being used, and switch to flattening automatically,
            // resulting in only 2 writes
            buffered.write_buf_mut().extend(b"hello ");
            buffered.buffer(Cursor::new(b"world, ".to_vec()));
            buffered.write_buf_mut().extend(b"it's hyper!");
            //buffered.buffer(Cursor::new(b"hyper!".to_vec()));
            buffered.flush(cx).unwrap();

            assert_eq!(buffered.io, b"hello world, it's hyper!");
            assert_eq!(buffered.io.num_writes(), 2);
            assert_eq!(buffered.write_buf.buf.bufs.len(), 1);

            Ok::<_, ()>(())
        })).unwrap()
    }

    #[test]
    fn write_buf_queue_does_not_auto() {
        extern crate pretty_env_logger;
        let _ = pretty_env_logger::try_init();

        block_on(future::lazy(move |cx| {
            let mut mock = AsyncIo::new_buf(vec![], 1024);
            mock.max_read_vecs(0); // disable vectored IO
            let mut buffered = Buffered::<_, Cursor<Vec<u8>>>::new(mock);
            buffered.write_buf.set_strategy(Strategy::Queue);

            // we have 4 buffers, and vec IO disabled, but explicitly said
            // don't try to auto detect (via setting strategy above)
            buffered.write_buf_mut().extend(b"hello ");
            buffered.buffer(Cursor::new(b"world, ".to_vec()));
            buffered.write_buf_mut().extend(b"it's ");
            buffered.buffer(Cursor::new(b"hyper!".to_vec()));
            buffered.flush(cx).unwrap();

            assert_eq!(buffered.io, b"hello world, it's hyper!");
            assert_eq!(buffered.io.num_writes(), 4);

            Ok::<_, ()>(())
        })).unwrap()
    }
}
