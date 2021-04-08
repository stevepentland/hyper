window.BENCHMARK_DATA = {
  "lastUpdate": 1617864414305,
  "repoUrl": "https://github.com/stevepentland/hyper",
  "entries": {
    "connect": [
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "2f2ceb24265a7e63601cf1ffde7d586cd666a783",
          "message": "chore(ci): automatically publish benchmarks in a graph",
          "timestamp": "2020-11-16T16:51:30-08:00",
          "tree_id": "5b90f0b2e08fd62a41b6f1f90d45da63bd559713",
          "url": "https://github.com/stevepentland/hyper/commit/2f2ceb24265a7e63601cf1ffde7d586cd666a783"
        },
        "date": 1605579026634,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 67532,
            "range": "± 11738",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "2a19ab74ed69bc776da25544e98979c9fb6e1834",
          "message": "feat(http1): Make HTTP/1 support an optional feature\n\ncc #2251\n\nBREAKING CHANGE: This puts all HTTP/1 methods and support behind an\n  `http1` cargo feature, which will not be enabled by default. To use\n  HTTP/1, add `features = [\"http1\"]` to the hyper dependency in your\n  `Cargo.toml`.",
          "timestamp": "2020-11-17T10:42:20-08:00",
          "tree_id": "9f96eaaa5c228f8eba653b9ef2cfec2d099f3f10",
          "url": "https://github.com/stevepentland/hyper/commit/2a19ab74ed69bc776da25544e98979c9fb6e1834"
        },
        "date": 1605650990496,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 50691,
            "range": "± 1189",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e55583d30a597884883f1a51b678f5c57c76765",
          "message": "feat(client): Make `client` an optional feature\n\ncc #2223\r\n\r\nBREAKING CHANGE: The HTTP client of hyper is now an optional feature. To\r\n  enable the client, add `features = [\"client\"]` to the dependency in\r\n  your `Cargo.toml`.",
          "timestamp": "2020-11-17T17:06:25-08:00",
          "tree_id": "a96d23e59a63b4783772da0aa92b70f346ba446c",
          "url": "https://github.com/stevepentland/hyper/commit/4e55583d30a597884883f1a51b678f5c57c76765"
        },
        "date": 1605665407558,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 48178,
            "range": "± 1331",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bdb5e5d6946f4e3f8115a6b1683aff6a04df73de",
          "message": "feat(server): Make the `server` code an optional feature (#2334)\n\ncc #2223 \r\n\r\nBREAKING CHANGE: The HTTP server code is now an optional feature. To\r\n  enable the server, add `features = [\"server\"]` to the dependency in\r\n  your `Cargo.toml`.",
          "timestamp": "2020-11-18T11:02:20-08:00",
          "tree_id": "260a94fe0611cc0d6d30c331e182fd0bfcc347cf",
          "url": "https://github.com/stevepentland/hyper/commit/bdb5e5d6946f4e3f8115a6b1683aff6a04df73de"
        },
        "date": 1605737410341,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 49203,
            "range": "± 6350",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abb6471690f796e1b96bb2d7b1042f424d69f169",
          "message": "refactor(client): use tokio's TcpSocket for more sockopts (#2335)\n\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-18T14:45:45-08:00",
          "tree_id": "c8d1bedaa9af64428ba5cdc93170b1c62cc3564e",
          "url": "https://github.com/stevepentland/hyper/commit/abb6471690f796e1b96bb2d7b1042f424d69f169"
        },
        "date": 1605751820500,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 65114,
            "range": "± 9566",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ed2b22a7f66899d338691552fbcb6c0f2f4e06b9",
          "message": "feat(lib): disable all optional features by default (#2336)\n\nBREAKING CHANGE: All optional features have been disabled by default.",
          "timestamp": "2020-11-19T10:05:39-08:00",
          "tree_id": "6e1ed1ba8f1fec285f11643f67ff48ea7e92a9a5",
          "url": "https://github.com/stevepentland/hyper/commit/ed2b22a7f66899d338691552fbcb6c0f2f4e06b9"
        },
        "date": 1605823798646,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 50707,
            "range": "± 3365",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "121c33132c0950aaa422848cdc43f6691ddf5785",
          "message": "feat(upgrade): Moved HTTP upgrades off `Body` to a new API (#2337)\n\nCloses #2086\r\n\r\nBREAKING CHANGE: The method `Body::on_upgrade()` is gone. It is\r\n  essentially replaced with `hyper::upgrade::on(msg)`.",
          "timestamp": "2020-11-19T16:36:12-08:00",
          "tree_id": "33e278842408a37663173a39ba973df4e6786bdc",
          "url": "https://github.com/stevepentland/hyper/commit/121c33132c0950aaa422848cdc43f6691ddf5785"
        },
        "date": 1605838178595,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 49374,
            "range": "± 826",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6aadb830072959497f414c01bcdba4c8e681088",
          "message": "perf(lib): re-enable writev support (#2338)\n\nTokio's `AsyncWrite` trait once again has support for vectored writes in\r\nTokio 0.3.4 (see tokio-rs/tokio#3149).\r\n\r\nThis branch re-enables vectored writes in Hyper for HTTP/1. Using\r\nvectored writes in HTTP/2 will require an upstream change in the `h2`\r\ncrate as well.\r\n\r\nI've removed the adaptive write buffer implementation\r\nthat attempts to detect whether vectored IO is or is not available,\r\nsince the Tokio 0.3.4 `AsyncWrite` trait exposes this directly via the\r\n`is_write_vectored` method. Now, we just ask the IO whether or not it\r\nsupports vectored writes, and configure the buffer accordingly. This\r\nmakes the implementation somewhat simpler.\r\n\r\nThis also removes `http1_writev()` methods from the builders. These are\r\nno longer necessary, as Hyper can now determine whether or not\r\nto use vectored writes based on `is_write_vectored`, rather than trying\r\nto auto-detect it.\r\n\r\nCloses #2320 \r\n\r\nBREAKING CHANGE: Removed `http1_writev` methods from `client::Builder`,\r\n  `client::conn::Builder`, `server::Builder`, and `server::conn::Builder`.\r\n  \r\n  Vectored writes are now enabled based on whether the `AsyncWrite`\r\n  implementation in use supports them, rather than though adaptive\r\n  detection. To explicitly disable vectored writes, users may wrap the IO\r\n  in a newtype that implements `AsyncRead` and `AsyncWrite` and returns\r\n  `false` from its `AsyncWrite::is_write_vectored` method.",
          "timestamp": "2020-11-24T10:31:48-08:00",
          "tree_id": "c91fc21aebcb62085b5295b5e9e68c8c5b58242f",
          "url": "https://github.com/stevepentland/hyper/commit/d6aadb830072959497f414c01bcdba4c8e681088"
        },
        "date": 1606255783865,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 49543,
            "range": "± 6255",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a470446deb2cb2c0e3700f67d9f70097d0d7d75f",
          "message": "chore(error): remove undocumented public error module (#2344)",
          "timestamp": "2020-11-25T12:52:07-08:00",
          "tree_id": "c1accd6ae40bf4b1a972ba66ccfaa01429845765",
          "url": "https://github.com/stevepentland/hyper/commit/a470446deb2cb2c0e3700f67d9f70097d0d7d75f"
        },
        "date": 1606342574277,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 46713,
            "range": "± 2947",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "robert@octarineparrot.com",
            "name": "Robert Clipsham",
            "username": "mrmonday"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ba2a141a6f8736446ff4a0111df347c0dc66f6c",
          "message": "test(client): Upgrade libpnet depedency to 0.27.2 [#2347] (#2348)\n\nAdditionally, only depend on pnet_datalink to reduce compile times.\n\nCloses #2347",
          "timestamp": "2020-11-27T21:55:03-08:00",
          "tree_id": "4b365d0f3aedef52acb5f5648720da602aa165f4",
          "url": "https://github.com/stevepentland/hyper/commit/1ba2a141a6f8736446ff4a0111df347c0dc66f6c"
        },
        "date": 1606544147654,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 47524,
            "range": "± 4079",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "faern@faern.net",
            "name": "Linus Färnstrand",
            "username": "faern"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21dea2114574bbeda41bad5dff5e8e3613352124",
          "message": "chore(dependencies): upgrade socket2 (#2349)\n\nUpgrades to a version not making invalid assumptions about\nthe memory layout of std::net::SocketAddr",
          "timestamp": "2020-11-30T05:48:28-08:00",
          "tree_id": "9ab22d866d6f8bd5c19045971f7def89440f4b46",
          "url": "https://github.com/stevepentland/hyper/commit/21dea2114574bbeda41bad5dff5e8e3613352124"
        },
        "date": 1606755716045,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 70405,
            "range": "± 4846",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "campbellC@users.noreply.github.com",
            "name": "Chris Campbell",
            "username": "campbellC"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8641733be3c732acd6c94ec9ad161b88a4d467d",
          "message": "docs(client): add example of client conn usage (#2350)\n\nAdd basic, module level example for the Builder performing a handshake,\r\nspawning a task to run the Connection and sending a single request and\r\nreceiving the response.\r\n\r\nCloses #2272",
          "timestamp": "2020-12-01T15:58:28-08:00",
          "tree_id": "e2f028a020be1b9371e71c37d2c8a1ede13cd4fe",
          "url": "https://github.com/stevepentland/hyper/commit/f8641733be3c732acd6c94ec9ad161b88a4d467d"
        },
        "date": 1606878766030,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 46016,
            "range": "± 2160",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4e24332a0cd44068a806081d51686f50c086056",
          "message": "feat(client): change DNS Resolver to resolve to SocketAddrs (#2346)\n\nThe DNS resolver part of `HttpConnector` used to require resolving to\r\n`IpAddr`s, and this changes it so that they resolve to `SocketAddr`s.\r\nThe main benefit here is allowing for resolvers to set the IPv6 zone ID\r\nwhen resolving, but it also just more closely matches\r\n`std::net::ToSocketAddrs`.\r\n\r\nCloses #1937\r\n\r\nBREAKING CHANGE: Custom resolvers used with `HttpConnector` must change\r\n  to resolving to an iterator of `SocketAddr`s instead of `IpAddr`s.",
          "timestamp": "2020-12-03T14:21:19-08:00",
          "tree_id": "f15bc5873b96ec18a2c130878bec5136d305e561",
          "url": "https://github.com/stevepentland/hyper/commit/b4e24332a0cd44068a806081d51686f50c086056"
        },
        "date": 1607045086529,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 70026,
            "range": "± 11414",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "b4e24332a0cd44068a806081d51686f50c086056",
          "message": "feat(client): change DNS Resolver to resolve to SocketAddrs (#2346)\n\nThe DNS resolver part of `HttpConnector` used to require resolving to\r\n`IpAddr`s, and this changes it so that they resolve to `SocketAddr`s.\r\nThe main benefit here is allowing for resolvers to set the IPv6 zone ID\r\nwhen resolving, but it also just more closely matches\r\n`std::net::ToSocketAddrs`.\r\n\r\nCloses #1937\r\n\r\nBREAKING CHANGE: Custom resolvers used with `HttpConnector` must change\r\n  to resolving to an iterator of `SocketAddr`s instead of `IpAddr`s.",
          "timestamp": "2020-12-03T14:21:19-08:00",
          "tree_id": "f15bc5873b96ec18a2c130878bec5136d305e561",
          "url": "https://github.com/stevepentland/hyper/commit/b4e24332a0cd44068a806081d51686f50c086056"
        },
        "date": 1607045328516,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 70014,
            "range": "± 8757",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@bnoordhuis.nl",
            "name": "Ben Noordhuis",
            "username": "bnoordhuis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d9a5806e146798d0cbe67672bbe3ad5ae680393",
          "message": "refactor(http1): change HTTP2->1.1 warning to debug (#2354)\n\nWe use hyper in a proxy-like way where an incoming HTTP/2 request is\r\nproxied to a HTTP/1 backend and it was reported that the protocol\r\ncoercion warnings were a limiting factor in the total throughput\r\nof the system.\r\n\r\nWhile it can be worked around by explicitly setting the request version\r\nto HTTP_11, it seems likely other people also hit this performance snag.\r\nThat's why this commit changes them from warnings to debug messages.",
          "timestamp": "2020-12-14T13:57:32-08:00",
          "tree_id": "9e3c4f830981935a989cd5e49ed4969a219ee850",
          "url": "https://github.com/stevepentland/hyper/commit/7d9a5806e146798d0cbe67672bbe3ad5ae680393"
        },
        "date": 1607996691979,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 50738,
            "range": "± 2140",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arve.knudsen@gmail.com",
            "name": "Arve Knudsen",
            "username": "aknuds1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ede3a6bd9dfd8f33d6c0a4efd94f5bdafe383ebd",
          "message": "refactor(http1): move upgrade state from body to head (#2353)\n\nMove state required for protocol upgrades to head\r\nrepresentations, instead of associating it with the body.\r\n\r\nCloses #2340.\r\n\r\nSigned-off-by: Arve Knudsen <arve.knudsen@gmail.com>",
          "timestamp": "2020-12-15T07:31:48-08:00",
          "tree_id": "ce286b8ff248e5bf4aa6e6f01981ed49c84d72b1",
          "url": "https://github.com/stevepentland/hyper/commit/ede3a6bd9dfd8f33d6c0a4efd94f5bdafe383ebd"
        },
        "date": 1608059571849,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 46293,
            "range": "± 1428",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alex@forallsecure.com",
            "name": "Alex Rebert",
            "username": "alpire"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1dd761c87de226261599ff2518fe9d231ba1c82d",
          "message": "fix(http1): ignore chunked trailers (#2357)\n\nPreviously, hyper returned an \"Invalid chunk end CR\" error on chunked\r\nresponses with trailers, as described in RFC 7230 Section 4.1.2. This\r\ncommit adds code to ignore the trailers.\r\n\r\nCloses #2171",
          "timestamp": "2020-12-15T14:23:07-08:00",
          "tree_id": "6ad353d3f416f304ea0c71efb8de8cfe808c235a",
          "url": "https://github.com/stevepentland/hyper/commit/1dd761c87de226261599ff2518fe9d231ba1c82d"
        },
        "date": 1608090289310,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 49686,
            "range": "± 954",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46450720+bishtpawan@users.noreply.github.com",
            "name": "Pawan Singh Bisht",
            "username": "bishtpawan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c593c292508f31a2986d5ddac3fb23b234a0e2c",
          "message": "refactor(error): use `matches!` macro in `Error::is_*` methods (#2367)",
          "timestamp": "2020-12-21T12:25:47-08:00",
          "tree_id": "c61537b497a46b23e64414fa1f2c822dadd22fc4",
          "url": "https://github.com/stevepentland/hyper/commit/6c593c292508f31a2986d5ddac3fb23b234a0e2c"
        },
        "date": 1608590712634,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 40736,
            "range": "± 7047",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pankajchaudhary172@gmail.com",
            "name": "Pankaj Chaudhary",
            "username": "PankajChaudhary5"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b3077da1f891b09de18320d9f6ccf94f136943d",
          "message": "refactor(http1): updated Encoder/Decoder match with the matches macro (#2368)",
          "timestamp": "2020-12-22T10:50:57-08:00",
          "tree_id": "954af38876df04f6db5c6ee06c14b56137895d6c",
          "url": "https://github.com/stevepentland/hyper/commit/3b3077da1f891b09de18320d9f6ccf94f136943d"
        },
        "date": 1608671629414,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 51700,
            "range": "± 1730",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "c784a10174deb461b2eaa59ed9fabae5c315eb68",
          "message": "v0.14.0",
          "timestamp": "2020-12-23T10:58:04-08:00",
          "tree_id": "d2d618457fe2744c73a88c191d7ac276e12343ba",
          "url": "https://github.com/stevepentland/hyper/commit/c784a10174deb461b2eaa59ed9fabae5c315eb68"
        },
        "date": 1608751297610,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 43521,
            "range": "± 3119",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "3d6bdbe85006e623eae83d7c3ce9a45680d6c2c8",
          "message": "v0.14.1",
          "timestamp": "2020-12-23T13:01:14-08:00",
          "tree_id": "75ef9cf142d8a168ed3445192349cd6e581a8501",
          "url": "https://github.com/stevepentland/hyper/commit/3d6bdbe85006e623eae83d7c3ce9a45680d6c2c8"
        },
        "date": 1608772128183,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 43979,
            "range": "± 4255",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mussitantesmortem@gmail.com",
            "name": "Maxim Zhukov",
            "username": "Mephistophiles"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "510b998ff3dc75e0dfc7e236212f5fef33142ad1",
          "message": "chore(dev-dependencies): bump url to 2.2 (#2379)",
          "timestamp": "2020-12-28T15:52:28-08:00",
          "tree_id": "cd9b46cf00546ee0223f287f33d1698b9c2ee161",
          "url": "https://github.com/stevepentland/hyper/commit/510b998ff3dc75e0dfc7e236212f5fef33142ad1"
        },
        "date": 1609210176841,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 49689,
            "range": "± 1785",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "8861f9a7867216c81ea14ac6224c11a1303e7761",
          "message": "v0.14.2",
          "timestamp": "2020-12-29T10:51:50-08:00",
          "tree_id": "aa4f215d53ca79b417c4b5250584edb476b9caa6",
          "url": "https://github.com/stevepentland/hyper/commit/8861f9a7867216c81ea14ac6224c11a1303e7761"
        },
        "date": 1609288337331,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 46359,
            "range": "± 1275",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "c9c46ed60bd43484d67a98a63496ad0277c791a2",
          "message": "refactor(ffi): Add Reason-Phrase API\n\nThis adds an internal ability to copy the HTTP/1 reason-phrase and place\nit in the `http::Extensions` of a response, if it doesn't match the\ncanonical reason. This could be exposed in the Rust API later, but for\nnow it is only used by the C API.",
          "timestamp": "2021-01-08T10:25:53-08:00",
          "tree_id": "08e88a2638eb39443de49d5c60610b9f5c4315da",
          "url": "https://github.com/stevepentland/hyper/commit/c9c46ed60bd43484d67a98a63496ad0277c791a2"
        },
        "date": 1610138001809,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 46158,
            "range": "± 2362",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.westerlind@distilnetworks.com",
            "name": "Markus Westerlind",
            "username": "Marwes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a15f3f7f0f536c74d51636bbc00f6b5ec110472b",
          "message": "refactor(client): minimize the amount of instantiated code (#2391)\n\n* Halve the amount of conn_task instantiations\r\n* Extract non-generic parts of client::handshake\r\n* Extract the non-generic parts of call_async",
          "timestamp": "2021-01-12T16:18:22-08:00",
          "tree_id": "56d1582e4c7f3e995ff4cba0fa9bf34cc857408d",
          "url": "https://github.com/stevepentland/hyper/commit/a15f3f7f0f536c74d51636bbc00f6b5ec110472b"
        },
        "date": 1610505192034,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 45723,
            "range": "± 1046",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0ddb669328163001fd18a4a21109e95047848bf",
          "message": "refactor(lib): apply unreachable_pub lint (#2400)\n\nCloses #2390",
          "timestamp": "2021-01-14T09:57:55-08:00",
          "tree_id": "4bcb4014c9adce39c308cc16bb2ae4cc95515ea4",
          "url": "https://github.com/stevepentland/hyper/commit/f0ddb669328163001fd18a4a21109e95047848bf"
        },
        "date": 1610661502993,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 47506,
            "range": "± 5198",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "257d6a99193c9404ce055727833e1490c23a7197",
          "message": "docs(server): set doc_cfg attributes for `tcp` feature gated Server methods (#2401)",
          "timestamp": "2021-01-14T13:56:49-08:00",
          "tree_id": "50a57b0eb9c3a2e602849788aa791e078f5087bb",
          "url": "https://github.com/stevepentland/hyper/commit/257d6a99193c9404ce055727833e1490c23a7197"
        },
        "date": 1610669390403,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 45425,
            "range": "± 5450",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "24809834+aeryz@users.noreply.github.com",
            "name": "Abdullah Eryuzlu",
            "username": "aeryz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf8d74ad1cf7d0b33b470b1e61625ebac56f9c4c",
          "message": "feat(body): add `send_trailers` to Body channel's `Sender` (#2387)\n\nCloses #2260",
          "timestamp": "2021-01-15T10:14:21-08:00",
          "tree_id": "98ca623fc9171719aabfeac75bad0285557a25fb",
          "url": "https://github.com/stevepentland/hyper/commit/bf8d74ad1cf7d0b33b470b1e61625ebac56f9c4c"
        },
        "date": 1610746340509,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 64521,
            "range": "± 12656",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f821ecdd197b42253b4930f1d67ae98b5c2028ea",
          "message": "docs(body): set doc_cfg attribute for `Body::wrap_stream` (#2403)",
          "timestamp": "2021-01-15T16:24:03-08:00",
          "tree_id": "aa6c2c95e46ee99caa91cd386d804b688c0a49b0",
          "url": "https://github.com/stevepentland/hyper/commit/f821ecdd197b42253b4930f1d67ae98b5c2028ea"
        },
        "date": 1610764401360,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 46387,
            "range": "± 1338",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mikeroelens@gmail.com",
            "name": "Mike Roelens",
            "username": "mikeroelens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec2fd4a15f6c0ec612c38a9596c56cd87477d0f9",
          "message": "docs(client): fix typo in httpbin.org domain (#2406)",
          "timestamp": "2021-01-19T08:30:17-08:00",
          "tree_id": "e7ca69f8ee39808cd92f849107091c006710c06e",
          "url": "https://github.com/stevepentland/hyper/commit/ec2fd4a15f6c0ec612c38a9596c56cd87477d0f9"
        },
        "date": 1611080247141,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 41326,
            "range": "± 1516",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "paolo@paolo565.org",
            "name": "Paolo Barbolini",
            "username": "paolobarbolini"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "237b2ce08341266b62a8d1cfa974779c511a0710",
          "message": "refactor(lib): Remove useless uses of Pin (#2405)",
          "timestamp": "2021-01-19T14:51:34-08:00",
          "tree_id": "850a7bc3c25f7d4f85ccb325ecd0e717537eedf0",
          "url": "https://github.com/stevepentland/hyper/commit/237b2ce08341266b62a8d1cfa974779c511a0710"
        },
        "date": 1611110343140,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 46372,
            "range": "± 1452",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "1928682b33f98244435ba6d574677546205a15ec",
          "message": "feat(ffi): add HYPERE_INVALID_PEER_MESSAGE error code for parse errors",
          "timestamp": "2021-01-20T15:10:19-08:00",
          "tree_id": "e87d140b4320ce0f482aa7ee06ddeb97a4822f19",
          "url": "https://github.com/stevepentland/hyper/commit/1928682b33f98244435ba6d574677546205a15ec"
        },
        "date": 1611197033320,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 45104,
            "range": "± 2470",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "inikulin@cloudflare.com",
            "name": "Ivan Nikulin",
            "username": "inikulin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c8121f1735aa8efeb0d5e4ef595363c373ba470",
          "message": "fix(client): HTTP/1 client \"Transfer-Encoding\" repair code would panic (#2410)\n\nCloses #2409",
          "timestamp": "2021-01-26T10:36:58-08:00",
          "tree_id": "774a20785cfcebc335095bbd9f4c823305ac5cd4",
          "url": "https://github.com/stevepentland/hyper/commit/2c8121f1735aa8efeb0d5e4ef595363c373ba470"
        },
        "date": 1611695982968,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 49780,
            "range": "± 5974",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jplatte+git@posteo.de",
            "name": "Jonas Platte",
            "username": "jplatte"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "43412a950f2052e7865eb596c1d39067b2002a94",
          "message": "refactor(lib): Switch from pin-project to pin-project-lite",
          "timestamp": "2021-01-28T14:09:53-08:00",
          "tree_id": "f8f20dc86e8ecfa06a44b844b7c9c04a6e940a29",
          "url": "https://github.com/stevepentland/hyper/commit/43412a950f2052e7865eb596c1d39067b2002a94"
        },
        "date": 1611883921116,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 68908,
            "range": "± 11274",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e8238c1b8d6351d42546a4423cf5598def1c35e",
          "message": "docs(body): warn about no length check in aggregate (#2415)\n\nThe to_bytes and aggregate don't check how long the body is, so the user\r\nbetter be aware.\r\n\r\nRelates to #2414.",
          "timestamp": "2021-02-02T09:34:40-08:00",
          "tree_id": "90f28099da0218b4f91839d4ca57aa5a3165f7b8",
          "url": "https://github.com/stevepentland/hyper/commit/5e8238c1b8d6351d42546a4423cf5598def1c35e"
        },
        "date": 1612296424533,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 42184,
            "range": "± 6532",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d2125c67c8087de863f74278a017c4caf37e6a9",
          "message": "perf(body): specialize BufList::copy_to_bytes (#2413)\n\nSome implementations of the Buf trait have an optimized version (for\r\nexample Bytes) of copy_to_bytes, opportunistically use that one.",
          "timestamp": "2021-02-02T17:09:06-08:00",
          "tree_id": "f97fa886587f34e8aa412ff28bb5d237ae850a3f",
          "url": "https://github.com/stevepentland/hyper/commit/4d2125c67c8087de863f74278a017c4caf37e6a9"
        },
        "date": 1612323262718,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 46147,
            "range": "± 2312",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "196d9bd69c0059dbff6771f6dce9188d4841c185",
          "message": "v0.14.4",
          "timestamp": "2021-02-05T15:54:38-08:00",
          "tree_id": "52f1523e30d46a411c7bac0f9e938ae39421a2d0",
          "url": "https://github.com/stevepentland/hyper/commit/196d9bd69c0059dbff6771f6dce9188d4841c185"
        },
        "date": 1612579440633,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 46730,
            "range": "± 1559",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "dfa1bb291d71978820e8077be94c1d5837935bbc",
          "message": "chore(ci): use --feature-powerset --depth 2 in features check",
          "timestamp": "2021-02-06T07:36:04-08:00",
          "tree_id": "f04ddfede071e40f67435154fd8726f257a4e024",
          "url": "https://github.com/stevepentland/hyper/commit/dfa1bb291d71978820e8077be94c1d5837935bbc"
        },
        "date": 1612633477945,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 65817,
            "range": "± 5251",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@arnavion.dev",
            "name": "Arnavion",
            "username": "Arnavion"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "42587059e6175735b1a8656c5ddbff0edb19294c",
          "message": "docs(server): use cfg_feature! on hyper::server::conn::tcp instead of #[cfg]\n\nThis is required to surface the required feature (`tcp`) in the generated docs\nfor `hyper::server::conn::{AddrIncoming, AddrStream}`. Before this change,\ntheir docs only mentioned the features needed for the `hyper::server::conn` mod\nitself.\n\nFixes #2425",
          "timestamp": "2021-02-09T13:31:41-08:00",
          "tree_id": "f50609d1ee3a1c9696d0e6954a6ec2e68494cfba",
          "url": "https://github.com/stevepentland/hyper/commit/42587059e6175735b1a8656c5ddbff0edb19294c"
        },
        "date": 1612914334362,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 59034,
            "range": "± 9364",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.westerlind@distilnetworks.com",
            "name": "Markus Westerlind",
            "username": "Marwes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f01de8e503c649034a53a8fdf3ad2e107ad9ad2d",
          "message": "refactor(client): Use async/await more (#2437)\n\n* refactor: Use async/await in client.rs\r\n\r\n* refactor: Simplify client.rs a bit more\r\n\r\n* refactor: Allow !Unpin in Lazy\r\n\r\n* Remove some impl Future\r\n\r\n* Remove some combinator use",
          "timestamp": "2021-02-18T10:35:43-08:00",
          "tree_id": "ecce068928942422a611eea6f2e2c7533022f73d",
          "url": "https://github.com/stevepentland/hyper/commit/f01de8e503c649034a53a8fdf3ad2e107ad9ad2d"
        },
        "date": 1613684700858,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 69553,
            "range": "± 10034",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "david.pdrsn@gmail.com",
            "name": "David Pedersen",
            "username": "davidpdrsn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6efc1a1cce0abdd4e3263e7ea328ad49616d8050",
          "message": "docs(server): add server example using `tower::make::Shared` (#2440)\n\n`tower` 0.4.5 introduced `Shared` which is a `MakeService` that produces\r\nservices by cloning an inner service. This works quite well with `hyper`\r\nif your service doesn't need the incoming connection and implements\r\n`Clone`.\r\n\r\nHowever that might not be entirely obvious so I thought it made sense to\r\nadd an example to the docs.\r\n\r\nI wasn't quite sure if the example should go in the server or service\r\nmodule docs but since there already is an example using\r\n`make_service_fn` in the server docs I opted to add it there. Let me\r\nknow if you'd rather have it somewhere else.",
          "timestamp": "2021-02-19T13:50:43-08:00",
          "tree_id": "6b933a218c948e3b2b4e3c4609e622016b6c7137",
          "url": "https://github.com/stevepentland/hyper/commit/6efc1a1cce0abdd4e3263e7ea328ad49616d8050"
        },
        "date": 1613780709029,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 39775,
            "range": "± 4573",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cfir16@gmail.com",
            "name": "CfirTsabari",
            "username": "CfirTsabari"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b11eee9bde421cdc1680cadabfd38c5aff8e62f",
          "message": "fix(client): omit default port from automatic Host headers (#2441)\n\nFixes hyperium/hyper#2407",
          "timestamp": "2021-02-22T11:33:28-08:00",
          "tree_id": "5623a60dd93bcebc066f49c52f6b97ab29c074b1",
          "url": "https://github.com/stevepentland/hyper/commit/0b11eee9bde421cdc1680cadabfd38c5aff8e62f"
        },
        "date": 1614029369991,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 72824,
            "range": "± 16062",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zonyitoo@users.noreply.github.com",
            "name": "ty",
            "username": "zonyitoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c946af49cc7fbbc6bd4894283a654625c2ea383",
          "message": "feat(server): add `AddrIncoming::from_listener` constructor (#2439)",
          "timestamp": "2021-02-22T16:18:38-08:00",
          "tree_id": "895fb85f54da75512a8656c13aeea97236b7fc04",
          "url": "https://github.com/stevepentland/hyper/commit/4c946af49cc7fbbc6bd4894283a654625c2ea383"
        },
        "date": 1614051683415,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 66708,
            "range": "± 12140",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f162ca2f2fd14681e11dd8b9ba8d1469b2b9271b",
          "message": "docs(ffi): generate FFI documentation (#2447)",
          "timestamp": "2021-02-26T19:00:37-08:00",
          "tree_id": "6fb822dc3e7c899c8cfbd23348c87583879f465a",
          "url": "https://github.com/stevepentland/hyper/commit/f162ca2f2fd14681e11dd8b9ba8d1469b2b9271b"
        },
        "date": 1614406100251,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 71637,
            "range": "± 9276",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peter@smitmail.eu",
            "name": "Peter Smit",
            "username": "psmit"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cbf9527dfb313b3f84fcd83260c5c72ce4a1beb",
          "message": "fix(server): skip automatic Content-Length headers when not allowed (#2216)\n\nCloses #2215",
          "timestamp": "2021-03-04T17:03:33-08:00",
          "tree_id": "8c8f7d8ab9d86213ee1f48be464f206ede927d71",
          "url": "https://github.com/stevepentland/hyper/commit/8cbf9527dfb313b3f84fcd83260c5c72ce4a1beb"
        },
        "date": 1614953296289,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 50016,
            "range": "± 792",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76654022+0x79756b69@users.noreply.github.com",
            "name": "0x79756b69",
            "username": "0x79756b69"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34085afef66b453dfee1c561e6683546bf4600c8",
          "message": "docs(examples): use hyper v0.14 and full feature (#2451)",
          "timestamp": "2021-03-08T14:19:24-08:00",
          "tree_id": "67d588d032acb77655c972fa0622805749a364a2",
          "url": "https://github.com/stevepentland/hyper/commit/34085afef66b453dfee1c561e6683546bf4600c8"
        },
        "date": 1615266483652,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 48860,
            "range": "± 5689",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "346512016@qq.com",
            "name": "kolapapa",
            "username": "kolapapa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "297a068454115e8d5426f9051398d851f69235bf",
          "message": "docs(examples): upgrade tokio version (#2456)",
          "timestamp": "2021-03-10T10:00:39-08:00",
          "tree_id": "98004bc3096176316ed6534e6e96eda3d08cb825",
          "url": "https://github.com/stevepentland/hyper/commit/297a068454115e8d5426f9051398d851f69235bf"
        },
        "date": 1615441724783,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 52399,
            "range": "± 8731",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@dbrgn.ch",
            "name": "Danilo Bargen",
            "username": "dbrgn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5",
          "message": "docs(body): add links to to_bytes and aggregate (#2464)\n\nSince these two functions are not methods on the `Body`, they aren't\r\nvery discoverable. So a note in the docs would definitely be helpful.",
          "timestamp": "2021-03-15T15:40:28-07:00",
          "tree_id": "14b6039d4a111f52351c76ea2f9cdbb19cf616c6",
          "url": "https://github.com/stevepentland/hyper/commit/eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5"
        },
        "date": 1615867587897,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 42377,
            "range": "± 5776",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@dbrgn.ch",
            "name": "Danilo Bargen",
            "username": "dbrgn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5",
          "message": "docs(body): add links to to_bytes and aggregate (#2464)\n\nSince these two functions are not methods on the `Body`, they aren't\r\nvery discoverable. So a note in the docs would definitely be helpful.",
          "timestamp": "2021-03-15T15:40:28-07:00",
          "tree_id": "14b6039d4a111f52351c76ea2f9cdbb19cf616c6",
          "url": "https://github.com/stevepentland/hyper/commit/eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5"
        },
        "date": 1615869727124,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 66202,
            "range": "± 6704",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghostd@users.noreply.github.com",
            "name": "Vincent Ricard",
            "username": "ghostd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48fdaf160689f333e9bb63388d0b1d0fa29a1391",
          "message": "fix(headers): Support multiple Content-Length values on same line (#2471)\n\nCloses #2470",
          "timestamp": "2021-03-19T10:38:58-07:00",
          "tree_id": "8444662a531c8356a16120e2128a7e4f20b905a2",
          "url": "https://github.com/stevepentland/hyper/commit/48fdaf160689f333e9bb63388d0b1d0fa29a1391"
        },
        "date": 1616198201321,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 67831,
            "range": "± 5218",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghostd@users.noreply.github.com",
            "name": "Vincent Ricard",
            "username": "ghostd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "48fdaf160689f333e9bb63388d0b1d0fa29a1391",
          "message": "fix(headers): Support multiple Content-Length values on same line (#2471)\n\nCloses #2470",
          "timestamp": "2021-03-19T10:38:58-07:00",
          "tree_id": "8444662a531c8356a16120e2128a7e4f20b905a2",
          "url": "https://github.com/stevepentland/hyper/commit/48fdaf160689f333e9bb63388d0b1d0fa29a1391"
        },
        "date": 1616200601086,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 48552,
            "range": "± 2228",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "thomasdezeeuw@gmail.com",
            "name": "Thomas de Zeeuw",
            "username": "Thomasdezeeuw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41f99578a53845e5e0bb999c101bef8307e1ce5f",
          "message": "refactor(dependencies): update to socket2 v0.4.0 (#2472)",
          "timestamp": "2021-03-22T15:16:31-07:00",
          "tree_id": "bd982e385979d9a9b4441522a8e54b095729bb2e",
          "url": "https://github.com/stevepentland/hyper/commit/41f99578a53845e5e0bb999c101bef8307e1ce5f"
        },
        "date": 1616476137234,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 49971,
            "range": "± 2036",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "thomasdezeeuw@gmail.com",
            "name": "Thomas de Zeeuw",
            "username": "Thomasdezeeuw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "41f99578a53845e5e0bb999c101bef8307e1ce5f",
          "message": "refactor(dependencies): update to socket2 v0.4.0 (#2472)",
          "timestamp": "2021-03-22T15:16:31-07:00",
          "tree_id": "bd982e385979d9a9b4441522a8e54b095729bb2e",
          "url": "https://github.com/stevepentland/hyper/commit/41f99578a53845e5e0bb999c101bef8307e1ce5f"
        },
        "date": 1616479276005,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 74360,
            "range": "± 6623",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vagelis.prokopiou@gmail.com",
            "name": "Vagelis Prokopiou",
            "username": "Vagelis-Prokopiou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51ed71b0a6e1d90d324f87151434334bab6fb837",
          "message": "docs(client): use Method::POST to match the example in https://hyper.rs/guides/client/advanced/ (#2479)",
          "timestamp": "2021-03-25T13:34:03-07:00",
          "tree_id": "908a1fb4a47378d16439458035a25a2dd41c1516",
          "url": "https://github.com/stevepentland/hyper/commit/51ed71b0a6e1d90d324f87151434334bab6fb837"
        },
        "date": 1616740234625,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 67647,
            "range": "± 11526",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "98e7e0bd15642cf9e4bf07b3b03d8b4e538623ba",
          "message": "v0.14.5",
          "timestamp": "2021-03-26T12:03:24-07:00",
          "tree_id": "db5bad5201b0c92abc03652924d33f6cb080b9f1",
          "url": "https://github.com/stevepentland/hyper/commit/98e7e0bd15642cf9e4bf07b3b03d8b4e538623ba"
        },
        "date": 1616813636268,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 67193,
            "range": "± 9703",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zonyitoo@users.noreply.github.com",
            "name": "ty",
            "username": "zonyitoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "4c946af49cc7fbbc6bd4894283a654625c2ea383",
          "message": "feat(server): add `AddrIncoming::from_listener` constructor (#2439)",
          "timestamp": "2021-02-22T16:18:38-08:00",
          "tree_id": "895fb85f54da75512a8656c13aeea97236b7fc04",
          "url": "https://github.com/stevepentland/hyper/commit/4c946af49cc7fbbc6bd4894283a654625c2ea383"
        },
        "date": 1616822069963,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 44668,
            "range": "± 836",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kevin@burke.dev",
            "name": "Kevin Burke",
            "username": "kevinburke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa4a2eaa44ce4eb8a0049e4363f59f323ed56854",
          "message": "chore(LICENSE): update license year (#2491)",
          "timestamp": "2021-04-06T14:49:37-07:00",
          "tree_id": "b6f6db86e5b8ff78bec3e88897081599827b72bd",
          "url": "https://github.com/stevepentland/hyper/commit/aa4a2eaa44ce4eb8a0049e4363f59f323ed56854"
        },
        "date": 1617756389198,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 51086,
            "range": "± 1684",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kevin@burke.dev",
            "name": "Kevin Burke",
            "username": "kevinburke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ed2fdb7b6a2963cea7577df05ddc41c56fee7246",
          "message": "chore(ffi): fix compile errors and warnings (#2492)\n\nAs I understand it, \"cargo rustc\" in gen_header.sh generates a ton of\r\nerrors, but still manages to generate an object that can be used by\r\ncbindgen to generate hyper.h.\r\n\r\nHowever, I tried to make a separate change to add more fields to\r\nhyper.h, and learned that \"cargo rustc\" stops if it reaches 50 errors,\r\nwhich I reached. I was able to buy some headroom and fix a number of\r\nthe compilation errors by adding imports to the fake Cargo.toml we\r\ngenerate in gen_header.sh.\r\n\r\nI wasn't sure how to resolve imports like \"crate::Result\" which appear\r\nto reference the top-level src/error.rs, and print an error when they\r\nare compiled in gen_header.sh. But I only need to buy headroom under\r\nthe 50 error count for now, which I was able to do by adding the\r\nimports.\r\n\r\nIt is possible that someone more familiar with Rust than me could look\r\nat this and know what to change to get the total number of errors to\r\nzero.",
          "timestamp": "2021-04-07T16:12:02-07:00",
          "tree_id": "c86a0c709d655d6d25be94e3fbb6727ece6c8c72",
          "url": "https://github.com/stevepentland/hyper/commit/ed2fdb7b6a2963cea7577df05ddc41c56fee7246"
        },
        "date": 1617864363971,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 43730,
            "range": "± 5226",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "pipeline": [
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "2f2ceb24265a7e63601cf1ffde7d586cd666a783",
          "message": "chore(ci): automatically publish benchmarks in a graph",
          "timestamp": "2020-11-16T16:51:30-08:00",
          "tree_id": "5b90f0b2e08fd62a41b6f1f90d45da63bd559713",
          "url": "https://github.com/stevepentland/hyper/commit/2f2ceb24265a7e63601cf1ffde7d586cd666a783"
        },
        "date": 1605579035918,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 68916,
            "range": "± 24143",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "2a19ab74ed69bc776da25544e98979c9fb6e1834",
          "message": "feat(http1): Make HTTP/1 support an optional feature\n\ncc #2251\n\nBREAKING CHANGE: This puts all HTTP/1 methods and support behind an\n  `http1` cargo feature, which will not be enabled by default. To use\n  HTTP/1, add `features = [\"http1\"]` to the hyper dependency in your\n  `Cargo.toml`.",
          "timestamp": "2020-11-17T10:42:20-08:00",
          "tree_id": "9f96eaaa5c228f8eba653b9ef2cfec2d099f3f10",
          "url": "https://github.com/stevepentland/hyper/commit/2a19ab74ed69bc776da25544e98979c9fb6e1834"
        },
        "date": 1605651044102,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 78714,
            "range": "± 56105",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e55583d30a597884883f1a51b678f5c57c76765",
          "message": "feat(client): Make `client` an optional feature\n\ncc #2223\r\n\r\nBREAKING CHANGE: The HTTP client of hyper is now an optional feature. To\r\n  enable the client, add `features = [\"client\"]` to the dependency in\r\n  your `Cargo.toml`.",
          "timestamp": "2020-11-17T17:06:25-08:00",
          "tree_id": "a96d23e59a63b4783772da0aa92b70f346ba446c",
          "url": "https://github.com/stevepentland/hyper/commit/4e55583d30a597884883f1a51b678f5c57c76765"
        },
        "date": 1605665412949,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 56811,
            "range": "± 7000",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bdb5e5d6946f4e3f8115a6b1683aff6a04df73de",
          "message": "feat(server): Make the `server` code an optional feature (#2334)\n\ncc #2223 \r\n\r\nBREAKING CHANGE: The HTTP server code is now an optional feature. To\r\n  enable the server, add `features = [\"server\"]` to the dependency in\r\n  your `Cargo.toml`.",
          "timestamp": "2020-11-18T11:02:20-08:00",
          "tree_id": "260a94fe0611cc0d6d30c331e182fd0bfcc347cf",
          "url": "https://github.com/stevepentland/hyper/commit/bdb5e5d6946f4e3f8115a6b1683aff6a04df73de"
        },
        "date": 1605737430082,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 70255,
            "range": "± 26257",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abb6471690f796e1b96bb2d7b1042f424d69f169",
          "message": "refactor(client): use tokio's TcpSocket for more sockopts (#2335)\n\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-18T14:45:45-08:00",
          "tree_id": "c8d1bedaa9af64428ba5cdc93170b1c62cc3564e",
          "url": "https://github.com/stevepentland/hyper/commit/abb6471690f796e1b96bb2d7b1042f424d69f169"
        },
        "date": 1605751815661,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 59674,
            "range": "± 16766",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ed2b22a7f66899d338691552fbcb6c0f2f4e06b9",
          "message": "feat(lib): disable all optional features by default (#2336)\n\nBREAKING CHANGE: All optional features have been disabled by default.",
          "timestamp": "2020-11-19T10:05:39-08:00",
          "tree_id": "6e1ed1ba8f1fec285f11643f67ff48ea7e92a9a5",
          "url": "https://github.com/stevepentland/hyper/commit/ed2b22a7f66899d338691552fbcb6c0f2f4e06b9"
        },
        "date": 1605823796407,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 49556,
            "range": "± 2459",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "121c33132c0950aaa422848cdc43f6691ddf5785",
          "message": "feat(upgrade): Moved HTTP upgrades off `Body` to a new API (#2337)\n\nCloses #2086\r\n\r\nBREAKING CHANGE: The method `Body::on_upgrade()` is gone. It is\r\n  essentially replaced with `hyper::upgrade::on(msg)`.",
          "timestamp": "2020-11-19T16:36:12-08:00",
          "tree_id": "33e278842408a37663173a39ba973df4e6786bdc",
          "url": "https://github.com/stevepentland/hyper/commit/121c33132c0950aaa422848cdc43f6691ddf5785"
        },
        "date": 1605838180922,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 45577,
            "range": "± 6146",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6aadb830072959497f414c01bcdba4c8e681088",
          "message": "perf(lib): re-enable writev support (#2338)\n\nTokio's `AsyncWrite` trait once again has support for vectored writes in\r\nTokio 0.3.4 (see tokio-rs/tokio#3149).\r\n\r\nThis branch re-enables vectored writes in Hyper for HTTP/1. Using\r\nvectored writes in HTTP/2 will require an upstream change in the `h2`\r\ncrate as well.\r\n\r\nI've removed the adaptive write buffer implementation\r\nthat attempts to detect whether vectored IO is or is not available,\r\nsince the Tokio 0.3.4 `AsyncWrite` trait exposes this directly via the\r\n`is_write_vectored` method. Now, we just ask the IO whether or not it\r\nsupports vectored writes, and configure the buffer accordingly. This\r\nmakes the implementation somewhat simpler.\r\n\r\nThis also removes `http1_writev()` methods from the builders. These are\r\nno longer necessary, as Hyper can now determine whether or not\r\nto use vectored writes based on `is_write_vectored`, rather than trying\r\nto auto-detect it.\r\n\r\nCloses #2320 \r\n\r\nBREAKING CHANGE: Removed `http1_writev` methods from `client::Builder`,\r\n  `client::conn::Builder`, `server::Builder`, and `server::conn::Builder`.\r\n  \r\n  Vectored writes are now enabled based on whether the `AsyncWrite`\r\n  implementation in use supports them, rather than though adaptive\r\n  detection. To explicitly disable vectored writes, users may wrap the IO\r\n  in a newtype that implements `AsyncRead` and `AsyncWrite` and returns\r\n  `false` from its `AsyncWrite::is_write_vectored` method.",
          "timestamp": "2020-11-24T10:31:48-08:00",
          "tree_id": "c91fc21aebcb62085b5295b5e9e68c8c5b58242f",
          "url": "https://github.com/stevepentland/hyper/commit/d6aadb830072959497f414c01bcdba4c8e681088"
        },
        "date": 1606255788333,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 53447,
            "range": "± 7602",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a470446deb2cb2c0e3700f67d9f70097d0d7d75f",
          "message": "chore(error): remove undocumented public error module (#2344)",
          "timestamp": "2020-11-25T12:52:07-08:00",
          "tree_id": "c1accd6ae40bf4b1a972ba66ccfaa01429845765",
          "url": "https://github.com/stevepentland/hyper/commit/a470446deb2cb2c0e3700f67d9f70097d0d7d75f"
        },
        "date": 1606342585491,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 56174,
            "range": "± 4137",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "robert@octarineparrot.com",
            "name": "Robert Clipsham",
            "username": "mrmonday"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ba2a141a6f8736446ff4a0111df347c0dc66f6c",
          "message": "test(client): Upgrade libpnet depedency to 0.27.2 [#2347] (#2348)\n\nAdditionally, only depend on pnet_datalink to reduce compile times.\n\nCloses #2347",
          "timestamp": "2020-11-27T21:55:03-08:00",
          "tree_id": "4b365d0f3aedef52acb5f5648720da602aa165f4",
          "url": "https://github.com/stevepentland/hyper/commit/1ba2a141a6f8736446ff4a0111df347c0dc66f6c"
        },
        "date": 1606544158116,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 55346,
            "range": "± 4509",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "faern@faern.net",
            "name": "Linus Färnstrand",
            "username": "faern"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21dea2114574bbeda41bad5dff5e8e3613352124",
          "message": "chore(dependencies): upgrade socket2 (#2349)\n\nUpgrades to a version not making invalid assumptions about\nthe memory layout of std::net::SocketAddr",
          "timestamp": "2020-11-30T05:48:28-08:00",
          "tree_id": "9ab22d866d6f8bd5c19045971f7def89440f4b46",
          "url": "https://github.com/stevepentland/hyper/commit/21dea2114574bbeda41bad5dff5e8e3613352124"
        },
        "date": 1606755689001,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 47001,
            "range": "± 2324",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "campbellC@users.noreply.github.com",
            "name": "Chris Campbell",
            "username": "campbellC"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8641733be3c732acd6c94ec9ad161b88a4d467d",
          "message": "docs(client): add example of client conn usage (#2350)\n\nAdd basic, module level example for the Builder performing a handshake,\r\nspawning a task to run the Connection and sending a single request and\r\nreceiving the response.\r\n\r\nCloses #2272",
          "timestamp": "2020-12-01T15:58:28-08:00",
          "tree_id": "e2f028a020be1b9371e71c37d2c8a1ede13cd4fe",
          "url": "https://github.com/stevepentland/hyper/commit/f8641733be3c732acd6c94ec9ad161b88a4d467d"
        },
        "date": 1606878793537,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 61660,
            "range": "± 9712",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4e24332a0cd44068a806081d51686f50c086056",
          "message": "feat(client): change DNS Resolver to resolve to SocketAddrs (#2346)\n\nThe DNS resolver part of `HttpConnector` used to require resolving to\r\n`IpAddr`s, and this changes it so that they resolve to `SocketAddr`s.\r\nThe main benefit here is allowing for resolvers to set the IPv6 zone ID\r\nwhen resolving, but it also just more closely matches\r\n`std::net::ToSocketAddrs`.\r\n\r\nCloses #1937\r\n\r\nBREAKING CHANGE: Custom resolvers used with `HttpConnector` must change\r\n  to resolving to an iterator of `SocketAddr`s instead of `IpAddr`s.",
          "timestamp": "2020-12-03T14:21:19-08:00",
          "tree_id": "f15bc5873b96ec18a2c130878bec5136d305e561",
          "url": "https://github.com/stevepentland/hyper/commit/b4e24332a0cd44068a806081d51686f50c086056"
        },
        "date": 1607045076231,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 55399,
            "range": "± 3550",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@bnoordhuis.nl",
            "name": "Ben Noordhuis",
            "username": "bnoordhuis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d9a5806e146798d0cbe67672bbe3ad5ae680393",
          "message": "refactor(http1): change HTTP2->1.1 warning to debug (#2354)\n\nWe use hyper in a proxy-like way where an incoming HTTP/2 request is\r\nproxied to a HTTP/1 backend and it was reported that the protocol\r\ncoercion warnings were a limiting factor in the total throughput\r\nof the system.\r\n\r\nWhile it can be worked around by explicitly setting the request version\r\nto HTTP_11, it seems likely other people also hit this performance snag.\r\nThat's why this commit changes them from warnings to debug messages.",
          "timestamp": "2020-12-14T13:57:32-08:00",
          "tree_id": "9e3c4f830981935a989cd5e49ed4969a219ee850",
          "url": "https://github.com/stevepentland/hyper/commit/7d9a5806e146798d0cbe67672bbe3ad5ae680393"
        },
        "date": 1607996695373,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 57248,
            "range": "± 11806",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arve.knudsen@gmail.com",
            "name": "Arve Knudsen",
            "username": "aknuds1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ede3a6bd9dfd8f33d6c0a4efd94f5bdafe383ebd",
          "message": "refactor(http1): move upgrade state from body to head (#2353)\n\nMove state required for protocol upgrades to head\r\nrepresentations, instead of associating it with the body.\r\n\r\nCloses #2340.\r\n\r\nSigned-off-by: Arve Knudsen <arve.knudsen@gmail.com>",
          "timestamp": "2020-12-15T07:31:48-08:00",
          "tree_id": "ce286b8ff248e5bf4aa6e6f01981ed49c84d72b1",
          "url": "https://github.com/stevepentland/hyper/commit/ede3a6bd9dfd8f33d6c0a4efd94f5bdafe383ebd"
        },
        "date": 1608059602184,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 58213,
            "range": "± 18962",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alex@forallsecure.com",
            "name": "Alex Rebert",
            "username": "alpire"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1dd761c87de226261599ff2518fe9d231ba1c82d",
          "message": "fix(http1): ignore chunked trailers (#2357)\n\nPreviously, hyper returned an \"Invalid chunk end CR\" error on chunked\r\nresponses with trailers, as described in RFC 7230 Section 4.1.2. This\r\ncommit adds code to ignore the trailers.\r\n\r\nCloses #2171",
          "timestamp": "2020-12-15T14:23:07-08:00",
          "tree_id": "6ad353d3f416f304ea0c71efb8de8cfe808c235a",
          "url": "https://github.com/stevepentland/hyper/commit/1dd761c87de226261599ff2518fe9d231ba1c82d"
        },
        "date": 1608090274965,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 48185,
            "range": "± 2143",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46450720+bishtpawan@users.noreply.github.com",
            "name": "Pawan Singh Bisht",
            "username": "bishtpawan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c593c292508f31a2986d5ddac3fb23b234a0e2c",
          "message": "refactor(error): use `matches!` macro in `Error::is_*` methods (#2367)",
          "timestamp": "2020-12-21T12:25:47-08:00",
          "tree_id": "c61537b497a46b23e64414fa1f2c822dadd22fc4",
          "url": "https://github.com/stevepentland/hyper/commit/6c593c292508f31a2986d5ddac3fb23b234a0e2c"
        },
        "date": 1608590741984,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 61209,
            "range": "± 27158",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pankajchaudhary172@gmail.com",
            "name": "Pankaj Chaudhary",
            "username": "PankajChaudhary5"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b3077da1f891b09de18320d9f6ccf94f136943d",
          "message": "refactor(http1): updated Encoder/Decoder match with the matches macro (#2368)",
          "timestamp": "2020-12-22T10:50:57-08:00",
          "tree_id": "954af38876df04f6db5c6ee06c14b56137895d6c",
          "url": "https://github.com/stevepentland/hyper/commit/3b3077da1f891b09de18320d9f6ccf94f136943d"
        },
        "date": 1608671604485,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 55628,
            "range": "± 4428",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "c784a10174deb461b2eaa59ed9fabae5c315eb68",
          "message": "v0.14.0",
          "timestamp": "2020-12-23T10:58:04-08:00",
          "tree_id": "d2d618457fe2744c73a88c191d7ac276e12343ba",
          "url": "https://github.com/stevepentland/hyper/commit/c784a10174deb461b2eaa59ed9fabae5c315eb68"
        },
        "date": 1608751309354,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 48754,
            "range": "± 3301",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "3d6bdbe85006e623eae83d7c3ce9a45680d6c2c8",
          "message": "v0.14.1",
          "timestamp": "2020-12-23T13:01:14-08:00",
          "tree_id": "75ef9cf142d8a168ed3445192349cd6e581a8501",
          "url": "https://github.com/stevepentland/hyper/commit/3d6bdbe85006e623eae83d7c3ce9a45680d6c2c8"
        },
        "date": 1608772132960,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 47670,
            "range": "± 1717",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mussitantesmortem@gmail.com",
            "name": "Maxim Zhukov",
            "username": "Mephistophiles"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "510b998ff3dc75e0dfc7e236212f5fef33142ad1",
          "message": "chore(dev-dependencies): bump url to 2.2 (#2379)",
          "timestamp": "2020-12-28T15:52:28-08:00",
          "tree_id": "cd9b46cf00546ee0223f287f33d1698b9c2ee161",
          "url": "https://github.com/stevepentland/hyper/commit/510b998ff3dc75e0dfc7e236212f5fef33142ad1"
        },
        "date": 1609210179666,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 54193,
            "range": "± 4943",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "8861f9a7867216c81ea14ac6224c11a1303e7761",
          "message": "v0.14.2",
          "timestamp": "2020-12-29T10:51:50-08:00",
          "tree_id": "aa4f215d53ca79b417c4b5250584edb476b9caa6",
          "url": "https://github.com/stevepentland/hyper/commit/8861f9a7867216c81ea14ac6224c11a1303e7761"
        },
        "date": 1609288331829,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 56319,
            "range": "± 2161",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "c9c46ed60bd43484d67a98a63496ad0277c791a2",
          "message": "refactor(ffi): Add Reason-Phrase API\n\nThis adds an internal ability to copy the HTTP/1 reason-phrase and place\nit in the `http::Extensions` of a response, if it doesn't match the\ncanonical reason. This could be exposed in the Rust API later, but for\nnow it is only used by the C API.",
          "timestamp": "2021-01-08T10:25:53-08:00",
          "tree_id": "08e88a2638eb39443de49d5c60610b9f5c4315da",
          "url": "https://github.com/stevepentland/hyper/commit/c9c46ed60bd43484d67a98a63496ad0277c791a2"
        },
        "date": 1610138004484,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 47453,
            "range": "± 2011",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.westerlind@distilnetworks.com",
            "name": "Markus Westerlind",
            "username": "Marwes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a15f3f7f0f536c74d51636bbc00f6b5ec110472b",
          "message": "refactor(client): minimize the amount of instantiated code (#2391)\n\n* Halve the amount of conn_task instantiations\r\n* Extract non-generic parts of client::handshake\r\n* Extract the non-generic parts of call_async",
          "timestamp": "2021-01-12T16:18:22-08:00",
          "tree_id": "56d1582e4c7f3e995ff4cba0fa9bf34cc857408d",
          "url": "https://github.com/stevepentland/hyper/commit/a15f3f7f0f536c74d51636bbc00f6b5ec110472b"
        },
        "date": 1610505215404,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 53431,
            "range": "± 6803",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0ddb669328163001fd18a4a21109e95047848bf",
          "message": "refactor(lib): apply unreachable_pub lint (#2400)\n\nCloses #2390",
          "timestamp": "2021-01-14T09:57:55-08:00",
          "tree_id": "4bcb4014c9adce39c308cc16bb2ae4cc95515ea4",
          "url": "https://github.com/stevepentland/hyper/commit/f0ddb669328163001fd18a4a21109e95047848bf"
        },
        "date": 1610661513995,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 54070,
            "range": "± 3660",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "257d6a99193c9404ce055727833e1490c23a7197",
          "message": "docs(server): set doc_cfg attributes for `tcp` feature gated Server methods (#2401)",
          "timestamp": "2021-01-14T13:56:49-08:00",
          "tree_id": "50a57b0eb9c3a2e602849788aa791e078f5087bb",
          "url": "https://github.com/stevepentland/hyper/commit/257d6a99193c9404ce055727833e1490c23a7197"
        },
        "date": 1610669448926,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 54282,
            "range": "± 3043",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "24809834+aeryz@users.noreply.github.com",
            "name": "Abdullah Eryuzlu",
            "username": "aeryz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf8d74ad1cf7d0b33b470b1e61625ebac56f9c4c",
          "message": "feat(body): add `send_trailers` to Body channel's `Sender` (#2387)\n\nCloses #2260",
          "timestamp": "2021-01-15T10:14:21-08:00",
          "tree_id": "98ca623fc9171719aabfeac75bad0285557a25fb",
          "url": "https://github.com/stevepentland/hyper/commit/bf8d74ad1cf7d0b33b470b1e61625ebac56f9c4c"
        },
        "date": 1610746337275,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 46810,
            "range": "± 1779",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f821ecdd197b42253b4930f1d67ae98b5c2028ea",
          "message": "docs(body): set doc_cfg attribute for `Body::wrap_stream` (#2403)",
          "timestamp": "2021-01-15T16:24:03-08:00",
          "tree_id": "aa6c2c95e46ee99caa91cd386d804b688c0a49b0",
          "url": "https://github.com/stevepentland/hyper/commit/f821ecdd197b42253b4930f1d67ae98b5c2028ea"
        },
        "date": 1610764414051,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 47151,
            "range": "± 4085",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mikeroelens@gmail.com",
            "name": "Mike Roelens",
            "username": "mikeroelens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec2fd4a15f6c0ec612c38a9596c56cd87477d0f9",
          "message": "docs(client): fix typo in httpbin.org domain (#2406)",
          "timestamp": "2021-01-19T08:30:17-08:00",
          "tree_id": "e7ca69f8ee39808cd92f849107091c006710c06e",
          "url": "https://github.com/stevepentland/hyper/commit/ec2fd4a15f6c0ec612c38a9596c56cd87477d0f9"
        },
        "date": 1611080264368,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 46316,
            "range": "± 3969",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "paolo@paolo565.org",
            "name": "Paolo Barbolini",
            "username": "paolobarbolini"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "237b2ce08341266b62a8d1cfa974779c511a0710",
          "message": "refactor(lib): Remove useless uses of Pin (#2405)",
          "timestamp": "2021-01-19T14:51:34-08:00",
          "tree_id": "850a7bc3c25f7d4f85ccb325ecd0e717537eedf0",
          "url": "https://github.com/stevepentland/hyper/commit/237b2ce08341266b62a8d1cfa974779c511a0710"
        },
        "date": 1611110368992,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 53927,
            "range": "± 4204",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "1928682b33f98244435ba6d574677546205a15ec",
          "message": "feat(ffi): add HYPERE_INVALID_PEER_MESSAGE error code for parse errors",
          "timestamp": "2021-01-20T15:10:19-08:00",
          "tree_id": "e87d140b4320ce0f482aa7ee06ddeb97a4822f19",
          "url": "https://github.com/stevepentland/hyper/commit/1928682b33f98244435ba6d574677546205a15ec"
        },
        "date": 1611197091021,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 66887,
            "range": "± 9697",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "inikulin@cloudflare.com",
            "name": "Ivan Nikulin",
            "username": "inikulin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c8121f1735aa8efeb0d5e4ef595363c373ba470",
          "message": "fix(client): HTTP/1 client \"Transfer-Encoding\" repair code would panic (#2410)\n\nCloses #2409",
          "timestamp": "2021-01-26T10:36:58-08:00",
          "tree_id": "774a20785cfcebc335095bbd9f4c823305ac5cd4",
          "url": "https://github.com/stevepentland/hyper/commit/2c8121f1735aa8efeb0d5e4ef595363c373ba470"
        },
        "date": 1611695972515,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 47808,
            "range": "± 1720",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jplatte+git@posteo.de",
            "name": "Jonas Platte",
            "username": "jplatte"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "43412a950f2052e7865eb596c1d39067b2002a94",
          "message": "refactor(lib): Switch from pin-project to pin-project-lite",
          "timestamp": "2021-01-28T14:09:53-08:00",
          "tree_id": "f8f20dc86e8ecfa06a44b844b7c9c04a6e940a29",
          "url": "https://github.com/stevepentland/hyper/commit/43412a950f2052e7865eb596c1d39067b2002a94"
        },
        "date": 1611883897597,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 45792,
            "range": "± 3240",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e8238c1b8d6351d42546a4423cf5598def1c35e",
          "message": "docs(body): warn about no length check in aggregate (#2415)\n\nThe to_bytes and aggregate don't check how long the body is, so the user\r\nbetter be aware.\r\n\r\nRelates to #2414.",
          "timestamp": "2021-02-02T09:34:40-08:00",
          "tree_id": "90f28099da0218b4f91839d4ca57aa5a3165f7b8",
          "url": "https://github.com/stevepentland/hyper/commit/5e8238c1b8d6351d42546a4423cf5598def1c35e"
        },
        "date": 1612296473661,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 74201,
            "range": "± 58205",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d2125c67c8087de863f74278a017c4caf37e6a9",
          "message": "perf(body): specialize BufList::copy_to_bytes (#2413)\n\nSome implementations of the Buf trait have an optimized version (for\r\nexample Bytes) of copy_to_bytes, opportunistically use that one.",
          "timestamp": "2021-02-02T17:09:06-08:00",
          "tree_id": "f97fa886587f34e8aa412ff28bb5d237ae850a3f",
          "url": "https://github.com/stevepentland/hyper/commit/4d2125c67c8087de863f74278a017c4caf37e6a9"
        },
        "date": 1612323273774,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 53267,
            "range": "± 6724",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "196d9bd69c0059dbff6771f6dce9188d4841c185",
          "message": "v0.14.4",
          "timestamp": "2021-02-05T15:54:38-08:00",
          "tree_id": "52f1523e30d46a411c7bac0f9e938ae39421a2d0",
          "url": "https://github.com/stevepentland/hyper/commit/196d9bd69c0059dbff6771f6dce9188d4841c185"
        },
        "date": 1612579478085,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 65515,
            "range": "± 13308",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "dfa1bb291d71978820e8077be94c1d5837935bbc",
          "message": "chore(ci): use --feature-powerset --depth 2 in features check",
          "timestamp": "2021-02-06T07:36:04-08:00",
          "tree_id": "f04ddfede071e40f67435154fd8726f257a4e024",
          "url": "https://github.com/stevepentland/hyper/commit/dfa1bb291d71978820e8077be94c1d5837935bbc"
        },
        "date": 1612633458538,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 50114,
            "range": "± 5578",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@arnavion.dev",
            "name": "Arnavion",
            "username": "Arnavion"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "42587059e6175735b1a8656c5ddbff0edb19294c",
          "message": "docs(server): use cfg_feature! on hyper::server::conn::tcp instead of #[cfg]\n\nThis is required to surface the required feature (`tcp`) in the generated docs\nfor `hyper::server::conn::{AddrIncoming, AddrStream}`. Before this change,\ntheir docs only mentioned the features needed for the `hyper::server::conn` mod\nitself.\n\nFixes #2425",
          "timestamp": "2021-02-09T13:31:41-08:00",
          "tree_id": "f50609d1ee3a1c9696d0e6954a6ec2e68494cfba",
          "url": "https://github.com/stevepentland/hyper/commit/42587059e6175735b1a8656c5ddbff0edb19294c"
        },
        "date": 1612914363767,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 71413,
            "range": "± 27457",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.westerlind@distilnetworks.com",
            "name": "Markus Westerlind",
            "username": "Marwes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f01de8e503c649034a53a8fdf3ad2e107ad9ad2d",
          "message": "refactor(client): Use async/await more (#2437)\n\n* refactor: Use async/await in client.rs\r\n\r\n* refactor: Simplify client.rs a bit more\r\n\r\n* refactor: Allow !Unpin in Lazy\r\n\r\n* Remove some impl Future\r\n\r\n* Remove some combinator use",
          "timestamp": "2021-02-18T10:35:43-08:00",
          "tree_id": "ecce068928942422a611eea6f2e2c7533022f73d",
          "url": "https://github.com/stevepentland/hyper/commit/f01de8e503c649034a53a8fdf3ad2e107ad9ad2d"
        },
        "date": 1613684713933,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 64356,
            "range": "± 23141",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "david.pdrsn@gmail.com",
            "name": "David Pedersen",
            "username": "davidpdrsn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6efc1a1cce0abdd4e3263e7ea328ad49616d8050",
          "message": "docs(server): add server example using `tower::make::Shared` (#2440)\n\n`tower` 0.4.5 introduced `Shared` which is a `MakeService` that produces\r\nservices by cloning an inner service. This works quite well with `hyper`\r\nif your service doesn't need the incoming connection and implements\r\n`Clone`.\r\n\r\nHowever that might not be entirely obvious so I thought it made sense to\r\nadd an example to the docs.\r\n\r\nI wasn't quite sure if the example should go in the server or service\r\nmodule docs but since there already is an example using\r\n`make_service_fn` in the server docs I opted to add it there. Let me\r\nknow if you'd rather have it somewhere else.",
          "timestamp": "2021-02-19T13:50:43-08:00",
          "tree_id": "6b933a218c948e3b2b4e3c4609e622016b6c7137",
          "url": "https://github.com/stevepentland/hyper/commit/6efc1a1cce0abdd4e3263e7ea328ad49616d8050"
        },
        "date": 1613780760349,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 58409,
            "range": "± 8024",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cfir16@gmail.com",
            "name": "CfirTsabari",
            "username": "CfirTsabari"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b11eee9bde421cdc1680cadabfd38c5aff8e62f",
          "message": "fix(client): omit default port from automatic Host headers (#2441)\n\nFixes hyperium/hyper#2407",
          "timestamp": "2021-02-22T11:33:28-08:00",
          "tree_id": "5623a60dd93bcebc066f49c52f6b97ab29c074b1",
          "url": "https://github.com/stevepentland/hyper/commit/0b11eee9bde421cdc1680cadabfd38c5aff8e62f"
        },
        "date": 1614029374451,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 74334,
            "range": "± 29649",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zonyitoo@users.noreply.github.com",
            "name": "ty",
            "username": "zonyitoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c946af49cc7fbbc6bd4894283a654625c2ea383",
          "message": "feat(server): add `AddrIncoming::from_listener` constructor (#2439)",
          "timestamp": "2021-02-22T16:18:38-08:00",
          "tree_id": "895fb85f54da75512a8656c13aeea97236b7fc04",
          "url": "https://github.com/stevepentland/hyper/commit/4c946af49cc7fbbc6bd4894283a654625c2ea383"
        },
        "date": 1614051674252,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 58897,
            "range": "± 14359",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f162ca2f2fd14681e11dd8b9ba8d1469b2b9271b",
          "message": "docs(ffi): generate FFI documentation (#2447)",
          "timestamp": "2021-02-26T19:00:37-08:00",
          "tree_id": "6fb822dc3e7c899c8cfbd23348c87583879f465a",
          "url": "https://github.com/stevepentland/hyper/commit/f162ca2f2fd14681e11dd8b9ba8d1469b2b9271b"
        },
        "date": 1614406121517,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 72887,
            "range": "± 31467",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peter@smitmail.eu",
            "name": "Peter Smit",
            "username": "psmit"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cbf9527dfb313b3f84fcd83260c5c72ce4a1beb",
          "message": "fix(server): skip automatic Content-Length headers when not allowed (#2216)\n\nCloses #2215",
          "timestamp": "2021-03-04T17:03:33-08:00",
          "tree_id": "8c8f7d8ab9d86213ee1f48be464f206ede927d71",
          "url": "https://github.com/stevepentland/hyper/commit/8cbf9527dfb313b3f84fcd83260c5c72ce4a1beb"
        },
        "date": 1614953310660,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 60703,
            "range": "± 7286",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76654022+0x79756b69@users.noreply.github.com",
            "name": "0x79756b69",
            "username": "0x79756b69"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34085afef66b453dfee1c561e6683546bf4600c8",
          "message": "docs(examples): use hyper v0.14 and full feature (#2451)",
          "timestamp": "2021-03-08T14:19:24-08:00",
          "tree_id": "67d588d032acb77655c972fa0622805749a364a2",
          "url": "https://github.com/stevepentland/hyper/commit/34085afef66b453dfee1c561e6683546bf4600c8"
        },
        "date": 1615266489670,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 62221,
            "range": "± 7040",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "346512016@qq.com",
            "name": "kolapapa",
            "username": "kolapapa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "297a068454115e8d5426f9051398d851f69235bf",
          "message": "docs(examples): upgrade tokio version (#2456)",
          "timestamp": "2021-03-10T10:00:39-08:00",
          "tree_id": "98004bc3096176316ed6534e6e96eda3d08cb825",
          "url": "https://github.com/stevepentland/hyper/commit/297a068454115e8d5426f9051398d851f69235bf"
        },
        "date": 1615441745449,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 75938,
            "range": "± 27673",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@dbrgn.ch",
            "name": "Danilo Bargen",
            "username": "dbrgn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5",
          "message": "docs(body): add links to to_bytes and aggregate (#2464)\n\nSince these two functions are not methods on the `Body`, they aren't\r\nvery discoverable. So a note in the docs would definitely be helpful.",
          "timestamp": "2021-03-15T15:40:28-07:00",
          "tree_id": "14b6039d4a111f52351c76ea2f9cdbb19cf616c6",
          "url": "https://github.com/stevepentland/hyper/commit/eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5"
        },
        "date": 1615867609157,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 61293,
            "range": "± 11961",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@dbrgn.ch",
            "name": "Danilo Bargen",
            "username": "dbrgn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5",
          "message": "docs(body): add links to to_bytes and aggregate (#2464)\n\nSince these two functions are not methods on the `Body`, they aren't\r\nvery discoverable. So a note in the docs would definitely be helpful.",
          "timestamp": "2021-03-15T15:40:28-07:00",
          "tree_id": "14b6039d4a111f52351c76ea2f9cdbb19cf616c6",
          "url": "https://github.com/stevepentland/hyper/commit/eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5"
        },
        "date": 1615869739960,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 65533,
            "range": "± 12442",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghostd@users.noreply.github.com",
            "name": "Vincent Ricard",
            "username": "ghostd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48fdaf160689f333e9bb63388d0b1d0fa29a1391",
          "message": "fix(headers): Support multiple Content-Length values on same line (#2471)\n\nCloses #2470",
          "timestamp": "2021-03-19T10:38:58-07:00",
          "tree_id": "8444662a531c8356a16120e2128a7e4f20b905a2",
          "url": "https://github.com/stevepentland/hyper/commit/48fdaf160689f333e9bb63388d0b1d0fa29a1391"
        },
        "date": 1616198173756,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 53356,
            "range": "± 8059",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghostd@users.noreply.github.com",
            "name": "Vincent Ricard",
            "username": "ghostd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "48fdaf160689f333e9bb63388d0b1d0fa29a1391",
          "message": "fix(headers): Support multiple Content-Length values on same line (#2471)\n\nCloses #2470",
          "timestamp": "2021-03-19T10:38:58-07:00",
          "tree_id": "8444662a531c8356a16120e2128a7e4f20b905a2",
          "url": "https://github.com/stevepentland/hyper/commit/48fdaf160689f333e9bb63388d0b1d0fa29a1391"
        },
        "date": 1616200602506,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 53405,
            "range": "± 5385",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "thomasdezeeuw@gmail.com",
            "name": "Thomas de Zeeuw",
            "username": "Thomasdezeeuw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41f99578a53845e5e0bb999c101bef8307e1ce5f",
          "message": "refactor(dependencies): update to socket2 v0.4.0 (#2472)",
          "timestamp": "2021-03-22T15:16:31-07:00",
          "tree_id": "bd982e385979d9a9b4441522a8e54b095729bb2e",
          "url": "https://github.com/stevepentland/hyper/commit/41f99578a53845e5e0bb999c101bef8307e1ce5f"
        },
        "date": 1616476161324,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 64668,
            "range": "± 8361",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "thomasdezeeuw@gmail.com",
            "name": "Thomas de Zeeuw",
            "username": "Thomasdezeeuw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "41f99578a53845e5e0bb999c101bef8307e1ce5f",
          "message": "refactor(dependencies): update to socket2 v0.4.0 (#2472)",
          "timestamp": "2021-03-22T15:16:31-07:00",
          "tree_id": "bd982e385979d9a9b4441522a8e54b095729bb2e",
          "url": "https://github.com/stevepentland/hyper/commit/41f99578a53845e5e0bb999c101bef8307e1ce5f"
        },
        "date": 1616479276195,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 69856,
            "range": "± 19938",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vagelis.prokopiou@gmail.com",
            "name": "Vagelis Prokopiou",
            "username": "Vagelis-Prokopiou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51ed71b0a6e1d90d324f87151434334bab6fb837",
          "message": "docs(client): use Method::POST to match the example in https://hyper.rs/guides/client/advanced/ (#2479)",
          "timestamp": "2021-03-25T13:34:03-07:00",
          "tree_id": "908a1fb4a47378d16439458035a25a2dd41c1516",
          "url": "https://github.com/stevepentland/hyper/commit/51ed71b0a6e1d90d324f87151434334bab6fb837"
        },
        "date": 1616740267000,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 84474,
            "range": "± 65526",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "98e7e0bd15642cf9e4bf07b3b03d8b4e538623ba",
          "message": "v0.14.5",
          "timestamp": "2021-03-26T12:03:24-07:00",
          "tree_id": "db5bad5201b0c92abc03652924d33f6cb080b9f1",
          "url": "https://github.com/stevepentland/hyper/commit/98e7e0bd15642cf9e4bf07b3b03d8b4e538623ba"
        },
        "date": 1616813632172,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 65974,
            "range": "± 17181",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zonyitoo@users.noreply.github.com",
            "name": "ty",
            "username": "zonyitoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "4c946af49cc7fbbc6bd4894283a654625c2ea383",
          "message": "feat(server): add `AddrIncoming::from_listener` constructor (#2439)",
          "timestamp": "2021-02-22T16:18:38-08:00",
          "tree_id": "895fb85f54da75512a8656c13aeea97236b7fc04",
          "url": "https://github.com/stevepentland/hyper/commit/4c946af49cc7fbbc6bd4894283a654625c2ea383"
        },
        "date": 1616822109374,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 64641,
            "range": "± 16232",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kevin@burke.dev",
            "name": "Kevin Burke",
            "username": "kevinburke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa4a2eaa44ce4eb8a0049e4363f59f323ed56854",
          "message": "chore(LICENSE): update license year (#2491)",
          "timestamp": "2021-04-06T14:49:37-07:00",
          "tree_id": "b6f6db86e5b8ff78bec3e88897081599827b72bd",
          "url": "https://github.com/stevepentland/hyper/commit/aa4a2eaa44ce4eb8a0049e4363f59f323ed56854"
        },
        "date": 1617756413060,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 64344,
            "range": "± 11532",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kevin@burke.dev",
            "name": "Kevin Burke",
            "username": "kevinburke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ed2fdb7b6a2963cea7577df05ddc41c56fee7246",
          "message": "chore(ffi): fix compile errors and warnings (#2492)\n\nAs I understand it, \"cargo rustc\" in gen_header.sh generates a ton of\r\nerrors, but still manages to generate an object that can be used by\r\ncbindgen to generate hyper.h.\r\n\r\nHowever, I tried to make a separate change to add more fields to\r\nhyper.h, and learned that \"cargo rustc\" stops if it reaches 50 errors,\r\nwhich I reached. I was able to buy some headroom and fix a number of\r\nthe compilation errors by adding imports to the fake Cargo.toml we\r\ngenerate in gen_header.sh.\r\n\r\nI wasn't sure how to resolve imports like \"crate::Result\" which appear\r\nto reference the top-level src/error.rs, and print an error when they\r\nare compiled in gen_header.sh. But I only need to buy headroom under\r\nthe 50 error count for now, which I was able to do by adding the\r\nimports.\r\n\r\nIt is possible that someone more familiar with Rust than me could look\r\nat this and know what to change to get the total number of errors to\r\nzero.",
          "timestamp": "2021-04-07T16:12:02-07:00",
          "tree_id": "c86a0c709d655d6d25be94e3fbb6727ece6c8c72",
          "url": "https://github.com/stevepentland/hyper/commit/ed2fdb7b6a2963cea7577df05ddc41c56fee7246"
        },
        "date": 1617864409936,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 58057,
            "range": "± 9982",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "end_to_end": [
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "2f2ceb24265a7e63601cf1ffde7d586cd666a783",
          "message": "chore(ci): automatically publish benchmarks in a graph",
          "timestamp": "2020-11-16T16:51:30-08:00",
          "tree_id": "5b90f0b2e08fd62a41b6f1f90d45da63bd559713",
          "url": "https://github.com/stevepentland/hyper/commit/2f2ceb24265a7e63601cf1ffde7d586cd666a783"
        },
        "date": 1605579190221,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 84114,
            "range": "± 3585",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 11495477,
            "range": "± 1197684",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 32149,
            "range": "± 698",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 222534,
            "range": "± 11513",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52010653,
            "range": "± 1339524",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 78330717,
            "range": "± 1675293",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 78798527,
            "range": "± 2189964",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 6157452,
            "range": "± 831925",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 35431,
            "range": "± 1849",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 57777,
            "range": "± 1128",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 193293,
            "range": "± 7430",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10765393,
            "range": "± 136261",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10954684,
            "range": "± 9304270",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10763347,
            "range": "± 9312804",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 67994833,
            "range": "± 4584048",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 72342197,
            "range": "± 6659955",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7414981,
            "range": "± 860859",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 66584,
            "range": "± 4947",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 134037,
            "range": "± 4139",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "2a19ab74ed69bc776da25544e98979c9fb6e1834",
          "message": "feat(http1): Make HTTP/1 support an optional feature\n\ncc #2251\n\nBREAKING CHANGE: This puts all HTTP/1 methods and support behind an\n  `http1` cargo feature, which will not be enabled by default. To use\n  HTTP/1, add `features = [\"http1\"]` to the hyper dependency in your\n  `Cargo.toml`.",
          "timestamp": "2020-11-17T10:42:20-08:00",
          "tree_id": "9f96eaaa5c228f8eba653b9ef2cfec2d099f3f10",
          "url": "https://github.com/stevepentland/hyper/commit/2a19ab74ed69bc776da25544e98979c9fb6e1834"
        },
        "date": 1605651198545,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 138483,
            "range": "± 16400",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 11576930,
            "range": "± 1751421",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 44305,
            "range": "± 6136",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 271900,
            "range": "± 34011",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52009375,
            "range": "± 835440",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 73804755,
            "range": "± 6430063",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 73508989,
            "range": "± 4443380",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 5063828,
            "range": "± 799043",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 50628,
            "range": "± 4663",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 82144,
            "range": "± 10243",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 222569,
            "range": "± 31319",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12010061,
            "range": "± 1025775",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 12740502,
            "range": "± 9314971",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 12035711,
            "range": "± 9049322",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 64504851,
            "range": "± 10303708",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 64939092,
            "range": "± 6816509",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6692410,
            "range": "± 1033812",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 95651,
            "range": "± 13230",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 171381,
            "range": "± 18868",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e55583d30a597884883f1a51b678f5c57c76765",
          "message": "feat(client): Make `client` an optional feature\n\ncc #2223\r\n\r\nBREAKING CHANGE: The HTTP client of hyper is now an optional feature. To\r\n  enable the client, add `features = [\"client\"]` to the dependency in\r\n  your `Cargo.toml`.",
          "timestamp": "2020-11-17T17:06:25-08:00",
          "tree_id": "a96d23e59a63b4783772da0aa92b70f346ba446c",
          "url": "https://github.com/stevepentland/hyper/commit/4e55583d30a597884883f1a51b678f5c57c76765"
        },
        "date": 1605665635352,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 143911,
            "range": "± 14891",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 12056669,
            "range": "± 2001644",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 42544,
            "range": "± 9952",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 272337,
            "range": "± 26761",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52792344,
            "range": "± 2110644",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 91646467,
            "range": "± 7472899",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 91887357,
            "range": "± 5786231",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 5400094,
            "range": "± 1766488",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 46731,
            "range": "± 6851",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 84390,
            "range": "± 9517",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 232688,
            "range": "± 35082",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12955144,
            "range": "± 1524111",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 13182327,
            "range": "± 8518730",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 13113312,
            "range": "± 9287262",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 73204257,
            "range": "± 7089129",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 75178871,
            "range": "± 8597942",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7512557,
            "range": "± 849325",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 91534,
            "range": "± 8171",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 183659,
            "range": "± 19667",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bdb5e5d6946f4e3f8115a6b1683aff6a04df73de",
          "message": "feat(server): Make the `server` code an optional feature (#2334)\n\ncc #2223 \r\n\r\nBREAKING CHANGE: The HTTP server code is now an optional feature. To\r\n  enable the server, add `features = [\"server\"]` to the dependency in\r\n  your `Cargo.toml`.",
          "timestamp": "2020-11-18T11:02:20-08:00",
          "tree_id": "260a94fe0611cc0d6d30c331e182fd0bfcc347cf",
          "url": "https://github.com/stevepentland/hyper/commit/bdb5e5d6946f4e3f8115a6b1683aff6a04df73de"
        },
        "date": 1605737608720,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 131557,
            "range": "± 68479",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 11279011,
            "range": "± 3807053",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 41025,
            "range": "± 3095",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 265404,
            "range": "± 21935",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52003415,
            "range": "± 831776",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 81982975,
            "range": "± 7757934",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 83156731,
            "range": "± 4581843",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4753978,
            "range": "± 674213",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 46782,
            "range": "± 4346",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 80922,
            "range": "± 6495",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 225461,
            "range": "± 15486",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 13022482,
            "range": "± 988235",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 13149381,
            "range": "± 8806203",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 12700900,
            "range": "± 8786435",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 70804923,
            "range": "± 6681610",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 72560554,
            "range": "± 5811918",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7405583,
            "range": "± 776418",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 94080,
            "range": "± 7120",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 179242,
            "range": "± 4809",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abb6471690f796e1b96bb2d7b1042f424d69f169",
          "message": "refactor(client): use tokio's TcpSocket for more sockopts (#2335)\n\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-18T14:45:45-08:00",
          "tree_id": "c8d1bedaa9af64428ba5cdc93170b1c62cc3564e",
          "url": "https://github.com/stevepentland/hyper/commit/abb6471690f796e1b96bb2d7b1042f424d69f169"
        },
        "date": 1605752020893,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 134290,
            "range": "± 28308",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 13069394,
            "range": "± 1833706",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 44248,
            "range": "± 5227",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 267384,
            "range": "± 30884",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52011853,
            "range": "± 1653244",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 82093086,
            "range": "± 6918467",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 82283056,
            "range": "± 7211489",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 6079016,
            "range": "± 1143766",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 50739,
            "range": "± 6636",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 84002,
            "range": "± 13332",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 220929,
            "range": "± 23645",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12653828,
            "range": "± 1620300",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 12692148,
            "range": "± 9807598",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 12179254,
            "range": "± 9937774",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 67119495,
            "range": "± 7676141",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 69568298,
            "range": "± 9414286",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7092458,
            "range": "± 1443105",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 94546,
            "range": "± 20693",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 171661,
            "range": "± 23894",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ed2b22a7f66899d338691552fbcb6c0f2f4e06b9",
          "message": "feat(lib): disable all optional features by default (#2336)\n\nBREAKING CHANGE: All optional features have been disabled by default.",
          "timestamp": "2020-11-19T10:05:39-08:00",
          "tree_id": "6e1ed1ba8f1fec285f11643f67ff48ea7e92a9a5",
          "url": "https://github.com/stevepentland/hyper/commit/ed2b22a7f66899d338691552fbcb6c0f2f4e06b9"
        },
        "date": 1605823944258,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 79401,
            "range": "± 1020",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 11517447,
            "range": "± 819257",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 30466,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 224275,
            "range": "± 5038",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51989853,
            "range": "± 1260115",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 79242601,
            "range": "± 2355161",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 80226364,
            "range": "± 2764194",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 6205304,
            "range": "± 923072",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 33257,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 53169,
            "range": "± 746",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 165346,
            "range": "± 1361",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9767652,
            "range": "± 88281",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9935256,
            "range": "± 8866506",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9589052,
            "range": "± 8407938",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 62940674,
            "range": "± 3972938",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 63979167,
            "range": "± 4915223",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6601145,
            "range": "± 656717",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 60987,
            "range": "± 973",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 123355,
            "range": "± 1565",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "121c33132c0950aaa422848cdc43f6691ddf5785",
          "message": "feat(upgrade): Moved HTTP upgrades off `Body` to a new API (#2337)\n\nCloses #2086\r\n\r\nBREAKING CHANGE: The method `Body::on_upgrade()` is gone. It is\r\n  essentially replaced with `hyper::upgrade::on(msg)`.",
          "timestamp": "2020-11-19T16:36:12-08:00",
          "tree_id": "33e278842408a37663173a39ba973df4e6786bdc",
          "url": "https://github.com/stevepentland/hyper/commit/121c33132c0950aaa422848cdc43f6691ddf5785"
        },
        "date": 1605838345562,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 121073,
            "range": "± 12872",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7978148,
            "range": "± 872965",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 37470,
            "range": "± 3098",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 223316,
            "range": "± 27671",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52004818,
            "range": "± 1625747",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 72762593,
            "range": "± 4695236",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 75182648,
            "range": "± 4654033",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4261915,
            "range": "± 588041",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 46745,
            "range": "± 5083",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 71154,
            "range": "± 7521",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 176830,
            "range": "± 17711",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 11327740,
            "range": "± 1976330",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11060189,
            "range": "± 8708469",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10985518,
            "range": "± 9211142",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 58142032,
            "range": "± 6602388",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 59360073,
            "range": "± 6809081",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6034152,
            "range": "± 642923",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 80663,
            "range": "± 24280",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 149085,
            "range": "± 17495",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6aadb830072959497f414c01bcdba4c8e681088",
          "message": "perf(lib): re-enable writev support (#2338)\n\nTokio's `AsyncWrite` trait once again has support for vectored writes in\r\nTokio 0.3.4 (see tokio-rs/tokio#3149).\r\n\r\nThis branch re-enables vectored writes in Hyper for HTTP/1. Using\r\nvectored writes in HTTP/2 will require an upstream change in the `h2`\r\ncrate as well.\r\n\r\nI've removed the adaptive write buffer implementation\r\nthat attempts to detect whether vectored IO is or is not available,\r\nsince the Tokio 0.3.4 `AsyncWrite` trait exposes this directly via the\r\n`is_write_vectored` method. Now, we just ask the IO whether or not it\r\nsupports vectored writes, and configure the buffer accordingly. This\r\nmakes the implementation somewhat simpler.\r\n\r\nThis also removes `http1_writev()` methods from the builders. These are\r\nno longer necessary, as Hyper can now determine whether or not\r\nto use vectored writes based on `is_write_vectored`, rather than trying\r\nto auto-detect it.\r\n\r\nCloses #2320 \r\n\r\nBREAKING CHANGE: Removed `http1_writev` methods from `client::Builder`,\r\n  `client::conn::Builder`, `server::Builder`, and `server::conn::Builder`.\r\n  \r\n  Vectored writes are now enabled based on whether the `AsyncWrite`\r\n  implementation in use supports them, rather than though adaptive\r\n  detection. To explicitly disable vectored writes, users may wrap the IO\r\n  in a newtype that implements `AsyncRead` and `AsyncWrite` and returns\r\n  `false` from its `AsyncWrite::is_write_vectored` method.",
          "timestamp": "2020-11-24T10:31:48-08:00",
          "tree_id": "c91fc21aebcb62085b5295b5e9e68c8c5b58242f",
          "url": "https://github.com/stevepentland/hyper/commit/d6aadb830072959497f414c01bcdba4c8e681088"
        },
        "date": 1606255950319,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 72837,
            "range": "± 3516",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7170674,
            "range": "± 478865",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 30930,
            "range": "± 1741",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 214660,
            "range": "± 19118",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52794377,
            "range": "± 1635942",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50316993,
            "range": "± 2301570",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53129794,
            "range": "± 1254385",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3806432,
            "range": "± 324242",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 35747,
            "range": "± 3049",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 58587,
            "range": "± 2575",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 193940,
            "range": "± 13858",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10784447,
            "range": "± 9992161",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10911415,
            "range": "± 9860773",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10552877,
            "range": "± 9940122",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 62981180,
            "range": "± 3751475",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 80363165,
            "range": "± 16221828",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7197478,
            "range": "± 1106209",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 69194,
            "range": "± 12198",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 131526,
            "range": "± 21479",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a470446deb2cb2c0e3700f67d9f70097d0d7d75f",
          "message": "chore(error): remove undocumented public error module (#2344)",
          "timestamp": "2020-11-25T12:52:07-08:00",
          "tree_id": "c1accd6ae40bf4b1a972ba66ccfaa01429845765",
          "url": "https://github.com/stevepentland/hyper/commit/a470446deb2cb2c0e3700f67d9f70097d0d7d75f"
        },
        "date": 1606342748704,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 112750,
            "range": "± 12013",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 5963296,
            "range": "± 938568",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 40187,
            "range": "± 3517",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 245764,
            "range": "± 17309",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52770213,
            "range": "± 3228170",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 48633709,
            "range": "± 4210637",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52268792,
            "range": "± 4683953",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3298857,
            "range": "± 752738",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 49559,
            "range": "± 5486",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 80253,
            "range": "± 13534",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 204684,
            "range": "± 14686",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 11679918,
            "range": "± 9372687",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11567345,
            "range": "± 9229326",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11505062,
            "range": "± 8808318",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 60239147,
            "range": "± 6087764",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 70052864,
            "range": "± 13363213",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6121993,
            "range": "± 811489",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 90027,
            "range": "± 24062",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 168528,
            "range": "± 19224",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "robert@octarineparrot.com",
            "name": "Robert Clipsham",
            "username": "mrmonday"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ba2a141a6f8736446ff4a0111df347c0dc66f6c",
          "message": "test(client): Upgrade libpnet depedency to 0.27.2 [#2347] (#2348)\n\nAdditionally, only depend on pnet_datalink to reduce compile times.\n\nCloses #2347",
          "timestamp": "2020-11-27T21:55:03-08:00",
          "tree_id": "4b365d0f3aedef52acb5f5648720da602aa165f4",
          "url": "https://github.com/stevepentland/hyper/commit/1ba2a141a6f8736446ff4a0111df347c0dc66f6c"
        },
        "date": 1606544313935,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 72191,
            "range": "± 3673",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6637267,
            "range": "± 271051",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29207,
            "range": "± 1603",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 212680,
            "range": "± 8081",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52710975,
            "range": "± 2334236",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 48790571,
            "range": "± 1707522",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52392498,
            "range": "± 1118467",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3551223,
            "range": "± 261417",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 33517,
            "range": "± 1804",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 49980,
            "range": "± 2490",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 169936,
            "range": "± 8382",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8725190,
            "range": "± 9625545",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9343049,
            "range": "± 9676960",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8270531,
            "range": "± 9885955",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 55645365,
            "range": "± 4389780",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 72816765,
            "range": "± 14166529",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5920361,
            "range": "± 440043",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 57471,
            "range": "± 4907",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 111838,
            "range": "± 5605",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "faern@faern.net",
            "name": "Linus Färnstrand",
            "username": "faern"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21dea2114574bbeda41bad5dff5e8e3613352124",
          "message": "chore(dependencies): upgrade socket2 (#2349)\n\nUpgrades to a version not making invalid assumptions about\nthe memory layout of std::net::SocketAddr",
          "timestamp": "2020-11-30T05:48:28-08:00",
          "tree_id": "9ab22d866d6f8bd5c19045971f7def89440f4b46",
          "url": "https://github.com/stevepentland/hyper/commit/21dea2114574bbeda41bad5dff5e8e3613352124"
        },
        "date": 1606755808334,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 71316,
            "range": "± 6879",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7393704,
            "range": "± 1144362",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 30133,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 226291,
            "range": "± 4492",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51992036,
            "range": "± 911625",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 56116998,
            "range": "± 3228663",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 58545414,
            "range": "± 2650379",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3941874,
            "range": "± 513777",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 33284,
            "range": "± 519",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 47322,
            "range": "± 904",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 149443,
            "range": "± 1507",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8035785,
            "range": "± 5094160",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8055422,
            "range": "± 8830521",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7748373,
            "range": "± 8843385",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 55497637,
            "range": "± 4020535",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 69646177,
            "range": "± 17026682",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6130882,
            "range": "± 952899",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52986,
            "range": "± 511",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 107083,
            "range": "± 2264",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "campbellC@users.noreply.github.com",
            "name": "Chris Campbell",
            "username": "campbellC"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8641733be3c732acd6c94ec9ad161b88a4d467d",
          "message": "docs(client): add example of client conn usage (#2350)\n\nAdd basic, module level example for the Builder performing a handshake,\r\nspawning a task to run the Connection and sending a single request and\r\nreceiving the response.\r\n\r\nCloses #2272",
          "timestamp": "2020-12-01T15:58:28-08:00",
          "tree_id": "e2f028a020be1b9371e71c37d2c8a1ede13cd4fe",
          "url": "https://github.com/stevepentland/hyper/commit/f8641733be3c732acd6c94ec9ad161b88a4d467d"
        },
        "date": 1606878970050,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 127785,
            "range": "± 8653",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6922861,
            "range": "± 765867",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 44776,
            "range": "± 3719",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 283247,
            "range": "± 20440",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52033776,
            "range": "± 1616661",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 54914112,
            "range": "± 6875244",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 60997231,
            "range": "± 4120201",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4160239,
            "range": "± 566536",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 51438,
            "range": "± 6290",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 84154,
            "range": "± 12316",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 218120,
            "range": "± 32187",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 11609165,
            "range": "± 9466731",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 12187705,
            "range": "± 9312406",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11341297,
            "range": "± 9242204",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 66277587,
            "range": "± 9536115",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 78455780,
            "range": "± 14102577",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6786964,
            "range": "± 889294",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 92577,
            "range": "± 11307",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 171360,
            "range": "± 11569",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4e24332a0cd44068a806081d51686f50c086056",
          "message": "feat(client): change DNS Resolver to resolve to SocketAddrs (#2346)\n\nThe DNS resolver part of `HttpConnector` used to require resolving to\r\n`IpAddr`s, and this changes it so that they resolve to `SocketAddr`s.\r\nThe main benefit here is allowing for resolvers to set the IPv6 zone ID\r\nwhen resolving, but it also just more closely matches\r\n`std::net::ToSocketAddrs`.\r\n\r\nCloses #1937\r\n\r\nBREAKING CHANGE: Custom resolvers used with `HttpConnector` must change\r\n  to resolving to an iterator of `SocketAddr`s instead of `IpAddr`s.",
          "timestamp": "2020-12-03T14:21:19-08:00",
          "tree_id": "f15bc5873b96ec18a2c130878bec5136d305e561",
          "url": "https://github.com/stevepentland/hyper/commit/b4e24332a0cd44068a806081d51686f50c086056"
        },
        "date": 1607045219790,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 76065,
            "range": "± 1661",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7073638,
            "range": "± 364640",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 31838,
            "range": "± 1177",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 219759,
            "range": "± 24836",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52767199,
            "range": "± 2106585",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50147584,
            "range": "± 1768970",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52846776,
            "range": "± 1116490",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3702434,
            "range": "± 390788",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 36173,
            "range": "± 1544",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 52799,
            "range": "± 2252",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 172757,
            "range": "± 6559",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8869361,
            "range": "± 9200188",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8711808,
            "range": "± 9257263",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8863940,
            "range": "± 9573550",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 58684647,
            "range": "± 4069386",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 73656481,
            "range": "± 16079950",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6025776,
            "range": "± 664471",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 60069,
            "range": "± 13440",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 114335,
            "range": "± 2376",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@bnoordhuis.nl",
            "name": "Ben Noordhuis",
            "username": "bnoordhuis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d9a5806e146798d0cbe67672bbe3ad5ae680393",
          "message": "refactor(http1): change HTTP2->1.1 warning to debug (#2354)\n\nWe use hyper in a proxy-like way where an incoming HTTP/2 request is\r\nproxied to a HTTP/1 backend and it was reported that the protocol\r\ncoercion warnings were a limiting factor in the total throughput\r\nof the system.\r\n\r\nWhile it can be worked around by explicitly setting the request version\r\nto HTTP_11, it seems likely other people also hit this performance snag.\r\nThat's why this commit changes them from warnings to debug messages.",
          "timestamp": "2020-12-14T13:57:32-08:00",
          "tree_id": "9e3c4f830981935a989cd5e49ed4969a219ee850",
          "url": "https://github.com/stevepentland/hyper/commit/7d9a5806e146798d0cbe67672bbe3ad5ae680393"
        },
        "date": 1607996870310,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 127145,
            "range": "± 21053",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6792145,
            "range": "± 739702",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 43630,
            "range": "± 8834",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 273844,
            "range": "± 39306",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52007087,
            "range": "± 890361",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 52727108,
            "range": "± 7535113",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 59584490,
            "range": "± 5892183",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3621593,
            "range": "± 746311",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 50913,
            "range": "± 10524",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 73074,
            "range": "± 15957",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 187540,
            "range": "± 36950",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10971276,
            "range": "± 9371861",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10954855,
            "range": "± 9366415",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10601860,
            "range": "± 9163388",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 61056665,
            "range": "± 8732436",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 70823184,
            "range": "± 14074940",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5919501,
            "range": "± 901081",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 83259,
            "range": "± 12204",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 154623,
            "range": "± 21321",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arve.knudsen@gmail.com",
            "name": "Arve Knudsen",
            "username": "aknuds1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ede3a6bd9dfd8f33d6c0a4efd94f5bdafe383ebd",
          "message": "refactor(http1): move upgrade state from body to head (#2353)\n\nMove state required for protocol upgrades to head\r\nrepresentations, instead of associating it with the body.\r\n\r\nCloses #2340.\r\n\r\nSigned-off-by: Arve Knudsen <arve.knudsen@gmail.com>",
          "timestamp": "2020-12-15T07:31:48-08:00",
          "tree_id": "ce286b8ff248e5bf4aa6e6f01981ed49c84d72b1",
          "url": "https://github.com/stevepentland/hyper/commit/ede3a6bd9dfd8f33d6c0a4efd94f5bdafe383ebd"
        },
        "date": 1608059754683,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 64523,
            "range": "± 7914",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6225527,
            "range": "± 469841",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 28568,
            "range": "± 4238",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 194528,
            "range": "± 34455",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52762342,
            "range": "± 2844811",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 48508040,
            "range": "± 2830794",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 50935983,
            "range": "± 2032600",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3561025,
            "range": "± 346181",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 31614,
            "range": "± 4092",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 50471,
            "range": "± 4858",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 161700,
            "range": "± 17675",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8475789,
            "range": "± 5106208",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11310047,
            "range": "± 5219807",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11573219,
            "range": "± 4940363",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 49428408,
            "range": "± 4501249",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 64108737,
            "range": "± 13788795",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5299743,
            "range": "± 812486",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 50696,
            "range": "± 10890",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 97768,
            "range": "± 15164",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alex@forallsecure.com",
            "name": "Alex Rebert",
            "username": "alpire"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1dd761c87de226261599ff2518fe9d231ba1c82d",
          "message": "fix(http1): ignore chunked trailers (#2357)\n\nPreviously, hyper returned an \"Invalid chunk end CR\" error on chunked\r\nresponses with trailers, as described in RFC 7230 Section 4.1.2. This\r\ncommit adds code to ignore the trailers.\r\n\r\nCloses #2171",
          "timestamp": "2020-12-15T14:23:07-08:00",
          "tree_id": "6ad353d3f416f304ea0c71efb8de8cfe808c235a",
          "url": "https://github.com/stevepentland/hyper/commit/1dd761c87de226261599ff2518fe9d231ba1c82d"
        },
        "date": 1608090458259,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 76210,
            "range": "± 12146",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6879440,
            "range": "± 569543",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 32580,
            "range": "± 2530",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 224094,
            "range": "± 24744",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52771672,
            "range": "± 2310068",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 49722039,
            "range": "± 2534412",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52779333,
            "range": "± 2645282",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3772480,
            "range": "± 419822",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 35223,
            "range": "± 4825",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 53139,
            "range": "± 5347",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 161096,
            "range": "± 18237",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8400480,
            "range": "± 10084085",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8940941,
            "range": "± 9928463",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8281569,
            "range": "± 9892526",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 59577452,
            "range": "± 10214692",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 88649318,
            "range": "± 34445828",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6249731,
            "range": "± 684773",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 59389,
            "range": "± 4361",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 115519,
            "range": "± 6595",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46450720+bishtpawan@users.noreply.github.com",
            "name": "Pawan Singh Bisht",
            "username": "bishtpawan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c593c292508f31a2986d5ddac3fb23b234a0e2c",
          "message": "refactor(error): use `matches!` macro in `Error::is_*` methods (#2367)",
          "timestamp": "2020-12-21T12:25:47-08:00",
          "tree_id": "c61537b497a46b23e64414fa1f2c822dadd22fc4",
          "url": "https://github.com/stevepentland/hyper/commit/6c593c292508f31a2986d5ddac3fb23b234a0e2c"
        },
        "date": 1608590869833,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 77995,
            "range": "± 2250",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7123487,
            "range": "± 432068",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 33873,
            "range": "± 783",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 231328,
            "range": "± 8931",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52787528,
            "range": "± 1634424",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50671400,
            "range": "± 1835986",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53884856,
            "range": "± 1074796",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3793336,
            "range": "± 445399",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 37704,
            "range": "± 2858",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 53015,
            "range": "± 4270",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 175628,
            "range": "± 4389",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8954267,
            "range": "± 9077527",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8636145,
            "range": "± 9437829",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8413607,
            "range": "± 9326018",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 56521619,
            "range": "± 4265109",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 70577291,
            "range": "± 12739569",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6047999,
            "range": "± 546500",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 60356,
            "range": "± 5093",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 117887,
            "range": "± 3478",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pankajchaudhary172@gmail.com",
            "name": "Pankaj Chaudhary",
            "username": "PankajChaudhary5"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b3077da1f891b09de18320d9f6ccf94f136943d",
          "message": "refactor(http1): updated Encoder/Decoder match with the matches macro (#2368)",
          "timestamp": "2020-12-22T10:50:57-08:00",
          "tree_id": "954af38876df04f6db5c6ee06c14b56137895d6c",
          "url": "https://github.com/stevepentland/hyper/commit/3b3077da1f891b09de18320d9f6ccf94f136943d"
        },
        "date": 1608671704158,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 62697,
            "range": "± 1091",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6865188,
            "range": "± 606134",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 26506,
            "range": "± 538",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 190580,
            "range": "± 5662",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51135713,
            "range": "± 1227055",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 52613664,
            "range": "± 2268735",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 56072806,
            "range": "± 2574943",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3728949,
            "range": "± 386995",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 29617,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 41063,
            "range": "± 981",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 131580,
            "range": "± 1785",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 6845571,
            "range": "± 8980934",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 6820718,
            "range": "± 40476",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10726874,
            "range": "± 4566564",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 48430899,
            "range": "± 3367780",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 62514011,
            "range": "± 12415034",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5630873,
            "range": "± 770953",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 46172,
            "range": "± 968",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 91221,
            "range": "± 2441",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "c784a10174deb461b2eaa59ed9fabae5c315eb68",
          "message": "v0.14.0",
          "timestamp": "2020-12-23T10:58:04-08:00",
          "tree_id": "d2d618457fe2744c73a88c191d7ac276e12343ba",
          "url": "https://github.com/stevepentland/hyper/commit/c784a10174deb461b2eaa59ed9fabae5c315eb68"
        },
        "date": 1608751439288,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 68107,
            "range": "± 1018",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7073566,
            "range": "± 702076",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29098,
            "range": "± 818",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 208200,
            "range": "± 4834",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51207304,
            "range": "± 1645410",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 55395412,
            "range": "± 2487544",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 57735843,
            "range": "± 1774211",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4144621,
            "range": "± 811386",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 32964,
            "range": "± 1221",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 46204,
            "range": "± 1022",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 148401,
            "range": "± 4639",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7647684,
            "range": "± 8978872",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7691862,
            "range": "± 74909",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7485499,
            "range": "± 8612329",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 53675834,
            "range": "± 3845847",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 68325244,
            "range": "± 13360814",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5761679,
            "range": "± 617686",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52042,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 102943,
            "range": "± 1068",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "3d6bdbe85006e623eae83d7c3ce9a45680d6c2c8",
          "message": "v0.14.1",
          "timestamp": "2020-12-23T13:01:14-08:00",
          "tree_id": "75ef9cf142d8a168ed3445192349cd6e581a8501",
          "url": "https://github.com/stevepentland/hyper/commit/3d6bdbe85006e623eae83d7c3ce9a45680d6c2c8"
        },
        "date": 1608772282517,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 68888,
            "range": "± 1715",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7330179,
            "range": "± 689527",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29004,
            "range": "± 591",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 211545,
            "range": "± 5256",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51965003,
            "range": "± 1622284",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 55059853,
            "range": "± 2716065",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 57705289,
            "range": "± 1411305",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3917675,
            "range": "± 840385",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 33231,
            "range": "± 678",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 47094,
            "range": "± 1412",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 150456,
            "range": "± 960",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7796238,
            "range": "± 4425300",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7891516,
            "range": "± 8672163",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7488958,
            "range": "± 8410905",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 54362979,
            "range": "± 4044847",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 68471348,
            "range": "± 11775619",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5849499,
            "range": "± 782370",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52752,
            "range": "± 1262",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 104520,
            "range": "± 2173",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mussitantesmortem@gmail.com",
            "name": "Maxim Zhukov",
            "username": "Mephistophiles"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "510b998ff3dc75e0dfc7e236212f5fef33142ad1",
          "message": "chore(dev-dependencies): bump url to 2.2 (#2379)",
          "timestamp": "2020-12-28T15:52:28-08:00",
          "tree_id": "cd9b46cf00546ee0223f287f33d1698b9c2ee161",
          "url": "https://github.com/stevepentland/hyper/commit/510b998ff3dc75e0dfc7e236212f5fef33142ad1"
        },
        "date": 1609210301961,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 68326,
            "range": "± 937",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7883500,
            "range": "± 1330774",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29108,
            "range": "± 715",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 209650,
            "range": "± 5730",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51973989,
            "range": "± 920713",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 54054447,
            "range": "± 3400744",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 57986587,
            "range": "± 2279859",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4149414,
            "range": "± 680713",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 32625,
            "range": "± 563",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 46678,
            "range": "± 1174",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 148749,
            "range": "± 1642",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7647995,
            "range": "± 8800389",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7756044,
            "range": "± 8786587",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7470927,
            "range": "± 8453950",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 53952191,
            "range": "± 4845189",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 70629740,
            "range": "± 16433757",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5726840,
            "range": "± 888120",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52123,
            "range": "± 1069",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 103731,
            "range": "± 1780",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "8861f9a7867216c81ea14ac6224c11a1303e7761",
          "message": "v0.14.2",
          "timestamp": "2020-12-29T10:51:50-08:00",
          "tree_id": "aa4f215d53ca79b417c4b5250584edb476b9caa6",
          "url": "https://github.com/stevepentland/hyper/commit/8861f9a7867216c81ea14ac6224c11a1303e7761"
        },
        "date": 1609288482857,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 103534,
            "range": "± 15129",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 5642895,
            "range": "± 1067681",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 34542,
            "range": "± 4438",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 216170,
            "range": "± 38896",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51952180,
            "range": "± 1642967",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 43220135,
            "range": "± 5737552",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 51995192,
            "range": "± 5439332",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3064729,
            "range": "± 512251",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 41528,
            "range": "± 4641",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 65472,
            "range": "± 10375",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 168643,
            "range": "± 29845",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9321417,
            "range": "± 9328170",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8948424,
            "range": "± 1151358",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8897302,
            "range": "± 9547415",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 50513567,
            "range": "± 5097266",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 64207711,
            "range": "± 13825227",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5221538,
            "range": "± 1250797",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 72004,
            "range": "± 11966",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 135576,
            "range": "± 16613",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "c9c46ed60bd43484d67a98a63496ad0277c791a2",
          "message": "refactor(ffi): Add Reason-Phrase API\n\nThis adds an internal ability to copy the HTTP/1 reason-phrase and place\nit in the `http::Extensions` of a response, if it doesn't match the\ncanonical reason. This could be exposed in the Rust API later, but for\nnow it is only used by the C API.",
          "timestamp": "2021-01-08T10:25:53-08:00",
          "tree_id": "08e88a2638eb39443de49d5c60610b9f5c4315da",
          "url": "https://github.com/stevepentland/hyper/commit/c9c46ed60bd43484d67a98a63496ad0277c791a2"
        },
        "date": 1610138195110,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 124555,
            "range": "± 37144",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6389006,
            "range": "± 1154427",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 45897,
            "range": "± 6943",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 293784,
            "range": "± 49254",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52007339,
            "range": "± 1176838",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 52821278,
            "range": "± 6265721",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 56152807,
            "range": "± 5373018",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3689575,
            "range": "± 371781",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 53930,
            "range": "± 9302",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 80545,
            "range": "± 10660",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 225435,
            "range": "± 37990",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 11247111,
            "range": "± 9308159",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11239571,
            "range": "± 9212517",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10754251,
            "range": "± 9417136",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 60618176,
            "range": "± 5543191",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 74128796,
            "range": "± 13770123",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6457345,
            "range": "± 850736",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 89878,
            "range": "± 8701",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 167045,
            "range": "± 23819",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.westerlind@distilnetworks.com",
            "name": "Markus Westerlind",
            "username": "Marwes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a15f3f7f0f536c74d51636bbc00f6b5ec110472b",
          "message": "refactor(client): minimize the amount of instantiated code (#2391)\n\n* Halve the amount of conn_task instantiations\r\n* Extract non-generic parts of client::handshake\r\n* Extract the non-generic parts of call_async",
          "timestamp": "2021-01-12T16:18:22-08:00",
          "tree_id": "56d1582e4c7f3e995ff4cba0fa9bf34cc857408d",
          "url": "https://github.com/stevepentland/hyper/commit/a15f3f7f0f536c74d51636bbc00f6b5ec110472b"
        },
        "date": 1610505329843,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 67814,
            "range": "± 905",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6716659,
            "range": "± 457486",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29435,
            "range": "± 532",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 213925,
            "range": "± 5124",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51967793,
            "range": "± 1308739",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 51282936,
            "range": "± 1750532",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53245869,
            "range": "± 1097573",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3710106,
            "range": "± 451478",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 32812,
            "range": "± 542",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 46908,
            "range": "± 1249",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 149946,
            "range": "± 1445",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7708354,
            "range": "± 8804198",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7772822,
            "range": "± 8749692",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7469807,
            "range": "± 8457619",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 52254414,
            "range": "± 3537566",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 67698079,
            "range": "± 12823595",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5701668,
            "range": "± 784551",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52727,
            "range": "± 1071",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 102953,
            "range": "± 948",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0ddb669328163001fd18a4a21109e95047848bf",
          "message": "refactor(lib): apply unreachable_pub lint (#2400)\n\nCloses #2390",
          "timestamp": "2021-01-14T09:57:55-08:00",
          "tree_id": "4bcb4014c9adce39c308cc16bb2ae4cc95515ea4",
          "url": "https://github.com/stevepentland/hyper/commit/f0ddb669328163001fd18a4a21109e95047848bf"
        },
        "date": 1610661662043,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 75047,
            "range": "± 3783",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6725431,
            "range": "± 356275",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 31845,
            "range": "± 1621",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 227420,
            "range": "± 12450",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52798447,
            "range": "± 887907",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50032073,
            "range": "± 1852695",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53112329,
            "range": "± 1042472",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3686674,
            "range": "± 356510",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 36420,
            "range": "± 1635",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 53012,
            "range": "± 1655",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 173218,
            "range": "± 6128",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8627879,
            "range": "± 9561252",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8718490,
            "range": "± 9229204",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8360553,
            "range": "± 9501705",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 57500427,
            "range": "± 4345696",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 69404753,
            "range": "± 12224557",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6055800,
            "range": "± 777783",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 58909,
            "range": "± 2999",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 114382,
            "range": "± 9335",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "257d6a99193c9404ce055727833e1490c23a7197",
          "message": "docs(server): set doc_cfg attributes for `tcp` feature gated Server methods (#2401)",
          "timestamp": "2021-01-14T13:56:49-08:00",
          "tree_id": "50a57b0eb9c3a2e602849788aa791e078f5087bb",
          "url": "https://github.com/stevepentland/hyper/commit/257d6a99193c9404ce055727833e1490c23a7197"
        },
        "date": 1610669547205,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 69181,
            "range": "± 759",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 8505663,
            "range": "± 1045642",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29525,
            "range": "± 655",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 216085,
            "range": "± 4803",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51995026,
            "range": "± 851314",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 59370556,
            "range": "± 3528176",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 60505540,
            "range": "± 2925742",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4229942,
            "range": "± 465148",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 33126,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 47168,
            "range": "± 1376",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 149645,
            "range": "± 1558",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7816928,
            "range": "± 8635981",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7915184,
            "range": "± 8705080",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7583656,
            "range": "± 8821626",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 56515821,
            "range": "± 6802119",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 77560787,
            "range": "± 16597936",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6495888,
            "range": "± 1121358",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52646,
            "range": "± 1505",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 103981,
            "range": "± 1901",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "24809834+aeryz@users.noreply.github.com",
            "name": "Abdullah Eryuzlu",
            "username": "aeryz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf8d74ad1cf7d0b33b470b1e61625ebac56f9c4c",
          "message": "feat(body): add `send_trailers` to Body channel's `Sender` (#2387)\n\nCloses #2260",
          "timestamp": "2021-01-15T10:14:21-08:00",
          "tree_id": "98ca623fc9171719aabfeac75bad0285557a25fb",
          "url": "https://github.com/stevepentland/hyper/commit/bf8d74ad1cf7d0b33b470b1e61625ebac56f9c4c"
        },
        "date": 1610746456919,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 67726,
            "range": "± 698",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6735081,
            "range": "± 441063",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 28876,
            "range": "± 662",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 209225,
            "range": "± 4944",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51572080,
            "range": "± 1594119",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 48664207,
            "range": "± 1666651",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 51229654,
            "range": "± 1001100",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3519140,
            "range": "± 407189",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 32257,
            "range": "± 665",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 46800,
            "range": "± 799",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 147252,
            "range": "± 1708",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7634445,
            "range": "± 8953765",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7780505,
            "range": "± 8894895",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7429657,
            "range": "± 8716539",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 51039054,
            "range": "± 3568521",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 65230550,
            "range": "± 12072232",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5421950,
            "range": "± 690403",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52202,
            "range": "± 681",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 102070,
            "range": "± 1601",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f821ecdd197b42253b4930f1d67ae98b5c2028ea",
          "message": "docs(body): set doc_cfg attribute for `Body::wrap_stream` (#2403)",
          "timestamp": "2021-01-15T16:24:03-08:00",
          "tree_id": "aa6c2c95e46ee99caa91cd386d804b688c0a49b0",
          "url": "https://github.com/stevepentland/hyper/commit/f821ecdd197b42253b4930f1d67ae98b5c2028ea"
        },
        "date": 1610764648939,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 129393,
            "range": "± 19589",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7552486,
            "range": "± 2605047",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 45811,
            "range": "± 18681",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 290520,
            "range": "± 130405",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 53587729,
            "range": "± 3949433",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 61525225,
            "range": "± 15317269",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 64316399,
            "range": "± 11974804",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3901616,
            "range": "± 1798747",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 52758,
            "range": "± 19611",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 76549,
            "range": "± 36036",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 218826,
            "range": "± 118082",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12084426,
            "range": "± 10058662",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 12312057,
            "range": "± 10522915",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11649148,
            "range": "± 9134589",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 67765476,
            "range": "± 8564989",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 82165551,
            "range": "± 16288086",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6911075,
            "range": "± 1943847",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 85345,
            "range": "± 34628",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 167506,
            "range": "± 50002",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mikeroelens@gmail.com",
            "name": "Mike Roelens",
            "username": "mikeroelens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec2fd4a15f6c0ec612c38a9596c56cd87477d0f9",
          "message": "docs(client): fix typo in httpbin.org domain (#2406)",
          "timestamp": "2021-01-19T08:30:17-08:00",
          "tree_id": "e7ca69f8ee39808cd92f849107091c006710c06e",
          "url": "https://github.com/stevepentland/hyper/commit/ec2fd4a15f6c0ec612c38a9596c56cd87477d0f9"
        },
        "date": 1611080429908,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 65733,
            "range": "± 13703",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6386543,
            "range": "± 737645",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 26780,
            "range": "± 4716",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 197238,
            "range": "± 27832",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52747086,
            "range": "± 2493545",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 46138307,
            "range": "± 5129753",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 50552439,
            "range": "± 3348437",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3365728,
            "range": "± 577590",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 31336,
            "range": "± 2838",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 43012,
            "range": "± 6724",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 147154,
            "range": "± 25089",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7560585,
            "range": "± 5374473",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7265989,
            "range": "± 1081667",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10761066,
            "range": "± 5376040",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 49057719,
            "range": "± 6151221",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 63269097,
            "range": "± 13562980",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5249663,
            "range": "± 1056364",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52982,
            "range": "± 7335",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 99715,
            "range": "± 18241",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "paolo@paolo565.org",
            "name": "Paolo Barbolini",
            "username": "paolobarbolini"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "237b2ce08341266b62a8d1cfa974779c511a0710",
          "message": "refactor(lib): Remove useless uses of Pin (#2405)",
          "timestamp": "2021-01-19T14:51:34-08:00",
          "tree_id": "850a7bc3c25f7d4f85ccb325ecd0e717537eedf0",
          "url": "https://github.com/stevepentland/hyper/commit/237b2ce08341266b62a8d1cfa974779c511a0710"
        },
        "date": 1611110475362,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 68445,
            "range": "± 847",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6232637,
            "range": "± 361517",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29227,
            "range": "± 687",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 212486,
            "range": "± 5638",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 50440081,
            "range": "± 808501",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 47443796,
            "range": "± 1861898",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 51458838,
            "range": "± 1706246",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3406073,
            "range": "± 393562",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 32445,
            "range": "± 1172",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 46642,
            "range": "± 818",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 149313,
            "range": "± 1595",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7697949,
            "range": "± 8683924",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7797838,
            "range": "± 72972",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7456916,
            "range": "± 8689339",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 50893924,
            "range": "± 3297261",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 63531163,
            "range": "± 12866032",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5372710,
            "range": "± 650517",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52418,
            "range": "± 981",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 103644,
            "range": "± 1873",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "1928682b33f98244435ba6d574677546205a15ec",
          "message": "feat(ffi): add HYPERE_INVALID_PEER_MESSAGE error code for parse errors",
          "timestamp": "2021-01-20T15:10:19-08:00",
          "tree_id": "e87d140b4320ce0f482aa7ee06ddeb97a4822f19",
          "url": "https://github.com/stevepentland/hyper/commit/1928682b33f98244435ba6d574677546205a15ec"
        },
        "date": 1611197241088,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 115231,
            "range": "± 18436",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6813242,
            "range": "± 999515",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 43054,
            "range": "± 9060",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 263061,
            "range": "± 36274",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52001442,
            "range": "± 837606",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 51495459,
            "range": "± 3169146",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52477086,
            "range": "± 3227478",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3546746,
            "range": "± 681781",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 49891,
            "range": "± 5857",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 71969,
            "range": "± 9265",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 192198,
            "range": "± 32823",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10285603,
            "range": "± 9112873",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10257752,
            "range": "± 9253802",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10225150,
            "range": "± 9329867",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 58342691,
            "range": "± 5937877",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 70957374,
            "range": "± 15653757",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6081592,
            "range": "± 1185807",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 83015,
            "range": "± 15094",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 155027,
            "range": "± 16724",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "inikulin@cloudflare.com",
            "name": "Ivan Nikulin",
            "username": "inikulin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c8121f1735aa8efeb0d5e4ef595363c373ba470",
          "message": "fix(client): HTTP/1 client \"Transfer-Encoding\" repair code would panic (#2410)\n\nCloses #2409",
          "timestamp": "2021-01-26T10:36:58-08:00",
          "tree_id": "774a20785cfcebc335095bbd9f4c823305ac5cd4",
          "url": "https://github.com/stevepentland/hyper/commit/2c8121f1735aa8efeb0d5e4ef595363c373ba470"
        },
        "date": 1611696094477,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 68701,
            "range": "± 1032",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6472623,
            "range": "± 756260",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29375,
            "range": "± 498",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 215441,
            "range": "± 5697",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51984583,
            "range": "± 908115",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 48492019,
            "range": "± 1442800",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 51677121,
            "range": "± 1580672",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3349716,
            "range": "± 383399",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 33140,
            "range": "± 911",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 46242,
            "range": "± 931",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 147637,
            "range": "± 1646",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7703136,
            "range": "± 8806025",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7802094,
            "range": "± 8997164",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7497493,
            "range": "± 8500538",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 51840660,
            "range": "± 3156455",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 64771732,
            "range": "± 11785686",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5440637,
            "range": "± 685006",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 51441,
            "range": "± 1008",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 102521,
            "range": "± 2144",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jplatte+git@posteo.de",
            "name": "Jonas Platte",
            "username": "jplatte"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "43412a950f2052e7865eb596c1d39067b2002a94",
          "message": "refactor(lib): Switch from pin-project to pin-project-lite",
          "timestamp": "2021-01-28T14:09:53-08:00",
          "tree_id": "f8f20dc86e8ecfa06a44b844b7c9c04a6e940a29",
          "url": "https://github.com/stevepentland/hyper/commit/43412a950f2052e7865eb596c1d39067b2002a94"
        },
        "date": 1611884057159,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 77085,
            "range": "± 4048",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7031847,
            "range": "± 457189",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 33270,
            "range": "± 1262",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 227663,
            "range": "± 13247",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52796397,
            "range": "± 517634",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 49705877,
            "range": "± 2254933",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53289093,
            "range": "± 1134530",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3867861,
            "range": "± 454109",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 37303,
            "range": "± 2667",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 53346,
            "range": "± 2076",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 175672,
            "range": "± 2177",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8690037,
            "range": "± 9021150",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8711409,
            "range": "± 9188089",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8409503,
            "range": "± 9336978",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 58190902,
            "range": "± 3767407",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 75210948,
            "range": "± 12474794",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6430411,
            "range": "± 1135528",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 60728,
            "range": "± 2544",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 115457,
            "range": "± 4891",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e8238c1b8d6351d42546a4423cf5598def1c35e",
          "message": "docs(body): warn about no length check in aggregate (#2415)\n\nThe to_bytes and aggregate don't check how long the body is, so the user\r\nbetter be aware.\r\n\r\nRelates to #2414.",
          "timestamp": "2021-02-02T09:34:40-08:00",
          "tree_id": "90f28099da0218b4f91839d4ca57aa5a3165f7b8",
          "url": "https://github.com/stevepentland/hyper/commit/5e8238c1b8d6351d42546a4423cf5598def1c35e"
        },
        "date": 1612296547211,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 68866,
            "range": "± 753",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 5989951,
            "range": "± 119541",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29985,
            "range": "± 535",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 213650,
            "range": "± 2337",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51200049,
            "range": "± 1654236",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 43881222,
            "range": "± 1226043",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 47985788,
            "range": "± 1017988",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3116619,
            "range": "± 66423",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 33242,
            "range": "± 494",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 47985,
            "range": "± 396",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 148564,
            "range": "± 1336",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7677667,
            "range": "± 8762077",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7772455,
            "range": "± 45597",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7491591,
            "range": "± 8565866",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 50829660,
            "range": "± 3338708",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 61943068,
            "range": "± 11462519",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5239273,
            "range": "± 538141",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 53515,
            "range": "± 435",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 102910,
            "range": "± 1886",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d2125c67c8087de863f74278a017c4caf37e6a9",
          "message": "perf(body): specialize BufList::copy_to_bytes (#2413)\n\nSome implementations of the Buf trait have an optimized version (for\r\nexample Bytes) of copy_to_bytes, opportunistically use that one.",
          "timestamp": "2021-02-02T17:09:06-08:00",
          "tree_id": "f97fa886587f34e8aa412ff28bb5d237ae850a3f",
          "url": "https://github.com/stevepentland/hyper/commit/4d2125c67c8087de863f74278a017c4caf37e6a9"
        },
        "date": 1612323458632,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 112813,
            "range": "± 14256",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6304929,
            "range": "± 1655395",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 41606,
            "range": "± 7332",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 251767,
            "range": "± 40894",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52011509,
            "range": "± 1640513",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 51826059,
            "range": "± 5654291",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 54781456,
            "range": "± 6672355",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3448349,
            "range": "± 1178699",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 49205,
            "range": "± 5259",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 74515,
            "range": "± 12588",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 185165,
            "range": "± 28577",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9879776,
            "range": "± 9220696",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10100176,
            "range": "± 9000410",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9673939,
            "range": "± 9112412",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 54596578,
            "range": "± 6941706",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 66529357,
            "range": "± 15527471",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5717886,
            "range": "± 942373",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 83885,
            "range": "± 34432",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 150688,
            "range": "± 18696",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "196d9bd69c0059dbff6771f6dce9188d4841c185",
          "message": "v0.14.4",
          "timestamp": "2021-02-05T15:54:38-08:00",
          "tree_id": "52f1523e30d46a411c7bac0f9e938ae39421a2d0",
          "url": "https://github.com/stevepentland/hyper/commit/196d9bd69c0059dbff6771f6dce9188d4841c185"
        },
        "date": 1612579570717,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 69474,
            "range": "± 842",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6726565,
            "range": "± 455676",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 30020,
            "range": "± 650",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 213930,
            "range": "± 5665",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51982984,
            "range": "± 873795",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 52425398,
            "range": "± 1849863",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 56031959,
            "range": "± 1935629",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3978154,
            "range": "± 424974",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 33660,
            "range": "± 929",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 46962,
            "range": "± 1325",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 148282,
            "range": "± 1688",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7743033,
            "range": "± 8725861",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7867300,
            "range": "± 8700940",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7531393,
            "range": "± 8912479",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 54635109,
            "range": "± 3877238",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 67202518,
            "range": "± 13119273",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5734025,
            "range": "± 976162",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52970,
            "range": "± 1351",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 103010,
            "range": "± 1946",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "dfa1bb291d71978820e8077be94c1d5837935bbc",
          "message": "chore(ci): use --feature-powerset --depth 2 in features check",
          "timestamp": "2021-02-06T07:36:04-08:00",
          "tree_id": "f04ddfede071e40f67435154fd8726f257a4e024",
          "url": "https://github.com/stevepentland/hyper/commit/dfa1bb291d71978820e8077be94c1d5837935bbc"
        },
        "date": 1612633611560,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 77813,
            "range": "± 1054",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7102896,
            "range": "± 661895",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 32970,
            "range": "± 505",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 229123,
            "range": "± 5800",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52759074,
            "range": "± 1632780",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50559083,
            "range": "± 3266088",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52527647,
            "range": "± 1676156",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3817336,
            "range": "± 550536",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 37059,
            "range": "± 741",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 53449,
            "range": "± 673",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 172937,
            "range": "± 3615",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8718872,
            "range": "± 9396387",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8946977,
            "range": "± 9407740",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8855021,
            "range": "± 9257433",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 56720748,
            "range": "± 3862984",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 73423518,
            "range": "± 11973736",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6010027,
            "range": "± 716970",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 60227,
            "range": "± 1347",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 117761,
            "range": "± 1459",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@arnavion.dev",
            "name": "Arnavion",
            "username": "Arnavion"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "42587059e6175735b1a8656c5ddbff0edb19294c",
          "message": "docs(server): use cfg_feature! on hyper::server::conn::tcp instead of #[cfg]\n\nThis is required to surface the required feature (`tcp`) in the generated docs\nfor `hyper::server::conn::{AddrIncoming, AddrStream}`. Before this change,\ntheir docs only mentioned the features needed for the `hyper::server::conn` mod\nitself.\n\nFixes #2425",
          "timestamp": "2021-02-09T13:31:41-08:00",
          "tree_id": "f50609d1ee3a1c9696d0e6954a6ec2e68494cfba",
          "url": "https://github.com/stevepentland/hyper/commit/42587059e6175735b1a8656c5ddbff0edb19294c"
        },
        "date": 1612914522835,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 115448,
            "range": "± 10257",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6463655,
            "range": "± 526900",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 40023,
            "range": "± 3113",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 260439,
            "range": "± 22179",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52010344,
            "range": "± 857130",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 49810758,
            "range": "± 5350306",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 58356481,
            "range": "± 3302750",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3635714,
            "range": "± 279018",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 49837,
            "range": "± 6746",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 82981,
            "range": "± 8018",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 202645,
            "range": "± 32832",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10818757,
            "range": "± 8995208",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10981967,
            "range": "± 9156822",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10506270,
            "range": "± 9038667",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 60465415,
            "range": "± 5751811",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 72735049,
            "range": "± 14028369",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6268326,
            "range": "± 854233",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 94265,
            "range": "± 10887",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 157982,
            "range": "± 18424",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.westerlind@distilnetworks.com",
            "name": "Markus Westerlind",
            "username": "Marwes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f01de8e503c649034a53a8fdf3ad2e107ad9ad2d",
          "message": "refactor(client): Use async/await more (#2437)\n\n* refactor: Use async/await in client.rs\r\n\r\n* refactor: Simplify client.rs a bit more\r\n\r\n* refactor: Allow !Unpin in Lazy\r\n\r\n* Remove some impl Future\r\n\r\n* Remove some combinator use",
          "timestamp": "2021-02-18T10:35:43-08:00",
          "tree_id": "ecce068928942422a611eea6f2e2c7533022f73d",
          "url": "https://github.com/stevepentland/hyper/commit/f01de8e503c649034a53a8fdf3ad2e107ad9ad2d"
        },
        "date": 1613684886684,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 133259,
            "range": "± 23928",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7020161,
            "range": "± 1037502",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 48010,
            "range": "± 14188",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 292471,
            "range": "± 34724",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52810193,
            "range": "± 2483365",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 57072782,
            "range": "± 5801919",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 62394563,
            "range": "± 4573590",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3882101,
            "range": "± 994934",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 55299,
            "range": "± 10843",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 88168,
            "range": "± 13768",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 227259,
            "range": "± 44849",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 11838450,
            "range": "± 9143889",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 12118019,
            "range": "± 9351795",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11600898,
            "range": "± 10153079",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 65311942,
            "range": "± 6248140",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 79274387,
            "range": "± 15602555",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6890023,
            "range": "± 931761",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 99716,
            "range": "± 16841",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 183559,
            "range": "± 39208",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "david.pdrsn@gmail.com",
            "name": "David Pedersen",
            "username": "davidpdrsn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6efc1a1cce0abdd4e3263e7ea328ad49616d8050",
          "message": "docs(server): add server example using `tower::make::Shared` (#2440)\n\n`tower` 0.4.5 introduced `Shared` which is a `MakeService` that produces\r\nservices by cloning an inner service. This works quite well with `hyper`\r\nif your service doesn't need the incoming connection and implements\r\n`Clone`.\r\n\r\nHowever that might not be entirely obvious so I thought it made sense to\r\nadd an example to the docs.\r\n\r\nI wasn't quite sure if the example should go in the server or service\r\nmodule docs but since there already is an example using\r\n`make_service_fn` in the server docs I opted to add it there. Let me\r\nknow if you'd rather have it somewhere else.",
          "timestamp": "2021-02-19T13:50:43-08:00",
          "tree_id": "6b933a218c948e3b2b4e3c4609e622016b6c7137",
          "url": "https://github.com/stevepentland/hyper/commit/6efc1a1cce0abdd4e3263e7ea328ad49616d8050"
        },
        "date": 1613780999093,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 127459,
            "range": "± 18973",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7045404,
            "range": "± 1130479",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 49733,
            "range": "± 7650",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 297722,
            "range": "± 45540",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52012161,
            "range": "± 1271104",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 52613506,
            "range": "± 4463278",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 54309426,
            "range": "± 3309690",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3842974,
            "range": "± 1033986",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 58302,
            "range": "± 12036",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 89515,
            "range": "± 7806",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 230808,
            "range": "± 28024",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12466617,
            "range": "± 9033460",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 12929855,
            "range": "± 9257764",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 12136149,
            "range": "± 9121077",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 65133594,
            "range": "± 6855698",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 77902102,
            "range": "± 14261284",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6763616,
            "range": "± 1159966",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 105120,
            "range": "± 22958",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 181841,
            "range": "± 25532",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cfir16@gmail.com",
            "name": "CfirTsabari",
            "username": "CfirTsabari"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b11eee9bde421cdc1680cadabfd38c5aff8e62f",
          "message": "fix(client): omit default port from automatic Host headers (#2441)\n\nFixes hyperium/hyper#2407",
          "timestamp": "2021-02-22T11:33:28-08:00",
          "tree_id": "5623a60dd93bcebc066f49c52f6b97ab29c074b1",
          "url": "https://github.com/stevepentland/hyper/commit/0b11eee9bde421cdc1680cadabfd38c5aff8e62f"
        },
        "date": 1614029501756,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 77065,
            "range": "± 1160",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7297864,
            "range": "± 630244",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 33623,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 230182,
            "range": "± 6148",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52374604,
            "range": "± 1683011",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 53371230,
            "range": "± 3413324",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 55786505,
            "range": "± 1197521",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4051562,
            "range": "± 592523",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 37293,
            "range": "± 761",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 59803,
            "range": "± 1036",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 196486,
            "range": "± 1337",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10375224,
            "range": "± 9092517",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11243420,
            "range": "± 9734118",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10108248,
            "range": "± 9154301",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 63218128,
            "range": "± 8270165",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 93002480,
            "range": "± 25682933",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6939928,
            "range": "± 1110352",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 68575,
            "range": "± 2102",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 133329,
            "range": "± 1998",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zonyitoo@users.noreply.github.com",
            "name": "ty",
            "username": "zonyitoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c946af49cc7fbbc6bd4894283a654625c2ea383",
          "message": "feat(server): add `AddrIncoming::from_listener` constructor (#2439)",
          "timestamp": "2021-02-22T16:18:38-08:00",
          "tree_id": "895fb85f54da75512a8656c13aeea97236b7fc04",
          "url": "https://github.com/stevepentland/hyper/commit/4c946af49cc7fbbc6bd4894283a654625c2ea383"
        },
        "date": 1614051868498,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 127463,
            "range": "± 17681",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7576531,
            "range": "± 1689769",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 49602,
            "range": "± 7427",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 296109,
            "range": "± 35273",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52012769,
            "range": "± 889561",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 52475931,
            "range": "± 4630980",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53064519,
            "range": "± 4837043",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4337039,
            "range": "± 1257837",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 53965,
            "range": "± 11860",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 86015,
            "range": "± 8021",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 222175,
            "range": "± 14343",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12752284,
            "range": "± 9492262",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 13188195,
            "range": "± 9540783",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 12847432,
            "range": "± 9129222",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 67143637,
            "range": "± 6732079",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 79628678,
            "range": "± 16071811",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6793334,
            "range": "± 925696",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 100319,
            "range": "± 15160",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 179254,
            "range": "± 45056",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f162ca2f2fd14681e11dd8b9ba8d1469b2b9271b",
          "message": "docs(ffi): generate FFI documentation (#2447)",
          "timestamp": "2021-02-26T19:00:37-08:00",
          "tree_id": "6fb822dc3e7c899c8cfbd23348c87583879f465a",
          "url": "https://github.com/stevepentland/hyper/commit/f162ca2f2fd14681e11dd8b9ba8d1469b2b9271b"
        },
        "date": 1614406253687,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 123134,
            "range": "± 27849",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6239392,
            "range": "± 407527",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 49404,
            "range": "± 3445",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 298150,
            "range": "± 9944",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52011754,
            "range": "± 1316460",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 51642939,
            "range": "± 3099611",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 56437636,
            "range": "± 5970814",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3522406,
            "range": "± 458685",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 56572,
            "range": "± 3279",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 89426,
            "range": "± 7170",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 234358,
            "range": "± 18727",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12351120,
            "range": "± 8765345",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 12453801,
            "range": "± 8819278",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11977771,
            "range": "± 8988863",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 64489628,
            "range": "± 5109757",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 76477127,
            "range": "± 13085186",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6621973,
            "range": "± 706222",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 100391,
            "range": "± 20545",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 174755,
            "range": "± 28298",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peter@smitmail.eu",
            "name": "Peter Smit",
            "username": "psmit"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cbf9527dfb313b3f84fcd83260c5c72ce4a1beb",
          "message": "fix(server): skip automatic Content-Length headers when not allowed (#2216)\n\nCloses #2215",
          "timestamp": "2021-03-04T17:03:33-08:00",
          "tree_id": "8c8f7d8ab9d86213ee1f48be464f206ede927d71",
          "url": "https://github.com/stevepentland/hyper/commit/8cbf9527dfb313b3f84fcd83260c5c72ce4a1beb"
        },
        "date": 1614953457726,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 113320,
            "range": "± 22223",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6128759,
            "range": "± 1255582",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 39314,
            "range": "± 8374",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 246541,
            "range": "± 36233",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52010908,
            "range": "± 2565643",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 47678316,
            "range": "± 6531735",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 54811719,
            "range": "± 5649015",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3598769,
            "range": "± 828867",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 45843,
            "range": "± 8762",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 76911,
            "range": "± 10636",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 196825,
            "range": "± 36403",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 11229852,
            "range": "± 9433928",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11684962,
            "range": "± 9581348",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10969736,
            "range": "± 9271148",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 58604855,
            "range": "± 7195777",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 71713828,
            "range": "± 14856973",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6099978,
            "range": "± 1015512",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 85868,
            "range": "± 21434",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 158473,
            "range": "± 42684",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76654022+0x79756b69@users.noreply.github.com",
            "name": "0x79756b69",
            "username": "0x79756b69"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34085afef66b453dfee1c561e6683546bf4600c8",
          "message": "docs(examples): use hyper v0.14 and full feature (#2451)",
          "timestamp": "2021-03-08T14:19:24-08:00",
          "tree_id": "67d588d032acb77655c972fa0622805749a364a2",
          "url": "https://github.com/stevepentland/hyper/commit/34085afef66b453dfee1c561e6683546bf4600c8"
        },
        "date": 1615266668742,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 127175,
            "range": "± 17629",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7194109,
            "range": "± 717724",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 50269,
            "range": "± 6532",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 291053,
            "range": "± 45384",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52008304,
            "range": "± 1613717",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50372006,
            "range": "± 3470073",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52377384,
            "range": "± 3334216",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4082884,
            "range": "± 970979",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 57254,
            "range": "± 7553",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 89122,
            "range": "± 8394",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 224390,
            "range": "± 21854",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12281013,
            "range": "± 9290263",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 12347723,
            "range": "± 9490300",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11875620,
            "range": "± 9349764",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 63842255,
            "range": "± 7036724",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 76352130,
            "range": "± 13530481",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6504281,
            "range": "± 853561",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 106651,
            "range": "± 20657",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 183005,
            "range": "± 27595",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "346512016@qq.com",
            "name": "kolapapa",
            "username": "kolapapa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "297a068454115e8d5426f9051398d851f69235bf",
          "message": "docs(examples): upgrade tokio version (#2456)",
          "timestamp": "2021-03-10T10:00:39-08:00",
          "tree_id": "98004bc3096176316ed6534e6e96eda3d08cb825",
          "url": "https://github.com/stevepentland/hyper/commit/297a068454115e8d5426f9051398d851f69235bf"
        },
        "date": 1615441891600,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 72942,
            "range": "± 6340",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6730959,
            "range": "± 607801",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 31502,
            "range": "± 3504",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 218236,
            "range": "± 23846",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52798505,
            "range": "± 2063225",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 49484142,
            "range": "± 2959227",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53024489,
            "range": "± 2471487",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3824950,
            "range": "± 481071",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 35778,
            "range": "± 4051",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 55578,
            "range": "± 5753",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 189180,
            "range": "± 15956",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10098131,
            "range": "± 10106788",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10063555,
            "range": "± 9742039",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9773026,
            "range": "± 9689642",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 59210808,
            "range": "± 4651457",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 74519035,
            "range": "± 13951916",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6378548,
            "range": "± 927809",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 65613,
            "range": "± 9037",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 123504,
            "range": "± 14000",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@dbrgn.ch",
            "name": "Danilo Bargen",
            "username": "dbrgn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5",
          "message": "docs(body): add links to to_bytes and aggregate (#2464)\n\nSince these two functions are not methods on the `Body`, they aren't\r\nvery discoverable. So a note in the docs would definitely be helpful.",
          "timestamp": "2021-03-15T15:40:28-07:00",
          "tree_id": "14b6039d4a111f52351c76ea2f9cdbb19cf616c6",
          "url": "https://github.com/stevepentland/hyper/commit/eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5"
        },
        "date": 1615867777755,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 79790,
            "range": "± 18241",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 8089309,
            "range": "± 865019",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 32237,
            "range": "± 1423",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 222408,
            "range": "± 9434",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52800330,
            "range": "± 2379655",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 54818708,
            "range": "± 3563220",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 55786831,
            "range": "± 1226646",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4874458,
            "range": "± 555109",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 36952,
            "range": "± 612",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 58985,
            "range": "± 900",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 188346,
            "range": "± 3656",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10848518,
            "range": "± 10624275",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10615197,
            "range": "± 9596863",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10673447,
            "range": "± 9580187",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 66031917,
            "range": "± 10240675",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 85766619,
            "range": "± 17046450",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7104798,
            "range": "± 1103526",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 66144,
            "range": "± 2944",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 128887,
            "range": "± 4286",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@dbrgn.ch",
            "name": "Danilo Bargen",
            "username": "dbrgn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5",
          "message": "docs(body): add links to to_bytes and aggregate (#2464)\n\nSince these two functions are not methods on the `Body`, they aren't\r\nvery discoverable. So a note in the docs would definitely be helpful.",
          "timestamp": "2021-03-15T15:40:28-07:00",
          "tree_id": "14b6039d4a111f52351c76ea2f9cdbb19cf616c6",
          "url": "https://github.com/stevepentland/hyper/commit/eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5"
        },
        "date": 1615869862074,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 111006,
            "range": "± 13266",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 5914231,
            "range": "± 992309",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 35977,
            "range": "± 5078",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 224697,
            "range": "± 27869",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51969937,
            "range": "± 2026209",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 44998092,
            "range": "± 5190006",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52694929,
            "range": "± 4553571",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3394082,
            "range": "± 610439",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 41581,
            "range": "± 6171",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 68183,
            "range": "± 8282",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 178143,
            "range": "± 18307",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10826887,
            "range": "± 9431123",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10791495,
            "range": "± 9011571",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10303162,
            "range": "± 9460066",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 55772592,
            "range": "± 7461895",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 69732491,
            "range": "± 14929469",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5946468,
            "range": "± 1014667",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 77038,
            "range": "± 13879",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 151274,
            "range": "± 17031",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghostd@users.noreply.github.com",
            "name": "Vincent Ricard",
            "username": "ghostd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48fdaf160689f333e9bb63388d0b1d0fa29a1391",
          "message": "fix(headers): Support multiple Content-Length values on same line (#2471)\n\nCloses #2470",
          "timestamp": "2021-03-19T10:38:58-07:00",
          "tree_id": "8444662a531c8356a16120e2128a7e4f20b905a2",
          "url": "https://github.com/stevepentland/hyper/commit/48fdaf160689f333e9bb63388d0b1d0fa29a1391"
        },
        "date": 1616198357451,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 80455,
            "range": "± 7855",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7528924,
            "range": "± 980291",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 32710,
            "range": "± 999",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 231744,
            "range": "± 7394",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52801953,
            "range": "± 3254426",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 52470955,
            "range": "± 1235729",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 54920202,
            "range": "± 1466157",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3986401,
            "range": "± 428974",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 37331,
            "range": "± 1572",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 59188,
            "range": "± 2814",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 187068,
            "range": "± 10560",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10381368,
            "range": "± 9534787",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10888897,
            "range": "± 9887576",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10499309,
            "range": "± 9895238",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 63329262,
            "range": "± 4677703",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 80668319,
            "range": "± 15500916",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6721405,
            "range": "± 979764",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 68165,
            "range": "± 2181",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 130172,
            "range": "± 7177",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghostd@users.noreply.github.com",
            "name": "Vincent Ricard",
            "username": "ghostd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "48fdaf160689f333e9bb63388d0b1d0fa29a1391",
          "message": "fix(headers): Support multiple Content-Length values on same line (#2471)\n\nCloses #2470",
          "timestamp": "2021-03-19T10:38:58-07:00",
          "tree_id": "8444662a531c8356a16120e2128a7e4f20b905a2",
          "url": "https://github.com/stevepentland/hyper/commit/48fdaf160689f333e9bb63388d0b1d0fa29a1391"
        },
        "date": 1616200797975,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 127591,
            "range": "± 35586",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7208058,
            "range": "± 1488259",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 43150,
            "range": "± 10007",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 274383,
            "range": "± 53346",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52840394,
            "range": "± 2864582",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 57530196,
            "range": "± 7107121",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 63460256,
            "range": "± 4872028",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4079697,
            "range": "± 912622",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 50084,
            "range": "± 11567",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 80814,
            "range": "± 19847",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 217336,
            "range": "± 62071",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12470346,
            "range": "± 9671958",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 13016084,
            "range": "± 9526697",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 12586410,
            "range": "± 9686819",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 68107265,
            "range": "± 8259740",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 80826642,
            "range": "± 15161612",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7040408,
            "range": "± 1240719",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 93147,
            "range": "± 18547",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 174140,
            "range": "± 36713",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "thomasdezeeuw@gmail.com",
            "name": "Thomas de Zeeuw",
            "username": "Thomasdezeeuw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41f99578a53845e5e0bb999c101bef8307e1ce5f",
          "message": "refactor(dependencies): update to socket2 v0.4.0 (#2472)",
          "timestamp": "2021-03-22T15:16:31-07:00",
          "tree_id": "bd982e385979d9a9b4441522a8e54b095729bb2e",
          "url": "https://github.com/stevepentland/hyper/commit/41f99578a53845e5e0bb999c101bef8307e1ce5f"
        },
        "date": 1616476290585,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 76372,
            "range": "± 1129",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7078279,
            "range": "± 522222",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 32906,
            "range": "± 1497",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 228038,
            "range": "± 12479",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52809307,
            "range": "± 543225",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 51627428,
            "range": "± 1622903",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 54261550,
            "range": "± 983807",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4123411,
            "range": "± 458517",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 37151,
            "range": "± 1524",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 58388,
            "range": "± 733",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 187697,
            "range": "± 2588",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10085033,
            "range": "± 9169705",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10234019,
            "range": "± 9432044",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9874301,
            "range": "± 9187765",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 62917608,
            "range": "± 3948441",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 77874665,
            "range": "± 12515476",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6952566,
            "range": "± 1014362",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 67126,
            "range": "± 810",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 130336,
            "range": "± 1016",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "thomasdezeeuw@gmail.com",
            "name": "Thomas de Zeeuw",
            "username": "Thomasdezeeuw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "41f99578a53845e5e0bb999c101bef8307e1ce5f",
          "message": "refactor(dependencies): update to socket2 v0.4.0 (#2472)",
          "timestamp": "2021-03-22T15:16:31-07:00",
          "tree_id": "bd982e385979d9a9b4441522a8e54b095729bb2e",
          "url": "https://github.com/stevepentland/hyper/commit/41f99578a53845e5e0bb999c101bef8307e1ce5f"
        },
        "date": 1616479406932,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 107316,
            "range": "± 13745",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 5680125,
            "range": "± 895432",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 38849,
            "range": "± 6751",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 232275,
            "range": "± 41187",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51994566,
            "range": "± 2097377",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 43918357,
            "range": "± 5313604",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53294509,
            "range": "± 6629392",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3326542,
            "range": "± 593256",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 46881,
            "range": "± 12201",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 72953,
            "range": "± 12900",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 190196,
            "range": "± 20838",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10455708,
            "range": "± 9098398",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10698105,
            "range": "± 9496532",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10439251,
            "range": "± 9460243",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 54790582,
            "range": "± 7925515",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 66511038,
            "range": "± 14295004",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5773137,
            "range": "± 1045551",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 81507,
            "range": "± 13676",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 152672,
            "range": "± 30338",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vagelis.prokopiou@gmail.com",
            "name": "Vagelis Prokopiou",
            "username": "Vagelis-Prokopiou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51ed71b0a6e1d90d324f87151434334bab6fb837",
          "message": "docs(client): use Method::POST to match the example in https://hyper.rs/guides/client/advanced/ (#2479)",
          "timestamp": "2021-03-25T13:34:03-07:00",
          "tree_id": "908a1fb4a47378d16439458035a25a2dd41c1516",
          "url": "https://github.com/stevepentland/hyper/commit/51ed71b0a6e1d90d324f87151434334bab6fb837"
        },
        "date": 1616740401088,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 112011,
            "range": "± 16288",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6085674,
            "range": "± 1160540",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 44136,
            "range": "± 5563",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 250571,
            "range": "± 34256",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52005549,
            "range": "± 882452",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 48243623,
            "range": "± 4351214",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 50877745,
            "range": "± 3878286",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3750132,
            "range": "± 496627",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 48315,
            "range": "± 6393",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 84343,
            "range": "± 8862",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 219078,
            "range": "± 30796",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12060999,
            "range": "± 9422131",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 12254708,
            "range": "± 10146285",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11375961,
            "range": "± 9529359",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 59730951,
            "range": "± 7556972",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 72158537,
            "range": "± 16002047",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6448292,
            "range": "± 1152571",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 93016,
            "range": "± 16361",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 163285,
            "range": "± 19708",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "98e7e0bd15642cf9e4bf07b3b03d8b4e538623ba",
          "message": "v0.14.5",
          "timestamp": "2021-03-26T12:03:24-07:00",
          "tree_id": "db5bad5201b0c92abc03652924d33f6cb080b9f1",
          "url": "https://github.com/stevepentland/hyper/commit/98e7e0bd15642cf9e4bf07b3b03d8b4e538623ba"
        },
        "date": 1616813820726,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 133844,
            "range": "± 7657",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7030119,
            "range": "± 325816",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 47371,
            "range": "± 2622",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 291684,
            "range": "± 18896",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52035786,
            "range": "± 2063939",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 55239640,
            "range": "± 8682960",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 61651608,
            "range": "± 4475489",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3953744,
            "range": "± 374262",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 54820,
            "range": "± 4174",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 88499,
            "range": "± 17063",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 232514,
            "range": "± 25307",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 14207630,
            "range": "± 9844234",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 13554997,
            "range": "± 9129182",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 13645413,
            "range": "± 9601061",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 71714073,
            "range": "± 8070714",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 86053652,
            "range": "± 15294452",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7597904,
            "range": "± 1322737",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 102538,
            "range": "± 10192",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 187167,
            "range": "± 27549",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zonyitoo@users.noreply.github.com",
            "name": "ty",
            "username": "zonyitoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "4c946af49cc7fbbc6bd4894283a654625c2ea383",
          "message": "feat(server): add `AddrIncoming::from_listener` constructor (#2439)",
          "timestamp": "2021-02-22T16:18:38-08:00",
          "tree_id": "895fb85f54da75512a8656c13aeea97236b7fc04",
          "url": "https://github.com/stevepentland/hyper/commit/4c946af49cc7fbbc6bd4894283a654625c2ea383"
        },
        "date": 1616822248263,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 69048,
            "range": "± 9245",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6389347,
            "range": "± 434903",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 28315,
            "range": "± 3388",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 199752,
            "range": "± 25662",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51996767,
            "range": "± 2472821",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 48280395,
            "range": "± 4480024",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 50689940,
            "range": "± 2031074",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3380222,
            "range": "± 313061",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 31059,
            "range": "± 2915",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 52132,
            "range": "± 5750",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 161924,
            "range": "± 18697",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9161271,
            "range": "± 9932834",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9426418,
            "range": "± 9891237",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8882274,
            "range": "± 9612008",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 57660837,
            "range": "± 4695876",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 71084958,
            "range": "± 11751854",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5792229,
            "range": "± 771407",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 58341,
            "range": "± 8063",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 113491,
            "range": "± 17957",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kevin@burke.dev",
            "name": "Kevin Burke",
            "username": "kevinburke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa4a2eaa44ce4eb8a0049e4363f59f323ed56854",
          "message": "chore(LICENSE): update license year (#2491)",
          "timestamp": "2021-04-06T14:49:37-07:00",
          "tree_id": "b6f6db86e5b8ff78bec3e88897081599827b72bd",
          "url": "https://github.com/stevepentland/hyper/commit/aa4a2eaa44ce4eb8a0049e4363f59f323ed56854"
        },
        "date": 1617756561730,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 72740,
            "range": "± 5100",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7137090,
            "range": "± 695796",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 30671,
            "range": "± 3240",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 209954,
            "range": "± 24237",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51224490,
            "range": "± 1691672",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50144816,
            "range": "± 4654387",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52838912,
            "range": "± 2701978",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3665686,
            "range": "± 329070",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 34164,
            "range": "± 1995",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 53826,
            "range": "± 3876",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 172371,
            "range": "± 15885",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9418378,
            "range": "± 9261791",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10091033,
            "range": "± 9464929",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9247119,
            "range": "± 9600676",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 57870852,
            "range": "± 5111671",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 74148127,
            "range": "± 14820497",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6280075,
            "range": "± 1095467",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 62559,
            "range": "± 10977",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 120678,
            "range": "± 17664",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}