# xrpc.link

Quickly jump to XRPC endpoints (AT Protocol)

## Supporter routes

### `/r/<handle|did>` ([com.atproto.sync.getRepo](https://atproto.com/lexicons/com-atproto-sync#comatprotosyncgetrepo))

Gets the repo state (full repo). ([example](https://xrpc.link/r/atproto.com))

### `/c/<handle|did>` ([com.atproto.sync.getCheckout](https://atproto.com/lexicons/com-atproto-sync#comatprotosyncgetcheckout))

Gets the repo state (checkout). ([example](https://xrpc.link/c/atproto.com))

### `/ds/<pds>` ([com.atproto.server.describeServer](https://atproto.com/lexicons/com-atproto-server#comatprotoserverdescribeserver))

Get a document describing the service's accounts configuration. ([example](https://xrpc.link/ds/bsky.social))