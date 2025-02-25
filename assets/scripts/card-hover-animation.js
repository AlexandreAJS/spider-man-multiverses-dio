function mouseOverCard(event) {
    console.log('handle mouse enter called', this);
}

function addEventListenersToCards(){
    const cardElements = document.getElementsByClassName('card');
    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', mouseOverCard());
    }
}

document.addEventListener('DOMContentLoaded', addEventListenersToCards, false);