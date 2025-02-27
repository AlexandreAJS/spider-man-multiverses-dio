function mouseEnterCard() {
   this.classList.add('card--hovered'); //this se refere ao elemento que disparou o evento, neste caso o card
    /*classList é uma propriedade do elemento DOM que retorna uma coleção DOMTokenList dos nomes das classes CSS
    atribuídas ao elemento. Essa propriedade permite manipular as classes CSS de um elemento de forma conveniente.
    */
   document.body.id= (`${this.id}--hovered`);
}

function mouseLeaveCard() {
    this.classList.remove('card--hovered');
    document.body.id = '';
}

function addEventListenersToCards(){
    const cardElements = document.getElementsByClassName('card');
    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', mouseEnterCard);
        card.addEventListener('mouseleave', mouseLeaveCard);
    }
}

document.addEventListener('DOMContentLoaded', addEventListenersToCards, false);