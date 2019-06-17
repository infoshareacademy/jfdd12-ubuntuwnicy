let body = document.querySelector('body')
let button = document.querySelector('#menuButton')
let instruction = document.querySelector('.instruction')
let buttonInstruction = document.querySelector('#buttonInstruction')
let selectDiff = document.querySelector("#selectDifficulty")
let showDiff = document.querySelector(".difficultyHide")
let selectEasy = document.querySelector('#selectEasy')
let selectHard = document.querySelector('#selectHard')
let diffButton = document.querySelector('#diffButton')

// Adds functionality to instruction panel -> button to hide

button.addEventListener("click", function(event){
    instruction.classList.toggle("menuIsHidden");
    console.log("toggling class")
})

diffButton.addEventListener("click", function(event){
    showDiff.classList.remove("difficultyShow");
    console.log("toggling class")
    selectDiff.removeAttribute('disabled', 'disabled')
})


// Adds functionality to instruction button on game page -> button to display

buttonInstruction.addEventListener("click", function(event){
    instruction.classList.remove("menuIsHidden")
    console.log("toggling class")
})

// Adds functionality to difficulty button - allow to display difficulty

selectDiff.addEventListener("click", function(event){
    showDiff.classList.toggle("difficultyShow")
    console.log("toggling class")
    selectDiff.setAttribute('disabled', 'disabled')
})

selectEasy.addEventListener("click", function(event){
    showDiff.classList.remove("difficultyShow")
    console.log("toggling class")
    selectDiff.removeAttribute('disabled', 'disabled')
})

selectHard.addEventListener("click", function(event){
    showDiff.classList.remove("difficultyShow")
    console.log("toggling class")
    selectDiff.removeAttribute('disabled', 'disabled')
})


// newDiv = document.createElement("div");

// newDiv.innerHTML = `<h1>
//     Zasady gry: Gra memory polega na odnajdywaniu par takich samych kart. Gracz odsłania 2 karty. Jeśli są to takie same karty, zostaną one zdjęte z planszy, jeśli nie, karty będą odwrócone z powrotem (po ok. 2 sekundach). Celem gracza jest zdjęcie wszystkich kart przy możliwie najmniejszej liczbie odsłon i jak najkrótszym czasie, co będzie miało wpływ na wynik końcowy. W grze liczona jest ilość błędnych odsłon. Gra posiada dwa poziomy trudności:</h1>
//     `;
// newDiv.setAttribute('id', 'instruction')
// body.prepend(newDiv)



// console.log(newDiv)
