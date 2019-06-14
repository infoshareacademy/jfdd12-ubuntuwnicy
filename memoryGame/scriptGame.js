let cards = document.querySelectorAll('.card')
let highlightedCards = []
let cardPairsArr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
let cardPairsArrHard = cardPairsArr.concat( [9,9,10,10,12,12,13,13,14,14,15,15,16,16,17,17,18,18] )
let randomizedCards = randomizeCardsFunc(cardPairsArr)
let randomizedCardsHard = randomizeCardsFunc(cardPairsArrHard)
let timeoutLength = 3000
let howManyPairsLeft = 8
let isHardModeOn = false

function randomizeCardsFunc(cards) {
    return cards.slice().sort(() => Math.random() - 0.5)
}

cards.forEach((cardsElement, index) => { // adding 'card number' class

    cardsElement.classList.add(randomizedCards[index])

})

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

            card.classList.toggle("cardIsHighlighted") // highlighting a card and pushing to the arr
            console.log("toggling class to card is highlighted")

            highlightedCards.push(card)

            if(highlightedCards.length === 2) {
                if (highlightedCards[0].className === highlightedCards[1].className) {

                    cardsAreMatching()

                } else {
    
                    cardsArentMatching()

                }
                game.cardsAreLoading = true;
                setTimeout(() => game.cardsAreLoading = false, timeoutLength)
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

function cardsAreMatching(){

    addRemoveCardsClass('add', 'cardsAreMatching')
    
    highlightedCards = []
    
    howManyPairsLeft--

    timeoutLength = 500

    if(howManyPairsLeft === 0){
        cardsAreLoading = true
        console.log('koniec gry')
    }

}

function cardsArentMatching() {

    addRemoveCardsClass('remove', 'cardIsHighlighted')
    addRemoveCardsClass('add', 'cardsArentMatching')

    let highlightedCardsForTimeout = [] // creating new array for setTimeout
    highlightedCardsForTimeout = highlightedCards

    timeoutLength = 2000

    setTimeout(() => addRemoveCardsClass('remove', 'cardsArentMatching', highlightedCardsForTimeout), timeoutLength)

    highlightedCards = []

}

function toggleHardMode() {

    isHardModeOn = true

    let gridContainer = document.querySelector('.gridContainer')

    gridContainer.classList.remove('gridContainer')
    gridContainer.classList.add('gridContainerHard')

    let hardModeDivs = document.createElement('div')

    for (let i = 0; i < 20; i++) { 
    
    console.log(i)
    hardModeDivs = document.createElement('div')
    hardModeDivs.classList.add('card')
    gridContainer.appendChild(hardModeDivs)
    }

}