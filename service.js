import { Application, Router } from "https://deno.land/x/oak/mod.ts";

class XError extends Error {}
const Config = {
  atscan: "https://api.atscan.net",
  defaultPds: "https://bsky.social",
};

const router = new Router();
router
  // ----------------------------
  // START OF ROUTES
  // ----------------------------
  // route /
  // ----------------------------
  .get("/", (ctx) => {
    ctx.response.redirect("https://github.com/atscan/xrpc.link");
  })
  // ----------------------------
  // route /ds/:did - Describe Server
  // ----------------------------
  .get("/ds/:pds?", async (ctx) => {
    const pds = ctx.params.pds || Config.defaultPds;
    return ctx.response.redirect(
      `https://${
        pds.replace(/^https?:\/\//, "")
      }/xrpc/com.atproto.server.describeServer`,
    );
  })
  // ----------------------------
  // route /r/:did - (Get) Repo
  // ----------------------------
  .get("/r/:did", async (ctx) => {
    const { did, pds } = await params(ctx);
    return ctx.response.redirect(
      `${pds}/xrpc/com.atproto.sync.getRepo?did=${did}`,
    );
  })
  // ----------------------------
  // route /c/:did - Checkout
  // ----------------------------
  .get("/c/:did", async (ctx) => {
    const { did, pds } = await params(ctx);
    return ctx.response.redirect(
      `${pds}/xrpc/com.atproto.sync.getCheckout?did=${did}`,
    );
  });
// ----------------------------
// END OF ROUTES
// ----------------------------

async function params(ctx) {
  let did = ctx.params.did;
  let pds = Config.defaultPds;
  if (!did.match(/^did:plc:/)) {
    const fd = await didInfo(did);
    if (!fd) {
      ctx.response.status = 404;
      throw new XError("DID not found");
    }
    did = fd.did;
    pds = fd.pds;
  }
  return { did, pds };
}

async function didInfo(str) {
  return fetch([Config.atscan, str].join("/")).then((r) => {
    return r.status === 200 ? r.json() : null;
  });
}

const app = new Application();
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.error(`[${ctx.url}]`);
    console.error(err);
    ctx.response.body = `${err}`;
  }
});
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening at :8764`);
await app.listen({ port: 8764 });
