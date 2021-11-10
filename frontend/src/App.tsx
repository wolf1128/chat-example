import React from 'react';
import './App.css';
import sockerIOClient from 'socket.io-client';
// import sockerIOClient from '../../backend/node_modules/socket.io/client-dist/socket.io'

function App() {
	const ENDPOINT = 'http://127.0.0.1:5000';

	React.useEffect(() => {
		let socket = sockerIOClient(ENDPOINT, { transports: ['websocket'] });
		socket.on('connection', () => {
			console.log('a user connected!');
		});
	});

	return (
		<>
			<ul id="message">
				<form id="form">
					<input id="input" autoComplete="off" />
					<button>Send</button>
				</form>
			</ul>
		</>
	);
}

export default App;
