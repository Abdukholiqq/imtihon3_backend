"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const router_1 = __importDefault(require("./router"));
const server_1 = __importDefault(require("./server"));
const app = new server_1.default(router_1.default);
const server = http_1.default.createServer(app.server);
server.listen(5555, () => console.log("server running"));
