const objectNameTextArea = document.getElementById("objectName") as HTMLTextAreaElement;
const objectTypeSelect = document.getElementById("objectType") as HTMLSelectElement;
const objectRaritySelect = document.getElementById("objectRarity") as HTMLSelectElement;
const objectConditionSelect = document.getElementById("objectCondition") as HTMLSelectElement;
const objectAbilitiesTextArea = document.getElementById("objectAbilities") as HTMLTextAreaElement;
const objectWeightTextArea = document.getElementById("objectWeight") as HTMLTextAreaElement;


const eqContextBox = document.getElementById("context") as HTMLTextAreaElement;
const eqGenButton = document.getElementById("gen") as HTMLButtonElement;
const eqOutputBox = document.getElementById("output") as HTMLTextAreaElement;

function buildEquipmentString() : string{
    let output: string = "";

    const beginning: string = "Create me an Equipment that:\n"

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


    let context: string = "\nAdditional Context: ";
    if(eqContextBox.value){
        context += eqContextBox.value;
        output += context;
    }

    output += "\nPlease Write in the format of " +
        "\n Name: " +
        "\n Appearance: " +
        "\n Abilities: " +
        "\n Uses: "

    return output;
}


eqGenButton.addEventListener('click', async ()=>{
    const message = buildEquipmentString();
    console.log(message);

    const response = await fetch('/ai/aitext', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    });

    // Extract response from server and display it in chatbox
    const data = await response.json();
    const reply = data.message.content;
    eqOutputBox.value = reply;
});