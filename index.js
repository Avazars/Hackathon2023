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
const main_1 = __importDefault(require("./routes/main"));
const app = (0, express_1.default)();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express_1.default.static(__dirname + '/public'));
require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        const completion = yield openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: "Hello world" }],
        });
        console.log(completion.data.choices[0].message);
    });
}
// start();
app.use('/', main_1.default);
app.listen(port, () => console.log(`Express app running on port ${port}!`));
