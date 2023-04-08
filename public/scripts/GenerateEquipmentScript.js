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
const objectNameTextArea = document.getElementById("objectName");
const objectTypeSelect = document.getElementById("objectType");
const objectRaritySelect = document.getElementById("objectRarity");
const objectConditionSelect = document.getElementById("objectCondition");
const objectAbilitiesTextArea = document.getElementById("objectAbilities");
const objectWeightTextArea = document.getElementById("objectWeight");
const eqContextBox = document.getElementById("context");
const eqGenButton = document.getElementById("gen");
const eqOutputBox = document.getElementById("output");
function buildEquipmentString() {
    let output = "";
    const beginning = "Create me an Equipment that:\n";
    output += beginning;
    if (objectNameTextArea.value !== "") {
        output += "Name: " + objectNameTextArea.value + ", ";
    }
    if (objectTypeSelect.value !== "") {
        output += "Equipment Type: " + objectTypeSelect.value + ", ";
    }
    if (objectRaritySelect.value !== "") {
        output += "Rarity: " + objectRaritySelect.value + ", ";
    }
    if (objectConditionSelect.value !== "") {
        output += "Item Condition: " + objectConditionSelect.value + ", ";
    }
    if (objectAbilitiesTextArea.value !== "") {
        output += "Special Abilities: " + objectAbilitiesTextArea.value + ", ";
    }
    if (objectWeightTextArea.value !== "") {
        output += "Weight: " + objectWeightTextArea.value + ", ";
    }
    let context = "\nAdditional Context: ";
    if (eqContextBox.value) {
        context += eqContextBox.value;
        output += context;
    }
    output += "\nPlease Write in the format of " +
        "\n Name: " +
        "\n Appearance: " +
        "\n Abilities: " +
        "\n Uses: ";
    return output;
}
eqGenButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    const message = buildEquipmentString();
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
    eqOutputBox.value = reply;
}));
