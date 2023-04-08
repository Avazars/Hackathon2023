const advContextBox = document.getElementById("context") as HTMLTextAreaElement;
const advGenButton = document.getElementById("gen") as HTMLButtonElement;
const advOutputBox = document.getElementById("output") as HTMLTextAreaElement;



function buildCharacterString() : string{
    let output: string = "";

    const beginning: string = "Create me a Character that:\n"



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

    console.log(output)
    return output;
}


advGenButton.addEventListener('click', async ()=>{
    const message = buildCharacterString();
    console.log(message);

    const response = await fetch('/ai/text', {
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