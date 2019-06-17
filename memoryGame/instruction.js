let body = document.querySelector('body')
let button = document.querySelector('#menuButton')
let instruction = document.querySelector('.backgroundDiv')
let buttonInstruction = document.querySelector('#buttonInstruction')
let selectDiff = document.querySelector("#selectDifficulty")
let showDiff = document.querySelector(".difficultyHide")
let selectEasy = document.querySelector('#selectEasy')
let selectHard = document.querySelector('#selectHard')
let diffButton = document.querySelector('#diffButton')
const diffBackground = document.querySelector('#difficultyBackground')
const BackDiv = document.querySelector('#backDiv')

// Adds functionality to instruction panel -> button to hide

button.addEventListener("click", function(event){
    instruction.classList.toggle("menuIsHidden");
    console.log("toggling class")
    BackDiv.classList.remove("backgroundDiv")
})

diffButton.addEventListener("click", function(event){
    showDiff.classList.remove("difficultyShow");
    console.log("toggling class")
    selectDiff.removeAttribute('disabled', 'disabled')
    diffBackground.classList.remove("backgroundDiv")
})


// Adds functionality to instruction button on game page -> button to display

buttonInstruction.addEventListener("click", function(event){
    instruction.classList.remove("menuIsHidden")
    console.log("toggling class")
    BackDiv.classList.toggle("backgroundDiv")
})

// Adds functionality to difficulty button - allow to display difficulty

selectDiff.addEventListener("click", function(event){
    showDiff.classList.toggle("difficultyShow")
    console.log("toggling class")
    diffBackground.classList.toggle("backgroundDiv")
    selectDiff.setAttribute('disabled', 'disabled')
})

selectEasy.addEventListener("click", function(event){
    showDiff.classList.remove("difficultyShow")
    console.log("toggling class")
    selectDiff.removeAttribute('disabled', 'disabled')
    diffBackground.classList.remove("backgroundDiv")
})

selectHard.addEventListener("click", function(event){
    showDiff.classList.remove("difficultyShow")
    console.log("toggling class")
    selectDiff.removeAttribute('disabled', 'disabled')
       diffBackground.classList.remove("backgroundDiv")
})
