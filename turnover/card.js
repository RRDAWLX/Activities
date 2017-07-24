class Card {
    constructor({order}) {
        this.createDom(order);
    }

    createDom(order) {
        let div = document.createElement('div');
        div.innerHTML = `<div class="card-container" data-order="${order}">
            <div class="card">
                <div class="card-front"></div>
                <div class="card-back"></div>
            </div>
        </div>`;
        this.dom = div.firstElementChild;
        this.card = this.dom.firstElementChild;
        this.cardFront = this.card.firstElementChild;
    }

    setPrize({image}) {
        this.cardFront.innerHTML = `<img src="${image}" />`;
    }

    resetPrize() {
        this.cardFront.innerHTML = '';
    }
}
