const WebSocket = require('ws');

// Cria um servidor WebSocket na porta 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Cliente conectado');
    ws.on('message', (message) => {
        console.log(`Mensagem recebida: ${message}`);
    });
    ws.send('Bem-vindo ao servidor WebSocket!');
});

console.log('Servidor WebSocket rodando em ws://localhost:8080');
