let cards = document.querySelectorAll('.card')
let highLightedCards = []
let cardPairsArr = [1,2,3,4,5,6,7,8]
let randomizedCards = randomizeCards(cardPairsArr)
randomizedCards = randomizedCards.concat(randomizeCards(cardPairsArr))

function randomizeCards (cards){
    return cards.slice().sort(() => Math.random() - 0.5)
}




cards.forEach(card => card.addEventListener("click", function(){

    card.classList.toggle("cardsAreMatching")
    console.log("toggling class")
}));

cards.forEach((cardsElement, index) => {

    cardsElement.classList.add(randomizedCards[index])
    console.log("toggling class")
});



