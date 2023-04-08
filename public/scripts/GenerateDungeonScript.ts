const climate = document.getElementById("climate") as HTMLTextAreaElement;
const terrain = document.getElementById("terrain") as HTMLTextAreaElement;
const resources = document.getElementById("resources") as HTMLTextAreaElement;
const naturalPhenomena = document.getElementById("naturalPhenomena") as HTMLTextAreaElement;
const magicalElements = document.getElementById("magicalElements") as HTMLTextAreaElement;
const isDungeon = document.getElementById("isDungeon") as HTMLInputElement;

const dunContextBox = document.getElementById("context") as HTMLTextAreaElement;
const dunGenButton = document.getElementById("gen") as HTMLButtonElement;
const dunOutputBox = document.getElementById("output") as HTMLTextAreaElement;

function buildDungeonString() : string{
    let output: string = "";

    const beginning: string = "Create me a Location that:\n"

    output += beginning;

    if (climate.value !== "") {
        output += "Climate: "+ climate.value +", "
    }

    if (terrain.value !== "") {
        output += "Terrain Features: "+ terrain.value +", "
    }

    if (resources.value !== "") {
        output += "Resources: "+ resources.value +", "
    }

    if (naturalPhenomena.value !== "") {
        output += "Natural Phenomena: "+ naturalPhenomena.value +", "
    }

    if (magicalElements.value !== "") {
        output += "Magical Elements: "+ magicalElements.value +", "
    }

    if (isDungeon.checked) {
        output += "Is Dungeon: "+ isDungeon.value +", "
    }

    let context: string = "\nAdditional Context: ";
    if(dunContextBox.value){
        context += dunContextBox.value;
        output += context;
    }

    output += "\nPlease Write in the format of " +
        "\n Name: " +
        "\n Appearance: " +
        "\n Atmosphere: " +
        "\n Origin: " +
        "\n Hazards: "

    console.log(output)
    return output;
}


dunGenButton.addEventListener('click', async ()=>{
    const message = buildDungeonString();
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
    dunOutputBox.value = reply;
});