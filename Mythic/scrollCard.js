let cardHolders = document.getElementsByClassName("scrollCardHolder");
for (let i = 0; i < cardHolders.length; i++) {
    let cardHolder = cardHolders[i];
    UpdateCardIndexes(cardHolder);

    cardHolder.addEventListener("wheel", (eventInfo) => changeActiveCard(eventInfo, cardHolder));
}

function UpdateCardIndexes(cardHolder) {
    for (let i = 0; i < cardHolder.children.length; i++) {
        const card = cardHolder.children[i];
        card.style.setProperty("--sibling-index", i);
    }
    cardHolder.style.setProperty("--scroll-amount", 0);
}


function changeActiveCard(eventInfo, cardHolder) {
    let scrollAmount = parseInt(cardHolder.style.getPropertyValue("--scroll-amount"));
    if (isNaN(scrollAmount))
        scrollAmount = 0;
    scrollAmount -= eventInfo.wheelDelta;

    let scrollSpeed = getComputedStyle(cardHolder).getPropertyValue("--scroll-speed");
    if (scrollAmount < 0 || cardHolder.children.length < scrollAmount/scrollSpeed + 1)
        scrollAmount += eventInfo.wheelDelta;

    cardHolder.style.setProperty("--scroll-amount", scrollAmount);

    for (let i = 0; i < cardHolder.children.length; i++) {
        const card = cardHolder.children[i];
        card.style.display = scrollSpeed * i - scrollAmount > 1000 ? "none" : "block";
    }
}
