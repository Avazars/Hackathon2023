const imgbox = document.getElementById('imgbox') as HTMLDivElement;
const chatbox = document.getElementById('chatbox') as HTMLDivElement;
const messageForm = document.getElementById('message-form') as HTMLFormElement;
const messageInput = document.getElementById('message-input') as HTMLInputElement;

// Add event listener to message form
messageForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const message = messageInput.value;
    messageInput.value = '';

    // Send message to server using POST request
    const response = await fetch('/ai/text', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    });

    // Extract response from server and display it in chatbox
    const data = await response.json();
    const reply = data.message;
    const messageHtml = `
          <div>
            <strong>You:</strong> ${message}
          </div>
          <div>
            <strong>Bot:</strong> ${reply.content}
          </div>
        `;
    chatbox.insertAdjacentHTML('beforeend', messageHtml);
});