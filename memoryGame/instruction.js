const button = document.querySelector('#menuButton')
const body = document.querySelector('body')
const instruction = document.querySelector('.backgroundDiv')
const buttonInstruction = document.querySelector('#buttonInstruction')
const selectDiffEasy = document.querySelector("#selectDifficultyEasy")
const selectDiffHard = document.querySelector("#selectDifficultyEasy")
const showDiff = document.querySelector(".difficultyShow")
const selectEasy = document.querySelector('#selectEasy')
const selectHard = document.querySelector('#selectHard')
const diffButton = document.querySelector('#diffButton')
const diffBackground = document.querySelector('#difficultyBackground')
const BackDiv = document.querySelector('#backDiv')

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
})

// Adds functionality to difficulty button - allow to display difficulty

selectDiffEasy.addEventListener("click", function(event){
    showDiff.classList.toggle("difficultyShow")
    console.log("toggling class")
    diffBackground.classList.toggle("backgroundDiv")
})

selectDiffHard.addEventListener("click", function(event){
    showDiff.classList.toggle("difficultyShow")
    console.log("toggling class")
    diffBackground.classList.toggle("backgroundDiv")
})

selectEasy.addEventListener("click", function(event){
    showDiff.classList.remove("difficultyShow");
    showDiff.classList.toggle("difficultyHide")
    showDiff.classList.remove("difficultyShow")
    diffBackground.classList.remove("backgroundDiv")
})

selectHard.addEventListener("click", function(event){
    showDiff.classList.remove("difficultyShow");
    showDiff.classList.toggle("difficultyHide")
    showDiff.classList.remove("difficultyShow")
    diffBackground.classList.remove("backgroundDiv")
})
