"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class App {
    constructor(router) {
        this.app = (0, express_1.default)();
        this.Middlewares();
        this.Routers(router);
    }
    get server() {
        return this.app;
    }
    Middlewares() {
        this.app.use(express_1.default.json());
    }
    Routers(router) {
        this.app.use("/", router);
    }
}
exports.default = App;
