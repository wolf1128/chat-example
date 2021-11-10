import express from 'express';
const app = express();
import http from 'http';
const server = http.createServer(app);

app.get('/', (req, res) => {
	res.send('<h1>Hello World</h1>');
});

server.listen(3000, () => {
	console.log('listening on *:3000');
});
