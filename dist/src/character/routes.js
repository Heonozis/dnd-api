var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Router from '@koa/router';
import service from './service.js';
const router = new Router({ prefix: '/character' });
router.get('/:id', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service.get(ctx.params.id);
    ctx.status = 200;
    ctx.body = result;
    yield next();
}));
router.post('/', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    if (data) {
        const result = yield service.create(data);
        ctx.status = 200;
        ctx.body = result;
    }
    yield next();
}));
router.patch('/:id', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    if (data) {
        const result = yield service.update(ctx.params.id, data);
        ctx.status = 200;
        ctx.body = result;
    }
    yield next();
}));
export default router;
//# sourceMappingURL=routes.js.map