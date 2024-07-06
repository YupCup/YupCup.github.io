function getChaosIndex() {
    return chaosLevel + odds - 2;
}

let fateYes = 
[0, 0, 0, 1, 2, 3, 5, 7, 10, 13, 15, 17, 18, 19, 20, 20, 20];
let fateBase = 
[1, 1, 1, 5, 10, 15, 25, 36, 50, 65, 75, 85, 90, 95, 99, 99, 99];
let fateNo =
[81, 81, 81, 82, 83, 84, 86, 88, 91, 94, 96, 98, 99, 100, 101, 101, 101];

document.getElementById("fate-button").addEventListener("click", dangerFate);
function dangerFate() {
    clearAll();

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

let eventBox = document.getElementById("eventBox");

function checkRandomEvent(diceResult) {
    let diceString = diceResult.toString();
    if (diceString[0] == diceString[1] && parseInt(diceString[0]) <= chaosLevel) {
        eventBox.style.display = "inline";

        setResultText(getRandomEventFocus(), "Random Event", true);
        eventActionText.innerHTML = getRandomEventAdjectives([eventActions1, eventActions2]);
        eventDescriptionText.innerHTML = getRandomEventAdjectives([eventDescriptor1, eventDescriptor2]);

        createEventInfo("forest", getRandomEventAdjectives([eventLocations]));
        createEventInfo("person", getRandomEventAdjectives([eventCharacters]));
        createEventInfo("package_2", getRandomEventAdjectives([eventObjects]));
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