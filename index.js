// Importa a biblioteca WebSocket
const WebSocket = require('ws');

// Cria um servidor WebSocket na porta 8080
const wss = new WebSocket.Server({ port: 8080 });

// Quando um cliente se conectar ao servidor
wss.on('connection', (ws) => {
    console.log('Cliente conectado');

    // Escuta por mensagens enviadas pelo cliente
    ws.on('message', (message) => {
        console.log(`Mensagem recebida: ${message}`);
    });

    // Envia uma mensagem de boas-vindas para o cliente
    ws.send('Bem-vindo ao servidor WebSocket!');
});

// Exibe no terminal que o servidor está rodando
console.log('Servidor WebSocket rodando em ws://localhost:8080');
