let body = document.querySelector('body')
let button = document.querySelector('#menuButton')
let instruction = document.querySelector('.instruction')

button.addEventListener("click", function(event){
    instruction.classList.toggle("menuIsHidden")
    console.log("toggling class")
})


// newDiv = document.createElement("div");

// newDiv.innerHTML = `<h1>
//     Zasady gry: Gra memory polega na odnajdywaniu par takich samych kart. Gracz odsłania 2 karty. Jeśli są to takie same karty, zostaną one zdjęte z planszy, jeśli nie, karty będą odwrócone z powrotem (po ok. 2 sekundach). Celem gracza jest zdjęcie wszystkich kart przy możliwie najmniejszej liczbie odsłon i jak najkrótszym czasie, co będzie miało wpływ na wynik końcowy. W grze liczona jest ilość błędnych odsłon. Gra posiada dwa poziomy trudności:</h1>
//     `;
// newDiv.setAttribute('id', 'instruction')
// body.prepend(newDiv)



// console.log(newDiv)
