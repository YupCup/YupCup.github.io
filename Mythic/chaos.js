let chaosText = document.getElementById("dangerText");
let chaosLevel = 5.0;
let lerpedChaosLevel = chaosLevel;

let odds = 5;

let root = document.querySelector(':root');
setInterval(smoothProgressLerp, 10);

setDanger(chaosLevel);

function setDanger(chaos) {
    try {
        if (chaos < 1)
            chaos = 1;
        else if (chaos > 9)
            chaos = 9;
        
        chaosLevel = chaos;
        chaosText.innerHTML = chaosLevel;

        root.style.setProperty('--progress', chaosLevel * 10);
    } catch {

    }
}

function smoothProgressLerp() {
    if (Math.abs(chaosLevel - lerpedChaosLevel) < 0.001) {
        lerpedChaosLevel = chaosLevel;
        return;
    }

    lerpedChaosLevel += (chaosLevel - lerpedChaosLevel) / 30;
    root.style.setProperty('--progress-smooth', lerpedChaosLevel * 10);
}

document.getElementById("dangerDecrease").addEventListener("click", () => setDanger(chaosLevel - 1));
document.getElementById("dangerIncrease").addEventListener("click", () => setDanger(chaosLevel + 1));
