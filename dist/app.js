var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import characterRoutes from './src/character/routes.js';
import cors from '@koa/cors';
const app = new Koa();
// logger
app.use((ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
}));
// x-response-time
app.use((ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const start = Date.now();
    yield next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
}));
app.use(cors());
app.use(bodyParser());
app.use(characterRoutes.routes());
app.use(characterRoutes.allowedMethods());
app.listen(3000);
//# sourceMappingURL=app.js.map