import express from 'express';
const app = express();
import http from 'http';
const server = http.createServer(app);
import { Server } from 'socket.io';
const io = new Server(server);
import cors from 'cors';

var corsOptions = {
	origin: '*',
	exposedHeaders: 'Content-Type,context',
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
	res.send('<h1>Hello World</h1>');
	// res.sendFile(__dirname + '/index.html');
});

io.on('connection', () => {
	console.log('a user connected');
});

server.listen(5000, () => {
	console.log('listening on *:5000');
});
