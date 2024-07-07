eventInfoSample = document.getElementById("eventInfoSample");
eventGeneratorBox = document.getElementById("eventGeneratorBox");

function createSingleLineEventInfo(icon, list) {
    createRandomEventInfo(icon, list);

    eventGeneratorBox.children[eventGeneratorBox.children.length - 1].style.gridColumnStart = "span 6";
}

function createRandomEventInfo(icon, list) {
    eventGeneratorBox.style.display = "inline-grid";
    const newEventInfo = eventInfoSample.cloneNode(true);
    newEventInfo.classList.remove("sample");
    
    randomizeEventInfo(icon, list, newEventInfo);

    eventGeneratorBox.appendChild(newEventInfo);
    newEventInfo.addEventListener("click", () => rerollEvent(icon, list, newEventInfo));
    newEventInfo.children[0].addEventListener("click", () => rerollEvent(icon, list, newEventInfo));
    newEventInfo.children[1].addEventListener("click", () => rerollEvent(icon, list, newEventInfo));
}

function randomizeEventInfo(icon, list, eventInfo) {
    eventInfo.children[0].innerHTML = icon;
    eventInfo.children[1].innerHTML = getRandomEventAdjectives(list);
}

function rerollEvent(icon, list, eventInfo) {
    randomizeEventInfo(icon, list, eventInfo);
    applyAppearAnimation(eventInfo);
}

function setEventsPerLine(amount) {
    eventGeneratorBox.style.gridTemplateColumns = "repeat(" + (amount*2) + ", 1fr)"
}

function createEmptyEvent() {
    var br = document.createElement("br");
    eventGeneratorBox.appendChild(br);
}

function clearEventInfo() {
    eventGeneratorBox.innerHTML = "";
    eventGeneratorBox.style.display = "none";
}
document.getElementById("event-button").addEventListener("click", generateEvent);

function generateEvent() {
    clearAll();

    setResultText(getRandomEventFocus(), "map", "Event", true);

    createSingleLineEventInfo("manufacturing", [eventActions1, eventActions2]);
    createSingleLineEventInfo("visibility", [eventDescriptor1, eventDescriptor2]);

    createRandomEventInfo("forest", [eventLocations]);
    createRandomEventInfo("person", [eventCharacters]);
    createRandomEventInfo("package_2", [eventObjects]);
}

document.getElementById("character-button").addEventListener("click", generateCharacter);

function generateCharacter() {
    clearAll();
    setResultText(generateName() + " " + generateName(), "comedy_mask", "Character", true);
    setNameReroll(() => setResultText(generateName() + " " + generateName(), "Character"));

    createRandomEventInfo("face_3", [characterAppearances]);
    createRandomEventInfo("accessibility_new", [characterDescriptors]);
    createRandomEventInfo("person_apron", [characterIdentities]);
    createRandomEventInfo("history", [characterBackgrounds]);
    createRandomEventInfo("local_fire_department", [characterMotivations]);
    createRandomEventInfo("voice_selection", [characterPersonalities]);
}

function generateName() {
    let name = getRandomEventAdjectives([names]);
    for (let i = 0; i < Math.random() * 2; i++) {
        name += getRandomEventAdjectives([names]).toLowerCase();
    }
    return name;
}

document.getElementById("creature-button").addEventListener("click", generateBeast);
function generateBeast() {
    clearAll();
    setResultText(generateName(), "raven", "Creature", true);
    setNameReroll(() => setResultText(generateName(), "Creature"));

    createRandomEventInfo("visibility", [creatureDescriptions]);
    createRandomEventInfo("aspect_ratio", [sizes]);
    createRandomEventInfo("local_fire_department", [characterMotivations]);
    createEmptyEvent();
    createRandomEventInfo("swords", [creatureAbilities]);
    createRandomEventInfo("bolt", [powers]);

}

document.getElementById("environment-button").addEventListener("click", generateTerrain);
function generateTerrain() {
    clearAll();
    setResultText(generateName(), "forest", "Environment", true);
    setNameReroll(() => setResultText(generateName(), "Environment"));

    createRandomEventInfo("visibility", [terrainDescriptors]);
    createRandomEventInfo("oxygen_saturation", [smells]);
    createRandomEventInfo("hearing", [sounds]);
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