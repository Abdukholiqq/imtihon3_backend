"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            res.status(401).json({ message: "token required" });
        }
        jsonwebtoken_1.default.verify(token, process.env.SECRET, (err, decode) => {
            if (err instanceof jsonwebtoken_1.default.TokenExpiredError) {
                return res.status(401).json({ message: "token Expired" });
            }
            if (err instanceof jsonwebtoken_1.default.JsonWebTokenError) {
                return res.status(401).json({ message: "Invalid token" });
            }
            req.user = decode;
            next();
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = authMiddleware;
