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
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
class Database {
    constructor() {
        this.pool = new pg_1.Pool({
            user: "postgres",
            host: "localhost",
            database: "cars",
            password: "20020",
        });
    }
    fetchAll(SQL, params = []) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            try {
                const { rows } = yield client.query(SQL, params);
                return rows;
            }
            catch (error) {
                console.log(error);
            }
            finally {
                client.release();
            }
        });
    }
}
exports.default = new Database();
