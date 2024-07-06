let diceResultText = document.getElementById("diceResultText");
function getDice(magnitude) {
    let diceResult = Math.ceil(Math.random() * magnitude);
    diceResultText.innerHTML = diceResult;
    return diceResult;
}

function getChaosIndex() {
    return chaosLevel + odds - 2;
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

/* yesNoDangerList = [
    "No, and...", "No, and...", "No, and...",
    "No", "No", "No",
    "No, but!", "No, but!", 
    "Yes, but...", 
    "Yes, but...", "Yes, but...",
    "Yes!", "Yes!", "Yes!", 
    "Yes, and!", "Yes, and!", "Yes, and!", 
]
document.getElementById("yes-no-button").addEventListener("click", yesNo);
function yesNo() {
    let chaosIndex = getChaosIndex();
    chaosIndex += Math.floor((Math.random() * 2.0 - 1) * 4);
    setResultText(yesNoDangerList[chaosIndex]);
} */

let fateYes = 
[0, 0, 0, 1, 2, 3, 5, 7, 10, 13, 15, 17, 18, 19, 20, 20, 20];
let fateBase = 
[1, 1, 1, 5, 10, 15, 25, 36, 50, 65, 75, 85, 90, 95, 99, 99, 99];
let fateNo =
[81, 81, 81, 82, 83, 84, 86, 88, 91, 94, 96, 98, 99, 100, 101, 101, 101];

document.getElementById("fate-button").addEventListener("click", dangerFate);
function dangerFate() {
    let diceResult = getDice(100);
    if (checkRandomEvent(diceResult)) {
        return;
    }

    let fateIndex = getChaosIndex();

    if (diceResult < fateYes[fateIndex]) {
        setResultText("Definite YES!");
        return;
    }
    if (diceResult < fateBase[fateIndex]) {
        setResultText("Yes");
        return;
    }
    if (diceResult > fateNo[fateIndex]) {
        setResultText("Definite NO!");
        return;
    }
    setResultText("No");
}

let eventActionText = document.getElementById("eventAction");
let eventDescriptionText = document.getElementById("eventDescription");

let eventLocationText = document.getElementById("eventLocation");
let eventCharactersText = document.getElementById("eventCharacters");
let eventObjectsText = document.getElementById("eventObjects");

let eventBox = document.getElementById("eventBox");

function checkRandomEvent(diceResult) {
    let diceString = diceResult.toString();
    if (diceString[0] == diceString[1] && parseInt(diceString[0]) <= chaosLevel) {
        eventBox.style.display = "inline";

        setResultText(getRandomEventFocus(), "Random Event", true);
        eventActionText.innerHTML = getRandomEventAdjectives([eventActions1, eventActions2]);
        eventDescriptionText.innerHTML = getRandomEventAdjectives([eventDescriptor1, eventDescriptor2]);

        eventLocationText.innerHTML = getRandomEventAdjectives([eventLocations]);
        eventCharactersText.innerHTML = getRandomEventAdjectives([eventCharacters]);
        eventObjectsText.innerHTML = getRandomEventAdjectives([eventObjects]);
        return true;
    }
    eventBox.style.display = "none";
    return false;
}

function getRandomEventFocus() {
    let diceResult = getDice(100);
    
    for (let i = 0; i < randomEventFocus.length - 1; i++) {
        const nextElementDC = randomEventFocus[i + 1][0];
        if (diceResult < nextElementDC)
            return randomEventFocus[i][1];
    }
    return randomEventFocus[randomEventFocus.length - 1][1];
}

function getRandomEventAdjectives(lists) {
    let adjectives = "";
    for (let i = 0; i < lists.length; i++) {
        adjectives += pickRandomFromList(lists[i]);
        if (i < lists.length - 1)
            adjectives += ", ";
    }
    
    return adjectives;
}