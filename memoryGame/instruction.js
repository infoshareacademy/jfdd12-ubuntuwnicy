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
let timer = 0;
let timerId = 0;

// Adds functionality to instruction panel -> button to hide

button.addEventListener("click", function(event){
    instruction.classList.toggle("menuIsHidden");
    console.log("toggling class")
    BackDiv.classList.toggle("backgroundDiv")
    startGame()
})

// Adds functionality to instruction button on game page -> button to display

buttonInstruction.addEventListener("click", function(event){
    instruction.classList.remove("menuIsHidden")
    console.log("toggling class")
    BackDiv.setAttribute("class", "backgroundDiv")
    button.classList.remove("menuButtonHidden")
    button.setAttribute("class", "menuButtonShown")
    pauseGame()
})

// Adds functionality to difficulty button - allow to display difficulty

selectDiffEasy.addEventListener("click", function(event){
    console.log("toggling class")
    button.classList.remove("menuButtonHidden")
    button.setAttribute("class", "menuButtonShown")
    initializeGame()
    pauseGame()
    resetGame()
    startGame()
})

selectDiffHard.addEventListener("click", function(event){
    console.log("toggling class")
    button.classList.remove("menuButtonHidden")
    button.setAttribute("class", "menuButtonShown")
    toggleHardMode()
    pauseGame()
    resetGame()
    startGame()
})

selectEasy.addEventListener("click", function(event){
    showDiff.classList.toggle("difficultyHide")
    showDiff.classList.remove("difficultyShow")
    BackDiv.classList.remove("backgroundDiv")
    instruction.classList.toggle("menuIsHidden")
    initializeGame()
    startGame()
})

selectHard.addEventListener("click", function(event){
    showDiff.classList.toggle("difficultyHide")
    showDiff.classList.remove("difficultyShow")
    BackDiv.classList.remove("backgroundDiv")
    instruction.classList.toggle("menuIsHidden")
    toggleHardMode()
    startGame()
})

function startGame(){
timerId = document.getElementById("timer").innerHTML = `<span class='label'>${timer}</span>`
timerId = setInterval(function() {
    console.log('timer', timer);
    document.getElementById("timer").innerHTML = `<span class='label'>${timer}</span>`;
    timer = timer + 1;
}, 1000);
}


function pauseGame(){
    clearInterval(timerId)
}

function resetGame(){
    timer = 0
    document.getElementById("timer").innerHTML = `<span class='label'>${timer}</span>`;
}

