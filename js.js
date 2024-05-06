const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const message = userInput.value;
    if (message.trim() === '') return;

    addMessage('You', message);
    processMessage(message);
    userInput.value = '';
}

function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotReply(message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>Chatbot:</strong> ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function processMessage(message) {
    const responses = {
        'hello': 'Hi there!',
        'how are you': 'I\'m doing well, thank you!',
        'what is your name': 'I\'m a chatbot. You can call me Chatbot.',
        'default': 'I\'m not sure how to respond to that.'
    };

    const response = responses[message.toLowerCase()] || responses['default'];
    addBotReply(response);
}
