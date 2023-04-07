"use strict";
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
app.use('/', main_1.default);
app.listen(port, () => console.log(`Express app running on port ${port}!`));
