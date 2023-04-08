"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const imgbox = document.getElementById('imgbox');
const chatbox = document.getElementById('chatbox');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
// Add event listener to message form
messageForm.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const message = messageInput.value;
    messageInput.value = '';
    // Send message to server using POST request
    const response = yield fetch('/ai/text', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    });
    // Extract response from server and display it in chatbox
    const data = yield response.json();
    const reply = data.message;
    //console.log(reply)
    const messageHtml = `
          <div>
            <strong>You:</strong> ${message}
          </div>
          <div>
            <strong>Bot:</strong> ${reply.content}
          </div>
        `;
    chatbox.insertAdjacentHTML('beforeend', messageHtml);
}));
