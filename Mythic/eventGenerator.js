eventInfoSample = document.getElementById("eventInfoSample");
eventGeneratorBox = document.getElementById("eventGeneratorBox");

function createEventInfo(icon, text) {
    eventGeneratorBox.style.display = "grid";
    const newEventInfo = eventInfoSample.cloneNode(true);
    newEventInfo.classList.remove("sample");

    newEventInfo.children[0].innerHTML = icon;
    newEventInfo.children[1].innerHTML = text;

    eventGeneratorBox.appendChild(newEventInfo);
}

function clearEventInfo() {
    eventGeneratorBox.innerHTML = "";
    eventGeneratorBox.style.display = "none";
}

document.getElementById("character-button").addEventListener("click", generateCharacter);

function generateCharacter() {
    clearAll();
    setResultText(generateName() + " " + generateName(), "Character", true);

    createEventInfo("face_3", getRandomEventAdjectives([characterAppearances]));
    createEventInfo("accessibility_new", getRandomEventAdjectives([characterDescriptors]));
    createEventInfo("person_apron", getRandomEventAdjectives([characterIdentities]));
    createEventInfo("history", getRandomEventAdjectives([characterBackgrounds]));
    createEventInfo("local_fire_department", getRandomEventAdjectives([characterMotivations]));
    createEventInfo("voice_selection", getRandomEventAdjectives([characterPersonalities]));
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
    setResultText(generateName(), "Creature", true);

    eventGeneratorBox.style.gridTemplateColumns = "auto auto";

    createEventInfo("visibility", getRandomEventAdjectives([creatureDescriptions]));
    createEventInfo("aspect_ratio", getRandomEventAdjectives([sizes]));
    createEventInfo("swords", getRandomEventAdjectives([creatureAbilities]));
    createEventInfo("bolt", getRandomEventAdjectives([powers]));
}

document.getElementById("environment-button").addEventListener("click", generateTerrain);
function generateTerrain() {
    clearAll();
    setResultText("Environment", "", true);

    createEventInfo("forest", getRandomEventAdjectives([terrainDescriptors]));
    createEventInfo("oxygen_saturation", getRandomEventAdjectives([smells]));
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