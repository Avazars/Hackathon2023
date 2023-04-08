const messageInput = document.getElementById('generate-button');


messageInput.addEventListener('click', async (event) => {
    const message = messageInput.value;

    const response = await fetch('/ai', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    });

    const data = await response.json();
})