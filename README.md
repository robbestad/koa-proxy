# Koa 2 Proxy

## Installation

Get it from npm with ```npm install --save @svenardo/koa-proxy```

## Testing 

```javascript
const koaProxy = require('@svenardo/koa-proxy');
const Router = require('koa-router');
const router = new Router();

router.get("/octocat*", async ctx => 
  ctx.body = await koaProxy(ctx, {
  target: 'https://api.github.com/users',
  changeOrigin: true
  })
  .then(res => res)
  .catch(err => handleError(err))
)
```

## License

ISC


