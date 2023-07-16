import { serve } from "https://deno.land/std@0.194.0/http/server.ts";

const Config = {
  atscan: "https://api.atscan.net",
  defaultPds: "https://bsky.social",
  redirs: {
    "(r|repo|getRepo)(/([^\/]+)|)": "/xrpc/com.atproto.sync.getRepo?did=@did",
    "(i|ds|describe|describesServer)":
      "/xrpc/com.atproto.server.describeServer",
    //"(d|did)": "https://api.atscan.net/%1",
  },
};

serve(async (r) => {
  const src = new URL(r.url);
  let route, match;
  for (const k in Config.redirs) {
    const re = new RegExp(k, "i");
    match = src.pathname?.trim().substring(1).match(re);
    if (match) {
      route = Config.redirs[k];
      break;
    }
  }
  if (!match) {
    return new Response(null, { status: 404 });
  }
  let did;
  if (route.indexOf("@did") !== -1) {
    did = await resolveDid(match[3]);
    if (!did) {
      return new Response(null, { status: 404 });
    }
    route = route.replace("@did", did.did);
  }
  match.forEach((u, i) => (route = route.replace("%" + i, u || "")));
  const Location = [
    route.indexOf("http") != -1 ? "" : (did?.pds[0] || Config.defaultPds),
    route.substring(1),
  ].filter((x) => x).join(
    "/",
  );
  return new Response("", {
    status: 302,
    headers: { Location },
  });
});

async function resolveDid(did) {
  return fetch([Config.atscan, did].join("/")).then((r) => {
    return r.status === 200 ? r.json() : null;
  });
}
