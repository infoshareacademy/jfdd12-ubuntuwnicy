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
const finalScore = document.querySelector("#finalScore")
const putScoreHide = document.querySelector(".putScoreHide")
const scoreButton = document.querySelector('#scoreButton')
const putLogin = document.querySelector("#putLogin")
const topThree = document.querySelector('#topThree')
const showTop = document.getElementById('showTop')
const showScoreButton = document.querySelector('#showScoreButton')
const scoreWindowShow = document.querySelector("#scoreWindowShow")
const highScoresListHard = document.querySelector("#highScoresListHard");
const highScoresListEasy = document.querySelector("#highScoresListEasy");
const highScoresHard = JSON.parse(localStorage.getItem("highScoresHard")) || [];
const highScoresEasy = JSON.parse(localStorage.getItem("highScoresEasy")) || [];
const MAX_HIGH_SCORES = 3;
let timer = 0;
let timerId;
let score = 10000;
let scoreId;
let congrats = document.querySelector('.congratsConfetti');


// Adds functionality to instruction panel -> button to hide

button.addEventListener("click", function (event) {
    instruction.classList.toggle("menuIsHidden");
    console.log("toggling class")
    BackDiv.classList.toggle("backgroundDiv")
    if (howManyPairsLeft !== 0){
    startTimerAfterPause()
    startScoreAfterPause()}
})

// Adds functionality to instruction button on game page -> button to display instruction

buttonInstruction.addEventListener("click", function (event) {
    instruction.classList.remove("menuIsHidden")
    console.log("toggling class")
    BackDiv.setAttribute("class", "backgroundDiv")
    button.classList.remove("menuButtonHidden")
    button.setAttribute("class", "menuButtonShown")
    pauseGame()    
})

// Adds functionality to button "Poziom łatwy" on the main page

selectDiffEasy.addEventListener("click", function(event){
    button.classList.remove("menuButtonHidden")
    button.setAttribute("class", "menuButtonShown")
    resetGame()
    pauseGame()
    startTimer()
    startScore()
    initializeGame()
    canvas.classList.add("hiddenCanvas");
    congrats.setAttribute('class', 'congratsConfetti');
})

// Adds functionality to button "Poziom trudny" on the main page

selectDiffHard.addEventListener("click", function (event) {
    console.log("toggling class")
    button.classList.remove("menuButtonHidden")
    button.setAttribute("class", "menuButtonShown")
    resetGame()
    pauseGame()
    startTimer()
    startScore()
    toggleHardMode()
    canvas.classList.add("hiddenCanvas");
    congrats.setAttribute('class', 'congratsConfetti');
})

// Adds functionality to button "Łatwy" on the welcome window

selectEasy.addEventListener("click", function (event) {
    showDiff.classList.toggle("difficultyHide")
    showDiff.classList.remove("difficultyShow")
    BackDiv.classList.remove("backgroundDiv")
    instruction.classList.toggle("menuIsHidden")
    initializeGame()
    startTimer()
    startScore()
    
})

// Adds functionality to button "Trudny" on the welcome window

selectHard.addEventListener("click", function (event) {
    showDiff.classList.toggle("difficultyHide")
    showDiff.classList.remove("difficultyShow")
    BackDiv.classList.remove("backgroundDiv")
    instruction.classList.toggle("menuIsHidden")
    toggleHardMode()
    startTimer()
    startScore()
})

// Set's a timer while the game is run

function startTimer() {
    timerId = inGameTimer.innerHTML = `CZAS:0`
    timer = timer + 1;
    timerId = setInterval(function () {
        inGameTimer.innerHTML = `CZAS:${timer}`;
        timer = timer + 1;
    }, 1000);
    return timerId
}

// Set's a score while the game is run

function startScore() {
    scoreId = inGameScore.innerHTML = `WYNIK:10000`
    score = score - 5;
    scoreId = setInterval(function () {
        inGameScore.innerHTML = `WYNIK:${score}`
        score = score - 5;
    }, 1000);
    return scoreId
}

// Resumes the timer after leaving instruction panel

function startTimerAfterPause() {
    this.timer = timer;
    timerId = setInterval(function () {
        inGameTimer.innerHTML = `CZAS:${timer}`;
        timer = timer + 1;
    }, 1000);
}

// Resumes the score after leaving instruction panel

function startScoreAfterPause(){
this.score = score;
scoreId = setInterval(function() {
    inGameScore.innerHTML = `WYNIK:${score}`;
    score = score - 5;
}, 1000);
}

// Stops the game timer

function pauseGame() {
    clearInterval(timerId)
    clearInterval(scoreId)
}

// Resumes the game timer

function resetGame() {
    clearInterval(timerId);
    clearInterval(scoreId)
    timer = 0
    score = 10000
}

