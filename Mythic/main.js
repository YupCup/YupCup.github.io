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

    applyAppearAnimation(resultText);
}

function applyAppearAnimation(node) {
    node.classList.add("appearAnimation");
    setTimeout(() => node.classList.remove("appearAnimation"), 100)
}

function setNameReroll(func, Category) {
    resultText.addEventListener("click", func, Category, true);
    resultText.style.cursor = "pointer";
}

let initialEventStyle = eventGeneratorBox.style.gridTemplateColumns;

function clearAll() {
    console.log("uh");
    eventGeneratorBox.style.gridTemplateColumns = initialEventStyle;
    clearEventInfo();

    resultText.style.cursor = "auto";

    var old_element = resultText;
    resultText = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(resultText, old_element);
}