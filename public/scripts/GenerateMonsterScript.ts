const monSizeSelector = document.getElementById("sizeSelector") as HTMLSelectElement;
const monLocomotionSelector = document.getElementById("locomotionSelector") as HTMLSelectElement;
const monDifficultySelector = document.getElementById("difficultySelector") as HTMLSelectElement;
const monBossCheckbox = document.getElementById("bossCheckbox") as HTMLInputElement;

const monContextBox = document.getElementById("context") as HTMLTextAreaElement;
const monGenButton = document.getElementById("gen") as HTMLButtonElement;
const monOutputBox = document.getElementById("output") as HTMLTextAreaElement;

function buildMonsterString() : string{
    let output: string = "";

    const beginning: string = "Create me a Creature that:\n"

    output += beginning;

    if (monSizeSelector.value != 'undefined'){
        output += "size: " + monSizeSelector.value + ", ";
    }
    if (monLocomotionSelector.value != 'undefined'){
        output += "locomotion: " + monLocomotionSelector.value + ", ";
    }
    if (monDifficultySelector.value != 'undefined'){
        output += "difficulty: " + monDifficultySelector.value + ", ";
    }
    if(monBossCheckbox.checked){
        output += "IsBoss: " + "true";
    }

    let context: string = "\nAdditional Context: ";
    if(monContextBox.value){
        context += monContextBox.value;
        output += context;
    }

    output += "\nPlease Write in the format of " +
        "\n Name: " +
        "\n Appearance: " +
        "\n Abilities: " +
        "\n Behaviors: " +
        "\n Origin: "

    return output;
}


monGenButton.addEventListener('click', async ()=>{
    const message = buildMonsterString();
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
    monOutputBox.value = reply;
});