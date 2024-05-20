const chatBox1 = document.getElementById('chat-box-1');
const chatBox2 = document.getElementById('chat-box-2');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const message = userInput.value;
    if (message.trim() === '') return;

    processMessage(message);
    userInput.value = '';
}

function addMessage(sender, message, chatBox) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotReply(message, chatBox) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function processMessage(message) {
    const responses = {
        'hi': ['Hi there!', 'Hello, how can I assist you today?'],
        'default': ['Im sorry, I didnt understand that. Can you please rephrase?']
    };

    const possibleReplies = responses[message.toLowerCase()] || responses['default'];
    const replyIndex1 = Math.floor(Math.random() * possibleReplies.length);
    let replyIndex2 = Math.floor(Math.random() * possibleReplies.length);
    while (replyIndex2 === replyIndex1) {
        replyIndex2 = Math.floor(Math.random() * possibleReplies.length);
    }
    
    const response1 = possibleReplies[replyIndex1];
    const response2 = possibleReplies[replyIndex2];
    
    addBotReply(response1, chatBox1);
    addBotReply(response2, chatBox2); 
}
