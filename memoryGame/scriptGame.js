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
let randomizedCards
let randomizedCardsHard
let randomizedCardsGlobal
let timeoutLength = 1000;
let howManyPairsLeft = 8;
let cardsGlobal;
let gridContainerElements = []
let gridContainer = document.querySelector(".gridContainer")

randomizePairs()

initializeGame(); // initializing game for the first time

cardsGlobal = document.querySelectorAll(".card");

const game = {
  cardsAreLoading: false
};

function randomizePairs() {
  randomizedCards = randomizeCardsFunc(cardPairsArr);
  randomizedCardsHard = randomizeCardsFunc(cardPairsArrHard);
  function randomizeCardsFunc(cards) {
    return cards.slice().sort(() => Math.random() - 0.5);
  }
}

function initializeGame() {

  randomizedCardsGlobal = randomizedCards

  howManyPairsLeft = 8

  highlightedCards = []

  let cards = document.querySelectorAll(".card");
  if (isHardModeOn) {
    isHardModeOn = false;
    gridContainer = document.querySelector(".gridContainerHard");
    gridContainer.classList.remove("gridContainerHard");
    gridContainer.classList.add("gridContainer");
  };

  cards.forEach(cardsElement => {
    cardsElement.remove();
  });

  gridContainer = document.querySelector(".gridContainer");

  randomizePairs();
  for (let i = 0; i < 16; i++) {
    console.log(i);
    let divs = document.createElement("div");
    divs.classList.add("card");
    gridContainer.appendChild(divs);
  }
  cardsGlobal = document.querySelectorAll(".card");
  gameLogicAndEventListener();
}

function toggleHardMode() {

  highlightedCards = []

  howManyPairsLeft = 18

  cards = document.querySelectorAll(".card");

  if (!isHardModeOn) {

    isHardModeOn = true;
    gridContainer = document.querySelector(".gridContainer");
    gridContainer.classList.remove("gridContainer");
    gridContainer.classList.add("gridContainerHard");

  }


  cards.forEach(cardsElement => {
    cardsElement.remove();
  });

  randomizePairs();
  for (let i = 0; i < 36; i++) {
    console.log(i);
    divs = document.createElement("div");
    divs.classList.add("card");
    gridContainer.appendChild(divs);
  }
  randomizedCardsGlobal = randomizedCardsHard
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
    card.addEventListener("click", function (event) {
      if (game.cardsAreLoading) {
        return;
      }

      if (card.classList.contains("cardIsHighlighted")) {
        console.log('cards already highlighted')
        return
      } else {
        card.classList.toggle("cardIsHighlighted"); // highlighting a card and pushing to the arr
        console.log("toggling class to card is highlighted");

        gridContainerElements = Array.from(gridContainer.children)

        let cardValue = randomizedCardsGlobal[gridContainerElements.indexOf(card)]

        card.innerHTML = `<img src='cardsIcons/${cardValue}.svg'><img>`

        highlightedCards.push(card);

        if (highlightedCards.length === 2) {

          let indexOfHighligted0 = gridContainerElements.indexOf(highlightedCards[0])

          let indexOfHighligted1 = gridContainerElements.indexOf(highlightedCards[1])


          if (randomizedCardsGlobal[indexOfHighligted0] === randomizedCardsGlobal[indexOfHighligted1]) {
            cardsAreMatching();
          } else {

            setTimeout(cardsArentMatching, 700)


          }

          timeoutLength = 1900

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

  isGameFinished()

}

function cardsArentMatching() {

  addRemoveCardsClass("remove", "cardIsHighlighted");
  addRemoveCardsClass("add", "cardsArentMatching");

  timeoutLength = 1000;

  setTimeout(
    () => {
      addRemoveCardsClass(
        "remove",
        "cardsArentMatching",
        highlightedCards
      ),
        highlightedCards[0].innerHTML = ``
      highlightedCards[1].innerHTML = ``
      highlightedCards = [];
    },
    timeoutLength
  );
}


function isGameFinished() {

  if (howManyPairsLeft === 0) {

    console.log("koniec gry")
    pauseGame()
    localStorage.setItem("mostRecentScore", score)
    showTop.disabled = false
    putLogin.disabled = false
    buttonInstruction.disabled = true
    selectDifficultyEasy.disabled = true
    selectDifficultyHard.disabled = true
    showScoreButton.disabled = true
    addScoreButtonProperty()
    setTimeout(function() {
      let mostRecentScore = localStorage.getItem("mostRecentScore", score)
      putScoreHide.setAttribute("class","putScoreShow")
      putScoreHide.classList.remove("putScoreHide")
      finalScore.innerText = `Twój wynik to: ${Number(mostRecentScore)+5}`
      scoreWindowShow.setAttribute("class", "scoreWindowShow")
  }, 1 * 1000)
  confettiAll();
  canvas.classList.remove("hiddenCanvas");
  
  }
}

function finishGame() { //debug tool for finishing the game from console
  howManyPairsLeft = 0
  cardsAreLoading = true;
  console.log("koniec gry");
  pauseGame()
  localStorage.setItem("mostRecentScore", score)
  isGameFinished()
  showTop.disabled = false
  putLogin.disabled = false
  buttonInstruction.disabled = true
  selectDifficultyEasy.disabled = true
  selectDifficultyHard.disabled = true
  showScoreButton.disabled = true
  addScoreButtonProperty()
  setTimeout(function() {
    let mostRecentScore = localStorage.getItem("mostRecentScore", score)
    putScoreHide.setAttribute("class", "putScoreShow")
    putScoreHide.classList.remove("putScoreHide")
    finalScore.innerText = `Twój wynik to: ${Number(mostRecentScore)+5}`
    scoreWindowShow.setAttribute("class", "scoreWindowShow")
}, 1 * 1000)
}
