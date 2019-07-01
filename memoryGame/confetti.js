
const canvas = document.createElement('canvas');

function confettiAll() {



body.append(canvas);

canvas.classList.add("hiddenCanvas");

const w = canvas.width = window.innerWidth;
const h = canvas.height = window.innerHeight * 2;

const ctx = canvas.getContext('2d');

let congratulations = document.querySelector('.congratsConfetti');


function getCongratsTitle() {
    congratulations.setAttribute('class', 'showCongratsConfetti');
}

let pieces = [];
let numberOfPieces = 1000;
let lastUpdateTime = Date.now();

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomColor() {
    const red = getRandomNumber(0, 255);
    const green = getRandomNumber(0, 255);
    const blue = getRandomNumber(0, 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

function drawRect() {
    ctx.clearRect(0, 0, w, h);

    pieces.forEach(function (p) {
        ctx.save();
        ctx.fillStyle = p.color;
        ctx.translate(p.x - p.size / 2, p.y - p.size / 2);
        ctx.rotate(p.rotation);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
    });
    requestAnimationFrame(drawRect);
}

function Rect() {
    this.x = getRandomNumber(0, w);
    this.y = -1 * getRandomNumber(0, h);
    this.size = getRandomNumber(10, 15);
    this.gravity = getRandomNumber(0.5, 1) * 0.075;
    this.rotationSpeed = (Math.PI * 2) * Math.random() * 0.0005;
    this.rotation = (Math.PI * 2) * Math.random();
    this.color = getRandomColor();
}

while(pieces.length < numberOfPieces) {
    pieces.push(new Rect(Math.random() * w, Math.random() * h));
}

function confettiFalling() {
    let now = Date.now();
        deltaTime = now - lastUpdateTime;
    
    for(let i = pieces.length -1; i >= 0; i--) {
        let p = pieces[i];
        if(p.y > h) {
            pieces.splice(i, 1);
            continue;
        }
        p.y += p.gravity * deltaTime;
        p.rotation += p.rotationSpeed * deltaTime;
    }

    while(pieces.length < numberOfPieces) {
        pieces.push(new Rect(Math.random() * h, -20));
    }

    lastUpdateTime = now;

    setTimeout(confettiFalling, 1);
}    

function confettiExplode() {
    drawRect();
    confettiFalling();
}
confettiExplode();
getCongratsTitle();
}


