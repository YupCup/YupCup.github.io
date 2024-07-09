let cardHolders = document.getElementsByClassName("scrollCardHolder");
for (let i = 0; i < cardHolders.length; i++) {
    let cardHolder = cardHolders[i];

    UpdateCardIndexes(cardHolder);

    cardHolder.addEventListener("wheel", (eventInfo) => changeActiveCardWheel(eventInfo, cardHolder));
    cardHolder.addEventListener("touchstart", touchStart);
    cardHolder.addEventListener("touchmove", (eventInfo) => changeActiveCardMouse(eventInfo, cardHolder));
}

function UpdateCardIndexes(cardHolder, moveToFront=true) {
    for (let i = 0; i < cardHolder.children.length; i++) {
        const card = cardHolder.children[i];
        card.style.setProperty("--sibling-index", i);
    }
    if (moveToFront)
        cardHolder.style.setProperty("--scroll-amount", 0);
}

function AddScrollCard(cardHolder) {
    changeActiveCard(cardHolder, 0);
}

function RemoveScrollCard(index) {
    // Fix

    let scrollAmount = parseInt(cardHolder.style.getPropertyValue("--scroll-amount"));
    if (isNaN(scrollAmount))
        scrollAmount = 0;

    cardHolder.style.setProperty("--scroll-amount", scrollAmount);
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

    let cardHolderWidth = parseFloat(getComputedStyle(cardHolder).width);
    let firstChildWidth = parseFloat(getComputedStyle(cardHolder.children[0]).width)
    let lastChildWidth = parseFloat(getComputedStyle(cardHolder.children[cardHolder.children.length - 1]).width)

    if (scrollAmount >= (cardHolderWidth - firstChildWidth)/2) 
        scrollAmount = (cardHolderWidth - firstChildWidth)/2;
    if (scrollAmount <= (-cardHolderWidth + lastChildWidth)/2) 
        scrollAmount = (-cardHolderWidth + lastChildWidth)/2;
    
    cardHolder.style.setProperty("--scroll-amount", scrollAmount);
    // cardHolder.style.setProperty("--active-card-index", getActiveCardIndex(scrollAmount, cardHolder));
    cardHolder.style.left = scrollAmount + "px";
}

function getActiveCardIndex(scrollAmount, cardHolder) {
    let closestIndex = -3;
    let closestPos = 10000;
    for (let i = 0; i < cardHolder.children.length; i++) {
        const child = cardHolder.children[i];
        let rectPosX = Math.abs(child.getBoundingClientRect().x);

        if (rectPosX < closestPos) {
            closestIndex = i;
            closestPos = rectPosX;
        }
    }
    console.log(closestIndex);
    return closestIndex;
}