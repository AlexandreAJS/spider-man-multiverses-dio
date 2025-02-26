function mouseEnterCard() {
   this.classList.add('card--hover') //this se refere ao elemento que disparou o evento, neste caso o card
    /*classList é uma propriedade do elemento DOM que retorna uma coleção DOMTokenList dos nomes das classes CSS
    atribuídas ao elemento. Essa propriedade permite manipular as classes CSS de um elemento de forma conveniente.
    */
}

function addEventListenersToCards(){
    const cardElements = document.getElementsByClassName('card');
    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', mouseEnterCard);
    }
}

document.addEventListener('DOMContentLoaded', addEventListenersToCards, false);