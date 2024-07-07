let chaosText = document.getElementById("dangerText");
let chaosFactor = 5.0;
let lerpedChaosLevel = chaosFactor;

let root = document.querySelector(':root');
setInterval(smoothProgressLerp, 10);

setDanger(chaosFactor);

function setDanger(chaos) {
    try {
        if (chaos < 1)
            chaos = 1;
        else if (chaos > 9)
            chaos = 9;
        
        chaosFactor = chaos;
        chaosText.innerHTML = chaosFactor;

        root.style.setProperty('--progress', chaosFactor * 10);
    } catch {

    }
}

function smoothProgressLerp() {
    if (Math.abs(chaosFactor - lerpedChaosLevel) < 0.001) {
        lerpedChaosLevel = chaosFactor;
        return;
    }

    lerpedChaosLevel += (chaosFactor - lerpedChaosLevel) / 30;
    root.style.setProperty('--progress-smooth', lerpedChaosLevel * 10);
}

document.getElementById("dangerDecrease").addEventListener("click", () => setDanger(chaosFactor - 1));
document.getElementById("dangerIncrease").addEventListener("click", () => setDanger(chaosFactor + 1));
