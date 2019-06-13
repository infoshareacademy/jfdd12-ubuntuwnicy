let cards = document.querySelectorAll('.card')
let highlightedCards = []
let cardPairsArr = [1, 2, 3, 4, 5, 6, 7, 8]
let randomizedCards = randomizeCardsFunc([...cardPairsArr, ...cardPairsArr])

function randomizeCardsFunc(cards) {
    return cards.slice().sort(() => Math.random() - 0.5)
}

cards.forEach((cardsElement, index) => {

    cardsElement.classList.add(randomizedCards[index])
    console.log("adding card number class")
});

const game = {
    cardsAreLoading: false
};

gameLogicAndEventListener()

function gameLogicAndEventListener() {
    cards.forEach(card => card.addEventListener("click", function (event) {
        if (game.cardsAreLoading) {
            return;
        }

        if (card.classList.contains('cardIsHighlighted')) {
            card.classList.toggle("cardIsHighlighted") // checking if card is already highlighted
            highlightedCards.pop(card)
            console.log("toggling class to card is highlighted")
        } else {

            card.classList.toggle("cardIsHighlighted") // highlighting a card
            console.log("toggling class to card is highlighted")

            highlightedCards.push(card)

            if(highlightedCards.length === 2) {
                if (highlightedCards[0].className === highlightedCards[1].className) {

                    addRemoveCardsClass('add', 'cardsAreMatching')
    
                    highlightedCards = []
    
                } else {
    
                    addRemoveCardsClass('remove', 'cardIsHighlighted')
                    addRemoveCardsClass('add', 'cardsArentMatching')
    
                    let highlightedCardsForTimeout = []
                    highlightedCardsForTimeout = highlightedCards
       
                    setTimeout(function () {
                        addRemoveCardsClass('remove', 'cardsArentMatching', highlightedCardsForTimeout)
                    }, 2000)
    
                    highlightedCards = []
                }
                game.cardsAreLoading = true;
                setTimeout(() => game.cardsAreLoading = false, 2000);
            }
        }
    }))
}


function addRemoveCardsClass(addRemove = 'add', cardsClass, cardsArr = highlightedCards){

    if (addRemove === 'add'){
        cardsArr[0].classList.add(cardsClass)
        cardsArr[1].classList.add(cardsClass)
    }else{
        cardsArr[0].classList.remove(cardsClass)
        cardsArr[1].classList.remove(cardsClass)
    }

}