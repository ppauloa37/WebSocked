// Cria a conexão WebSocket
const ws = new WebSocket('ws://localhost:8080'); // Aqui você coloca a URL do servidor

// Atualiza o status de conexão na página
ws.onopen = () => {
    document.getElementById('status').textContent = 'Conectado ao servidor!';
};

// Recebe mensagens do servidor
ws.onmessage = (event) => {
    document.getElementById('messageLog').textContent = 'Servidor diz: ' + event.data;
};

// Exibe erros
ws.onerror = (error) => {
    document.getElementById('status').textContent = 'Erro na conexão!';
};

// Envia uma mensagem quando o botão é clicado
document.getElementById('sendButton').onclick = () => {
    const message = 'Olá, servidor!';  // Pode ser alterado para enviar uma mensagem personalizada
    ws.send(message);
    document.getElementById('messageLog').textContent = 'Mensagem enviada: ' + message;
};
