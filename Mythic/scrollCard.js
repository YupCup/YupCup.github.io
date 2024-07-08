let cardHolders = document.getElementsByClassName("scrollCardHolder");
for (let i = 0; i < cardHolders.length; i++) {
    let cardHolder = cardHolders[i];
    UpdateCardIndexes(cardHolder);

    cardHolder.addEventListener("wheel", (eventInfo) => changeActiveCardWheel(eventInfo, cardHolder));
    cardHolder.addEventListener("touchstart", touchStart);
    cardHolder.addEventListener("touchmove", (eventInfo) => changeActiveCardMouse(eventInfo, cardHolder));
}

function UpdateCardIndexes(cardHolder) {
    for (let i = 0; i < cardHolder.children.length; i++) {
        const card = cardHolder.children[i];
        card.style.setProperty("--sibling-index", i);
    }
    cardHolder.style.setProperty("--scroll-amount", 0);
}

let start = {x:0, y:0};
function touchStart(event) {
    start.x = event.touches[0].pageX;
    start.y = event.touches[0].pageY;
}

function touchMove(event) {
    offset = {};

    offset.x = start.x - event.touches[0].pageX;
    offset.y = start.y - event.touches[0].pageY;

    return offset;  
}

function changeActiveCardMouse(eventInfo, cardHolder) {
    changeActiveCard(cardHolder, parseInt(touchMove(eventInfo).x) * -3);
    touchStart(eventInfo);
}

function changeActiveCardWheel(eventInfo, cardHolder) {
    changeActiveCard(cardHolder, eventInfo.wheelDelta);
}

function changeActiveCard(cardHolder, delta) {
    if (isNaN(delta))
        return;

    let scrollAmount = parseInt(cardHolder.style.getPropertyValue("--scroll-amount"));
    if (isNaN(scrollAmount))
        scrollAmount = 0;
    scrollAmount -= delta;

    let scrollSpeed = getComputedStyle(cardHolder).getPropertyValue("--scroll-speed");
    if (scrollAmount < 0 || cardHolder.children.length < scrollAmount/scrollSpeed + 1)
        scrollAmount += delta;

    cardHolder.style.setProperty("--scroll-amount", scrollAmount);

    for (let i = 0; i < cardHolder.children.length; i++) {
        const card = cardHolder.children[i];
        card.style.display = scrollSpeed * i - scrollAmount > 1000 ? "none" : "block";
    }
}
