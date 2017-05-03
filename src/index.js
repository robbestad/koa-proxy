const httpProxy = require("http-proxy");
// import httpProxy from './http-proxy/lib/http-proxy.js'
const proxy = httpProxy.createProxyServer();

export default (ctx, options) =>
  new Promise((resolve, reject) => {
    proxy.web(ctx.req, ctx.res, options, e => {
      const { rewrite } = options;
      if ("function" === typeof rewrite) {
        ctx.req.url = rewrite(ctx.req.url);
      }
      const status = {
        ECONNREFUSED: 503,
        ETIMEOUT: 504
      }[e.code];
      if (status) {
        ctx.status = status;
        reject(ctx);
      }
      resolve(ctx);
    });
  });
