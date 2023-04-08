"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const genMonsterRouter = express_1.default.Router();
genMonsterRouter.get("/", (req, res) => {
    res.render("pages/GenMonster", { pageTitle: "Monster" });
});
exports.default = genMonsterRouter;
