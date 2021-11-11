"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer(app);
const socket_io_1 = require("socket.io");
const io = new socket_io_1.Server(server);
const cors_1 = __importDefault(require("cors"));
var corsOptions = {
    origin: '*',
    exposedHeaders: 'Content-Type,context',
};
app.use(cors_1.default(corsOptions));
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});
server.listen(5000, () => {
    console.log('listening on *:5000');
});
