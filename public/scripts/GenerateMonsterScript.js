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
const monSizeSelector = document.getElementById("sizeSelector");
const monLocomotionSelector = document.getElementById("locomotionSelector");
const monDifficultySelector = document.getElementById("difficultySelector");
const monBossCheckbox = document.getElementById("bossCheckbox");
const monContextBox = document.getElementById("context");
const monGenButton = document.getElementById("gen");
const monOutputBox = document.getElementById("output");
function buildMonsterString() {
    let output = "";
    const beginning = "Create me a creature that:\n";
    output += beginning;
    if (monSizeSelector.value != 'undefined') {
        output += "size: " + monSizeSelector.value + ", ";
    }
    if (monLocomotionSelector.value != 'undefined') {
        output += "locomotion: " + monLocomotionSelector.value + ", ";
    }
    if (monDifficultySelector.value != 'undefined') {
        output += "difficulty: " + monDifficultySelector.value + ", ";
    }
    if (monBossCheckbox.checked) {
        output += "IsBoss: " + "true";
    }
    let context = "\nAdditional Context: ";
    if (monContextBox.value) {
        context += monContextBox.value;
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
monGenButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    const message = buildMonsterString();
    console.log(message);
    const response = yield fetch('/ai/aitext', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    });
    // Extract response from server and display it in chatbox
    const data = yield response.json();
    const reply = data.message.content;
    monOutputBox.value = reply;
}));
