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
            card.classList.toggle("cardIsHighlighted")
            highlightedCards.pop(card)
            console.log("toggling class to card is highlighted")
        } else {

            card.classList.toggle("cardIsHighlighted")
            console.log("toggling class to card is highlighted")


            highlightedCards.push(card)

            if(highlightedCards.length === 2) {
                if (highlightedCards[0].className === highlightedCards[1].className) {

                    highlightedCards[0].classList.add('cardsAreMatching')
                    highlightedCards[1].classList.add('cardsAreMatching')
    
                    highlightedCards = []
    
                } else {
    
                    // event.stopPropagation();
    
                    highlightedCards[0].classList.remove('cardIsHighlighted')
                    highlightedCards[1].classList.remove('cardIsHighlighted')
    
                    highlightedCards[0].classList.add('cardsArentMatching')
                    highlightedCards[1].classList.add('cardsArentMatching')
    
                    let highlightedCardsForTimeout = []
                    highlightedCardsForTimeout = highlightedCards
    
    
    
                    setTimeout(function () {
                        highlightedCardsForTimeout[0].classList.remove('cardsArentMatching')
                        highlightedCardsForTimeout[1].classList.remove('cardsArentMatching')
                        // gameLogicAndEventListener()
                    }, 2000)
    
                    highlightedCards = []
                }

                game.cardsAreLoading = true;
                setTimeout(() => game.cardsAreLoading = false, 2000);
            }
        }
    }))
}
