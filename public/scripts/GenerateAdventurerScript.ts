const advContextBox = document.getElementById("context") as HTMLTextAreaElement;
const advGenButton = document.getElementById("gen") as HTMLButtonElement;
const advOutputBox = document.getElementById("output") as HTMLTextAreaElement;

const advNameArea: HTMLTextAreaElement = document.getElementById("nameArea") as HTMLTextAreaElement;
const advTouchStones: HTMLTextAreaElement = document.getElementById("touchStones") as HTMLTextAreaElement;
const advSkills: HTMLTextAreaElement = document.getElementById("skills") as HTMLTextAreaElement;
const advAlignment: HTMLSelectElement = document.getElementById("Alignment") as HTMLSelectElement;
const advStoryRole: HTMLSelectElement = document.getElementById("StoryRole") as HTMLSelectElement;
const advNpcCheckbox: HTMLInputElement = document.getElementById("npcCheckbox") as HTMLInputElement;


function buildCharacterString() : string{
    let output: string = "";

    const beginning: string = "Create me a Character that:\n"

    output = beginning+"\n";

    if (advNameArea.value !== "") {
        output += "Character Name: "+ advNameArea.value +", ";
    }

    if (advTouchStones.value !== "") {
        output += "Character Touchstones: "+ advTouchStones.value +", ";
    }

    if (advSkills.value !== "") {
        output += "Character Skills: "+ advSkills.value +", ";
    }

    if (advAlignment.value !== "undefined") {
        output += "Alignment: "+ advAlignment.value +", ";
    }

    if (advStoryRole.value !== "undefined") {
        output += "Role: "+ advStoryRole.value +", ";
    }

    if (advNpcCheckbox.checked) {
        output += "IsNPC: "+ advNpcCheckbox.checked +"\n ";
    }

    let context: string = "\nAdditional Context: ";
    if(advContextBox.value){
        context += advContextBox.value;
        output += context;
    }

    output += "\nPlease Write in the format of " +
        "\n Name: " +
        "\n Appearance: " +
        "\n Abilities: " +
        "\n Behavior: " +
        "\n Origin: "

    return output;
}


advGenButton.addEventListener('click', async ()=>{
    const message = buildCharacterString();
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
    advOutputBox.value = reply;
});