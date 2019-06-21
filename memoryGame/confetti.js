
const canvas = document.createElement('canvas');

body.append(canvas);

canvas.setAttribute('width', '800');
canvas.setAttribute('height', '800');

const ctx = canvas.getContext('2d');


const heightOfTriangle = 12 * (Math.sqrt(3)/2);
const xRect = getRandomNumber(0, 800)
const yRect = getRandomNumber(0, 12)
const xTriangle = getRandomNumber(0, 800)
const yTriangle = getRandomNumber(0, 12)
const xCircle = getRandomNumber(0, 800)
const yCircle = getRandomNumber(0, 12)
const widthOfRect = 10  
const heightOfRect = 10
const r = 6
const start = 0


function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min
}

function getRandomColor() {
    const red = getRandomNumber(0, 255)
    const green = getRandomNumber(0, 255)
    const blue = getRandomNumber(0, 255)

    return `rgb(${red}, ${green}, ${blue})`
}


function drawRect (xRect, yRect, widthOfRect, heightOfRect) {
    ctx.fillStyle = getRandomColor()
    ctx.fillRect(xRect, yRect, widthOfRect, heightOfRect)
}

function drawTriangle (xTriangle, yTriangle) {
    ctx.beginPath()
    ctx.moveTo(xTriangle, yTriangle)
    ctx.lineTo(xTriangle + 6, yTriangle + heightOfTriangle)
    ctx.lineTo(xTriangle - 6, yTriangle + heightOfTriangle)
    ctx.closePath()
    ctx.fillStyle = getRandomColor()
    ctx.fill()
}

function drawCircle (xCircle, yCircle, r, start) {
    ctx.beginPath();
    ctx.arc(xCircle, yCircle, r, start, 2 * Math.PI)
    ctx.fillStyle = getRandomColor()
    ctx.fill()
}

function confettiExplode () {
    drawRect(xRect, yRect, widthOfRect, heightOfRect)
    drawTriangle(xTriangle, yTriangle)
    drawCircle(xCircle, yCircle, r, start)
}

confettiExplode()
confettiExplode()
confettiExplode()
confettiExplode()
confettiExplode()

