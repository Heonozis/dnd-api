var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import db from "../db.js";
import { nanoid } from 'nanoid';
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const id = nanoid(10);
    data = Object.assign(Object.assign({}, data), { id });
    console.log(`Creating character: ${JSON.stringify(data)}`);
    yield db('characters').insert({ id, data: JSON.stringify(data) });
    return data;
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Updating character: ${JSON.stringify(data)}`);
    yield db('characters').update({ data: JSON.stringify(data) }).where({ id });
    return data;
});
const get = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield db('characters').select(['data']).where({ id }).first();
    console.log(`Fetching character: ${JSON.stringify(data)}`);
    return data;
});
export default {
    create,
    update,
    get
};
//# sourceMappingURL=service.js.map