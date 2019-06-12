let cards = document.querySelectorAll('.card')
let highLightedCards = []
let cardPairsArr = [1,2,3,4,5,6,7,8]
let randomizedCards = randomizeCardsFunc([...cardPairsArr,...cardPairsArr])

function randomizeCardsFunc (cards){
    return cards.slice().sort(() => Math.random() - 0.5)
}

cards.forEach(card => card.addEventListener("click", function(){

    card.classList.toggle("cardIsHighlighted")
    console.log("toggling class to card is highlighted")


    highLightedCards.push(card)

    if (highLightedCards.length === 2){
        if (highLightedCards[0].className === highLightedCards[1].className){
            highLightedCards[0].classList.add('cardsAreMatching')
            highLightedCards[1].classList.add('cardsAreMatching')

        }
    }
}));

cards.forEach((cardsElement, index) => {

    cardsElement.classList.add(randomizedCards[index])
    console.log("adding card number class")
});

