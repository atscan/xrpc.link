# xrpc.link

Quickly jump to XRPC endpoints ([AT Protocol](https://atproto.com/))

## Supported routes

| Route | Endpoint | Example |
| --- | --- | --- |
| `/docs` | link to AT Proto Docs | [example](https://xrpc.link/docs) |
| `/(spec|specs)/:page?` | link to AT Proto Specs | [example](https://xrpc.link/specs) |
| `/(lex|lexicon|lexicons)/:lexicon?` | link to AT Proto Lexicons | [example](https://xrpc.link/lex/sync) |
| `/(r|repo)/:did_or_handle` | [com.atproto.sync.getRepo](https://atproto.com/lexicons/com-atproto-sync#comatprotosyncgetrepo) | [example](https://xrpc.link/r/atproto.com) |
| `/(c|checkout)/:did_or_handle` | [com.atproto.sync.getCheckout](https://atproto.com/lexicons/com-atproto-sync#comatprotosyncgetcheckout) | [example](https://xrpc.link/c/atproto.com) |
| `/(ds|describeServer)/:pds?` | [com.atproto.server.describeServer](https://atproto.com/lexicons/com-atproto-server#comatprotoserverdescribeserver) | [example](https://xrpc.link/ds/bsky.social) |

