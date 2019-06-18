let isHardModeOn = false;
let highlightedCards = [];
let cardPairsArr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
let cardPairsArrHard = cardPairsArr.concat([
  9,
  9,
  10,
  10,
  12,
  12,
  13,
  13,
  14,
  14,
  15,
  15,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19
]);
let randomizedCards = randomizeCardsFunc(cardPairsArr);
let randomizedCardsHard = randomizeCardsFunc(cardPairsArrHard);
let timeoutLength = 3000;
let howManyPairsLeft = 8;
let cardsGlobal;

initializeGame(); // initializing game for the first time

cardsGlobal = document.querySelectorAll(".card");

const game = {
  cardsAreLoading: false
};

function randomizeCardsFunc(cards) {
  return cards.slice().sort(() => Math.random() - 0.5);
}

function randomizePairs() {
  randomizedCards = randomizeCardsFunc(cardPairsArr);
  randomizedCardsHard = randomizeCardsFunc(cardPairsArrHard);
}

function initializeGame() {
  let cards = document.querySelectorAll(".card");
  if (isHardModeOn) {
    isHardModeOn = false;
    let gridContainer = document.querySelector(".gridContainerHard");
    gridContainer.classList.remove("gridContainerHard");
    gridContainer.classList.add("gridContainer");
    cards.forEach(cardsElement => {
      cardsElement.remove();
    });
  }
  cards.forEach(cardsElement => {
    cardsElement.remove();
  });
  let gridContainer = document.querySelector(".gridContainer");

  // let divs = document.createElement("div");
  randomizePairs();
  for (let i = 0; i < 16; i++) {
    console.log(i);
    let divs = document.createElement("div");
    divs.classList.add("card");
    divs.classList.add(randomizedCards[i]);
    gridContainer.appendChild(divs);
  }
  cardsGlobal = document.querySelectorAll(".card");
  gameLogicAndEventListener();
}

function toggleHardMode() {
  cards = document.querySelectorAll(".card");

  isHardModeOn = true;
  let gridContainer = document.querySelector(".gridContainer");
  gridContainer.classList.remove("gridContainer");
  gridContainer.classList.add("gridContainerHard");
  cards.forEach(cardsElement => {
    cardsElement.remove();
  });

  randomizePairs();
  for (let i = 0; i < 36; i++) {
    console.log(i);
    divs = document.createElement("div");
    divs.classList.add("card");
    divs.classList.add(randomizedCardsHard[i]);
    gridContainer.appendChild(divs);
  }
  gameLogicAndEventListener();
}

function addRemoveCardsClass(
  addRemove = "add",
  cardsClass,
  cardsArr = highlightedCards
) {
  if (addRemove === "add") {
    cardsArr[0].classList.add(cardsClass);
    cardsArr[1].classList.add(cardsClass);
  } else {
    cardsArr[0].classList.remove(cardsClass);
    cardsArr[1].classList.remove(cardsClass);
  }
}

function gameLogicAndEventListener() {
  cardsGlobal = document.querySelectorAll(".card");
  cardsGlobal.forEach(card =>
    card.addEventListener("click", function(event) {
      if (game.cardsAreLoading) {
        return;
      }

      if (card.classList.contains("cardIsHighlighted")) {
        card.classList.toggle("cardIsHighlighted"); // checking if card is already highlighted
        highlightedCards.pop(card);
        console.log("toggling class to card is highlighted");
      } else {
        card.classList.toggle("cardIsHighlighted"); // highlighting a card and pushing to the arr
        console.log("toggling class to card is highlighted");

        highlightedCards.push(card);

        if (highlightedCards.length === 2) {
          if (highlightedCards[0].className === highlightedCards[1].className) {
            cardsAreMatching();
          } else {
            cardsArentMatching();
          }
          game.cardsAreLoading = true;
          setTimeout(() => (game.cardsAreLoading = false), timeoutLength);
        }
      }
    })
  );
}

function cardsAreMatching() {
  addRemoveCardsClass("add", "cardsAreMatching");

  highlightedCards = [];

  howManyPairsLeft--;

  timeoutLength = 500;

  if (howManyPairsLeft === 0) {
    cardsAreLoading = true;
    console.log("koniec gry");
  }
}

function cardsArentMatching() {
  addRemoveCardsClass("remove", "cardIsHighlighted");
  addRemoveCardsClass("add", "cardsArentMatching");

  let highlightedCardsForTimeout = []; // creating new array for setTimeout
  highlightedCardsForTimeout = highlightedCards;

  timeoutLength = 2000;

  setTimeout(
    () =>
      addRemoveCardsClass(
        "remove",
        "cardsArentMatching",
        highlightedCardsForTimeout
      ),
    timeoutLength
  );

  highlightedCards = [];
}
