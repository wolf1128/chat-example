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

// STEP[1] Integrating Socket.io
io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('disconnect', () => { // * Special disconnect event.
		console.log('user disconnected');
	});

	// STEP[2] Emitting Events (send/receive events with data)
	socket.on('chat message', (msg: string) => {
		console.log('message: ' + msg);
		// STEP[3] Broadcasting
		io.emit('chat message', msg); 					// Send an event to everyone (simple scenario)
		// socket.broadcast.emit('others can see this!'); 	// Send a message to everyone exxcept for a certain emitting socket. (using broadcast flag)
	})
});

server.listen(5000, () => {
	console.log('listening on *:5000');
});
