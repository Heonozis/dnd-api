import Router from '@koa/router';
import service from './service.js'
const router = new Router({ prefix: '/character' });

router.get('/:id', async (ctx, next) => {
  const result = await service.get(ctx.params.id)
  ctx.status = 200
  ctx.body = result
  await next()
});

router.post('/', async (ctx, next) => {
  const data = ctx.request.body
  if (data) {
    const result = await service.create(data)
    ctx.status = 200
    ctx.body = result
  }
  await next()
});

router.patch('/:id', async (ctx, next) => {
  const data = ctx.request.body
  if (data) {
    const result = await service.update(ctx.params.id, data)    
    ctx.status = 200
    ctx.body = result
  }
  await next()
});

export default router
