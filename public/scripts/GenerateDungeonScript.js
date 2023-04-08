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
const climate = document.getElementById("climate");
const terrain = document.getElementById("terrain");
const resources = document.getElementById("resources");
const naturalPhenomena = document.getElementById("naturalPhenomena");
const magicalElements = document.getElementById("magicalElements");
const isDungeon = document.getElementById("isDungeon");
const dunContextBox = document.getElementById("context");
const dunGenButton = document.getElementById("gen");
const dunOutputBox = document.getElementById("output");
function buildDungeonString() {
    let output = "";
    const beginning = "Create me a Location that:\n";
    output += beginning;
    if (climate.value !== "") {
        output += "Climate: " + climate.value + ", ";
    }
    if (terrain.value !== "") {
        output += "Terrain Features: " + terrain.value + ", ";
    }
    if (resources.value !== "") {
        output += "Resources: " + resources.value + ", ";
    }
    if (naturalPhenomena.value !== "") {
        output += "Natural Phenomena: " + naturalPhenomena.value + ", ";
    }
    if (magicalElements.value !== "") {
        output += "Magical Elements: " + magicalElements.value + ", ";
    }
    if (isDungeon.checked) {
        output += "Is Dungeon: " + isDungeon.value + ", ";
    }
    let context = "\nAdditional Context: ";
    if (dunContextBox.value) {
        context += dunContextBox.value;
        output += context;
    }
    output += "\nPlease Write in the format of " +
        "\n Name: " +
        "\n Appearance: " +
        "\n Atmosphere: " +
        "\n Origin: " +
        "\n Hazards: ";
    console.log(output);
    return output;
}
dunGenButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    const message = buildDungeonString();
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
    dunOutputBox.value = reply;
}));
