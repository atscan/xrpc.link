# xrpc.link

Quickly jump to XRPC endpoints (AT Protocol)

## Supporter routes

### `/r/<handle|did>`

Gets the repo state (full repo).

→ [com.atproto.sync.getRepo](https://atproto.com/lexicons/com-atproto-sync#comatprotosyncgetrepo)

Example: https://xrpc.link/r/atproto.com

### `/c/<handle|did>`

Gets the repo state (checkout).

→ [com.atproto.sync.getCheckout](https://atproto.com/lexicons/com-atproto-sync#comatprotosyncgetcheckout)

Example: https://xrpc.link/c/atproto.com

### `/ds/<pds>`

Get a document describing the service's accounts configuration.

→ [com.atproto.server.describeServer](https://atproto.com/lexicons/com-atproto-server#comatprotoserverdescribeserver)

Example: https://xrpc.link/ds/bsky.social