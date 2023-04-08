"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRouter = express_1.default.Router();
var http = (0, express_1.default)();
loginRouter.get('/', (req, res) => {
    res.render('pages/LoginPage', { pageTitle: "Login" });
});
http.get('*', function (req, res) {
    res.redirect('http://exmple.com' + req.url);
});
exports.default = loginRouter;
