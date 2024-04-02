"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*import {createPool} from 'mysql2/promise';

export async function connect(){

    const connection = await createPool({

        host: 'localhost',
        user: 'root',
        database: 'node_mysql_ts',
        connectionLimit: 10
    })

    return connection;
};
*/
const promise_1 = __importDefault(require("mysql2/promise"));
//import keys from './keys';
class database {
    conectarBD() {
        return __awaiter(this, void 0, void 0, function* () {
            this.cnn = yield promise_1.default.createPool({
                host: 'localhost',
                password: "",
                user: 'root',
                database: 'node_mysql_ts',
                connectionLimit: 10
            });
            try {
                let testconection = yield this.cnn.query(`use node_mysql_ts`);
                console.log(`Database node_mysql_ts conected!`);
            }
            catch (error) {
                console.log(`ERROR database conection!: ${error} `);
            }
        });
    }
    getC() {
        return this.cnn;
    }
    desconectarDB() {
        this.cnn.end(() => { });
    }
    querySelect(sql, data) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = null;
            if (!data) {
                result = yield this.cnn.query(sql);
            }
            else {
                result = yield this.cnn.query(sql, data);
            }
            return result[0];
        });
    }
}
const db = new database();
exports.default = db;
//# sourceMappingURL=database.js.map