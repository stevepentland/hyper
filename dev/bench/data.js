window.BENCHMARK_DATA = {
  "lastUpdate": 1605737438142,
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
      }
    ]
  }
}