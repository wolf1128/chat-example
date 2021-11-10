"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer(app);
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});
server.listen(5000, () => {
    console.log('listening on *:5000');
});
