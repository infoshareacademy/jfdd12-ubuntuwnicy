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
let time = 0;

// Adds functionality to instruction panel -> button to hide

button.addEventListener("click", function(event){
    instruction.classList.toggle("menuIsHidden");
    console.log("toggling class")
    BackDiv.classList.toggle("backgroundDiv")
})

// Adds functionality to instruction button on game page -> button to display

buttonInstruction.addEventListener("click", function(event){
    instruction.classList.remove("menuIsHidden")
    console.log("toggling class")
    BackDiv.setAttribute("class", "backgroundDiv")
    button.classList.remove("menuButtonHidden")
    button.setAttribute("class", "menuButtonShown")
})

// Adds functionality to difficulty button - allow to display difficulty

selectDiffEasy.addEventListener("click", function(event){
    console.log("toggling class")
    button.classList.remove("menuButtonHidden")
    button.setAttribute("class", "menuButtonShown")
    initializeGame()
})

selectDiffHard.addEventListener("click", function(event){
    console.log("toggling class")
    button.classList.remove("menuButtonHidden")
    button.setAttribute("class", "menuButtonShown")
    toggleHardMode()
})

selectEasy.addEventListener("click", function(event){
    showDiff.classList.toggle("difficultyHide")
    showDiff.classList.remove("difficultyShow")
    BackDiv.classList.remove("backgroundDiv")
    instruction.classList.toggle("menuIsHidden")
    initializeGame()
})

selectHard.addEventListener("click", function(event){
    showDiff.classList.toggle("difficultyHide")
    showDiff.classList.remove("difficultyShow")
    BackDiv.classList.remove("backgroundDiv")
    instruction.classList.toggle("menuIsHidden")
    toggleHardMode()
})

var endDate = new Date("July 15, 2019 12:00:00").getTime();

var timer = setInterval(function() {
    timer = timer + 1;
    document.getElementById("timer").innerHTML = `<span class='label'>${timer}</span>`;
}, 1000);