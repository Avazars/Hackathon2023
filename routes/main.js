"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainRouter = express_1.default.Router();
mainRouter.get('/', (req, res) => {
    res.render('pages/main', { pageTitle: "main" });
});
mainRouter.get('/main', (req, res) => {
});
exports.default = mainRouter;
