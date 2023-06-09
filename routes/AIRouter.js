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
const express_1 = __importDefault(require("express"));
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const AIRouter = express_1.default.Router();
function generateText(prompt) {
    return __awaiter(this, void 0, void 0, function* () {
        const completion = yield openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
        });
        return completion.data.choices[0].message;
    });
}
AIRouter.post('/aiText', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { message } = req.body;
    const reply = yield generateText(message);
    console.log("Text Gen");
    res.send({ message: reply });
}));
exports.default = AIRouter;
