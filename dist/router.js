"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const car_router_1 = __importDefault(require("./modules/car/car.router"));
const router = (0, express_1.Router)();
const carRouters = new car_router_1.default();
router.use("/", carRouters.router);
exports.default = router;
