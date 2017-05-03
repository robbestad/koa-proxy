# Koa 3 Proxy

## Installation

Get it from npm with ```npm install --save koa3-proxy```

## Testing 

```javascript
const koaProxy = require('koa3-proxy');
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


