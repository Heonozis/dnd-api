import Koa from 'koa';

import bodyParser from 'koa-bodyparser';

import characterRoutes from './src/character/routes.js'

import cors from '@koa/cors'

const app = new Koa();
// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});
app.use(cors());

app.use(bodyParser());

app.use(characterRoutes.routes());
app.use(characterRoutes.allowedMethods());

app.listen(process.env.PORT || 8080);
