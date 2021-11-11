import React from 'react';
import './App.css';
import socketIOClient from 'socket.io-client';
// import sockerIOClient from '../../backend/node_modules/socket.io/client-dist/socket.io'

function App() {
	// STEP[1] Integrating Socket.io
	const ENDPOINT = 'http://127.0.0.1:5000';
	const socket = socketIOClient(ENDPOINT, { transports: ['websocket'] });

	const [message, setMessage] = React.useState('');

	React.useEffect(() => {
		const messages = document.getElementById('messages')!;

		// STEP[2] Emitting Events (send/receive events with data)
		socket.on('chat message', function (msg: string) {
			let item = document.createElement('li');
			item.textContent = msg;
			messages.appendChild(item);
			window.scrollTo(0, document.body.scrollHeight);
		});

	}, []);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (message) {
			socket.emit('chat message', message);
			setMessage('');
		}
	};

	return (
		<>
			<ul id="messages"></ul>
			<form
				id="form"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
			>
				<input
					id="input"
					autoComplete="off"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button>Send</button>
			</form>
		</>
	);
}

export default App;
