const button = document.querySelector('#menuButton')
const body = document.querySelector('body')
const instruction = document.querySelector('.backgroundDiv')
const buttonInstruction = document.querySelector('#buttonInstruction')
const selectDiffEasy = document.querySelector("#selectDifficultyEasy")
const selectDiffHard = document.querySelector("#selectDifficultyHard")
const showDiff = document.querySelector(".difficultyShow")
const selectEasy = document.querySelector('#selectEasy')
const selectHard = document.querySelector('#selectHard')
const diffButton = document.querySelector('#diffButton')
const diffBackground = document.querySelector('#difficultyBackground')
const BackDiv = document.querySelector('#backDiv')
const inGameTimer = document.getElementById("timer")
const inGameScore = document.getElementById("score")
let timer = 0;
let timerId = 0;
let score = 10000;
let scoreId = 0;

scoreId = inGameScore.innerHTML = "SCORE:0"
timerId = inGameTimer.innerHTML = "TIME:0"
timer = timer + 1;

// Adds functionality to instruction panel -> button to hide

button.addEventListener("click", function(event){
    instruction.classList.toggle("menuIsHidden");
    console.log("toggling class")
    BackDiv.classList.toggle("backgroundDiv")
    startGame()
})

// Adds functionality to instruction button on game page -> button to display instruction

buttonInstruction.addEventListener("click", function(event){
    instruction.classList.remove("menuIsHidden")
    console.log("toggling class")
    BackDiv.setAttribute("class", "backgroundDiv")
    button.classList.remove("menuButtonHidden")
    button.setAttribute("class", "menuButtonShown")
    pauseGame()
})

// Adds functionality to button "Poziom łatwy" on the main page

selectDiffEasy.addEventListener("click", function(event){
    resetGame()
    console.log("toggling class")
    button.classList.remove("menuButtonHidden")
    button.setAttribute("class", "menuButtonShown")
    startGame()
    initializeGame()
})

// Adds functionality to button "Poziom trudny" on the main page

selectDiffHard.addEventListener("click", function(event){
    resetGame()
    console.log("toggling class")
    button.classList.remove("menuButtonHidden")
    button.setAttribute("class", "menuButtonShown")
    startGame()
    toggleHardMode()
})

// Adds functionality to button "Łatwy" on the welcome window

selectEasy.addEventListener("click", function(event){
    showDiff.classList.toggle("difficultyHide")
    showDiff.classList.remove("difficultyShow")
    BackDiv.classList.remove("backgroundDiv")
    instruction.classList.toggle("menuIsHidden")
    initializeGame()
    startGame()
})

// Adds functionality to button "Trudny" on the welcome window

selectHard.addEventListener("click", function(event){
    showDiff.classList.toggle("difficultyHide")
    showDiff.classList.remove("difficultyShow")
    BackDiv.classList.remove("backgroundDiv")
    instruction.classList.toggle("menuIsHidden")
    toggleHardMode()
    startGame()
})

// Set's a timer while the game is run

function startGame(){
timerId = setInterval(function() {
    inGameTimer.innerHTML = `TIME:${timer}`;
    timer = timer + 1;
}, 1000);
scoreId = setInterval(function() {
    inGameScore.innerHTML = `SCORE:${score}`;
    score = score - 5;
}, 1000);
}


// Stops the game timer

function pauseGame(){
    clearInterval(timerId)
    clearInterval(scoreId)
}

// Resumes the game timer

function resetGame(){
    clearInterval(timerId);
    clearInterval(scoreId)
    timer = 0
    score = 10000
}


