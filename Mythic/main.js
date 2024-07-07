let diceResultText = document.getElementById("diceResultText");
function getDice(magnitude) {
    let diceResult = Math.ceil(Math.random() * magnitude);
    diceResultText.innerHTML = diceResult;
    return diceResult;
}

function pickRandomFromList(list) {
    return list[Math.floor(Math.random() * list.length)];
}

let resultText = document.getElementById("resultText");
let eventTitleText = document.getElementById("eventTitleText");

function setResultText(text, eventType="", diceText="") {
    resultText.innerHTML = text;
    eventTitleText.innerHTML = eventType;
    if (diceText != "")
        diceResultText.innerHTML = "";

    resultText.classList.add("appearAnimation");
    setTimeout(() => resultText.classList.remove("appearAnimation"), 100)
}

let initialEventStyle = eventGeneratorBox.style.gridTemplateColumns;

function clearAll() {
    eventBox.style.display = "none";
    eventGeneratorBox.style.gridTemplateColumns = initialEventStyle;
    clearEventInfo();
}