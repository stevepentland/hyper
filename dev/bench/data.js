window.BENCHMARK_DATA = {
  "lastUpdate": 1606342578879,
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
      }
    ]
  }
}