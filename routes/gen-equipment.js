"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const genEquipmentRouter = express_1.default.Router();
genEquipmentRouter.get("/", (req, res) => {
    res.render("pages/GenEquipment", { pageTitle: "Equipment" });
});
exports.default = genEquipmentRouter;
