function getChaosIndex(odds) {
    return chaosFactor + odds - 2;
}
/* 
let fateYes = 
[0, 0, 0, 1, 2, 3, 5, 7, 10, 13, 15, 17, 18, 19, 20, 20, 20];
let fateBase = 
[1, 1, 1, 5, 10, 15, 25, 36, 50, 65, 75, 85, 90, 95, 99, 99, 99];
let fateNo =
[81, 81, 81, 82, 83, 84, 86, 88, 91, 94, 96, 98, 99, 100, 101, 101, 101]; */


let fateYes = 
[0, 1, 2, 3, 5, 7, 10, 13, 15, 17, 18, 19, 20];
let fateBase = 
[1, 5, 10, 15, 25, 35, 50, 65, 75, 85, 90, 95, 99];
let fateNo =
[81, 82, 83, 84, 86, 88, 91, 94, 96, 98, 99, 100, 101];


let oddsBar = document.getElementById("oddsBar");
for (let i = 0; i < oddsBar.children.length; i++) {
    const child = oddsBar.children[i];
    child.addEventListener("click", () => dangerFate(i+1));
}

document.getElementById("fate-button").addEventListener("click", toggleOddsBar);
function toggleOddsBar() {
    if (hoverAmount > 0)
        return;

    oddsBar.style.visibility = oddsBar.style.visibility == "hidden" ? "visible" : "hidden";
}

document.getElementById("fate-button").addEventListener("mouseenter", ()=>hoverElement(1));
document.getElementById("fate-button").addEventListener("mouseleave", ()=>hoverElement(-1));
oddsBar.addEventListener("mouseenter", ()=>hoverOddsbarIfActive(1));
oddsBar.addEventListener("mouseleave", ()=>hoverOddsbarIfActive(-1));

function hoverOddsbarIfActive(change) {
    if (oddsBar.style.visibility == "hidden")
        return;

    hoverElement(change);
}

let hoverAmount = 0;
let hideID = "a";
function hoverElement(change) {
    hoverAmount += change
    if (hoverAmount == 0)
        hideID = setTimeout(() => oddsBar.style.visibility = "hidden", 50);
    else {
        if (typeof hideID === "number") {
            clearTimeout(hideID);
        }
        oddsBar.style.visibility = "visible";
    }
}

let oddsTitles = ["Impossible", "Unlikely", "50/50", "Likely", "Certain"]

function dangerFate(odds) {
    clearAll();
    oddsBar.style.visibility = "hidden";

    let diceResult = getDice(100);
    if (checkRandomEvent(diceResult)) {
        return;
    }

    let fateIndex = getChaosIndex(odds);
    let icon = "theater_comedy";
    let oddsText = oddsTitles[odds - 1];

    if (diceResult < fateYes[fateIndex]) {
        setResultText("Definite YES!", icon, oddsText);
        return;
    }
    if (diceResult < fateBase[fateIndex]) {
        setResultText("Yes", icon, oddsText);
        return;
    }
    if (diceResult > fateNo[fateIndex]) {
        setResultText("Definite NO!", icon, oddsText);
        return;
    }
    setResultText("No", icon, oddsText);
}

function checkRandomEvent(diceResult) {
    let diceString = diceResult.toString();
    if (diceString[0] == diceString[1] && parseInt(diceString[0]) <= chaosFactor) {
        generateEvent();
        setResultText(getRandomEventFocus(), "theater_comedy", "Random Event", true);
        return true;
    }
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