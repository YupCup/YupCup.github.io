let diceResultText = document.getElementById("diceResultText");

function getDice(magnitude) {
    let diceResult = Math.ceil(Math.random() * magnitude);
    diceResultText.innerHTML = diceResult;
    return diceResult;
}

function pickRandomFromList(list) {
    return list[Math.floor(Math.random() * list.length)];
}

let resultDiv = document.getElementById("resultDiv");
let resultText = document.getElementById("resultText");
let eventIcon = document.getElementById("eventIcon");
let eventTitleText = document.getElementById("eventTitleText");

function setResultText(text, icon, eventType="", diceText="") {
    resultText.innerHTML = text;
    eventTitleText.innerHTML = eventType;
    eventIcon.innerHTML = icon;
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
let card = document.getElementById("resultDiv");
let cardHolder = document.getElementById("cardHolder");
let timesCleared = 0;

function clearAll() {
    timesCleared ++;
    if (timesCleared == 1)
        return;

    var newCard = card.cloneNode(true);
    card.after(newCard);
    UpdateCardIndexes(cardHolder);
    let closeButton = newCard.getElementsByClassName("closeButton")[0];
    closeButton.classList.remove("sample");
    closeButton.addEventListener("click", ()=>
        {
            closeButton.parentNode.remove();
            UpdateCardIndexes(cardHolder);
        }
    )

    eventGeneratorBox.style.gridTemplateColumns = initialEventStyle;
    clearEventInfo();

    resultText.style.cursor = "auto";

    var old_element = resultText;
    resultText = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(resultText, old_element);
    applyAppearAnimation(resultDiv);
}