scoreButton.addEventListener("click", function(event){
    putScoreHide.setAttribute("class", "putScoreHide");
    putScoreHide.classList.remove("putScoreShow")
    buttonInstruction.disabled = false
    selectDifficultyEasy.disabled = false
    selectDifficultyHard.disabled = false
    showScoreButton.disabled = false
    if (howManyPairsLeft !== 0){
        startTimerAfterPause()
        startScoreAfterPause()
    }
})

// ADD FINAL SCORE TO ARRAY OF SCORES

putLogin.addEventListener("keyup", () => {
    showTop.disabled = !putLogin.value;
});

SaveHighScore = e => {
if(checkDifficultyHard() === 36 || checkDifficulty() === 0){
    e.preventDefault();

if (putLogin.value !== ''){

let finalscore = {
    login: putLogin.value,
    score: score
}

highScoresHard.push(finalscore)
highScoresHard.sort( (a, b) => b.score - a.score)
highScoresHard.splice(3);

localStorage.setItem('highScoresHard', JSON.stringify(highScoresHard));

// DISPLAY SCORES ON THE SCREEN

setTimeout(function() {
    highScoresListHard.innerHTML = highScoresHard.map(finalscore => {
        return `<li class="high-score">${finalscore.login}-${finalscore.score+5}</li>`
    }).join('');
}, 0)

putLogin.value = ''
showTop.disabled = true
putLogin.disabled = true} else
{ return alert("Proszę podaj swój nick")}}
else
{    e.preventDefault();

    if (putLogin.value !== ''){
    
    let finalscore = {
        login: putLogin.value,
        score: score
    }
    
    highScoresEasy.push(finalscore)
    highScoresEasy.sort( (a, b) => b.score - a.score)
    highScoresEasy.splice(3);
    
    localStorage.setItem('highScoresEasy', JSON.stringify(highScoresEasy));
    
    // DISPLAY SCORES ON THE SCREEN

    setTimeout(function() {
        highScoresListEasy.innerHTML = highScoresEasy.map(finalscore => {
            return `<li class="high-score">${finalscore.login}-${finalscore.score+5}</li>`
        }).join('');
    }, 0)
    
    putLogin.value = ''
    showTop.disabled = true
    putLogin.disabled = true} else
    { return alert("Proszę podaj swój nick")}}
}

function checkDifficulty(){ return document.querySelectorAll('.gridContainer .card').length } // 16
function checkDifficultyHard(){console.log(document.querySelectorAll('.gridContainerHard .card').length)} // 36

function addScoreButtonProperty(){
showScoreButton.addEventListener("click", function(event){
    if(checkDifficultyHard() === 36 || checkDifficulty() === 0){
    putScoreHide.setAttribute("class", "putScoreShow");
    putScoreHide.classList.remove("putScoreHide")
    scoreWindowShow.setAttribute("class", "scoreWindowHide")
    
    pauseGame() 
    highScoresListHard.innerHTML = highScoresHard.map(finalscore => {
        return `<li class="high-score">${finalscore.login}-${finalscore.score+5}</li>`
    }).join('')
    } else 
    {
        putScoreHide.setAttribute("class", "putScoreShow");
        putScoreHide.classList.remove("putScoreHide")
        scoreWindowShow.setAttribute("class", "scoreWindowHide")
        pauseGame() 
        highScoresListEasy.innerHTML = highScoresEasy.map(finalscore => {
            return `<li class="high-score">${finalscore.login}-${finalscore.score+5}</li>`
        }).join('')
        }
    })}

    highScoresListHard.innerHTML = highScoresHard.map(finalscore => {
        return `<li class="high-score">${finalscore.login}-${finalscore.score+5}</li>`
    }).join('')

    highScoresListEasy.innerHTML = highScoresEasy.map(finalscore => {
        return `<li class="high-score">${finalscore.login}-${finalscore.score+5}</li>`
    }).join('')


showScoreButton.addEventListener("click", function(event){
    if(checkDifficultyHard() === 36 || checkDifficulty() === 0){
    putScoreHide.setAttribute("class", "putScoreShow");
    putScoreHide.classList.remove("putScoreHide")
    scoreWindowShow.setAttribute("class", "scoreWindowHide")
    pauseGame() 
    } else 
    {
        putScoreHide.setAttribute("class", "putScoreShow");
        putScoreHide.classList.remove("putScoreHide")
        scoreWindowShow.setAttribute("class", "scoreWindowHide")
        pauseGame() 
        highScoresListEasy.innerHTML = highScoresEasy.map(finalscore => {
            return `<li class="high-score">${finalscore.login}-${finalscore.score+5}</li>`
        }).join('')
        }
    })