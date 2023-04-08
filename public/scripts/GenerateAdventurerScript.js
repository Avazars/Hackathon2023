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
const advContextBox = document.getElementById("context");
const advGenButton = document.getElementById("gen");
const advOutputBox = document.getElementById("output");
function buildCharacterString() {
    let output = "";
    const beginning = "Create me a Character that:\n";
    let context = "\nAdditional Context: ";
    if (advContextBox.value) {
        context += advContextBox.value;
        output += context;
    }
    output += "\nPlease Write in the format of " +
        "\n Name: " +
        "\n Appearance: " +
        "\n Abilities: " +
        "\n Behavior: " +
        "\n Origin: ";
    console.log(output);
    return output;
}
advGenButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    const message = buildCharacterString();
    console.log(message);
    const response = yield fetch('/ai/text', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    });
    // Extract response from server and display it in chatbox
    const data = yield response.json();
    const reply = data.message.content;
    advOutputBox.value = reply;
}));
