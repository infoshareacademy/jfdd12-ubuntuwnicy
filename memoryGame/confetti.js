
const canvas = document.createElement('canvas');

body.append(canvas);

canvas.setAttribute('width', '800');
canvas.setAttribute('height', '800');

const ctx = canvas.getContext('2d');


const heightOfTriangle = 12 * (Math.sqrt(3)/2);
const x = 400
const y = 790
const widthOfRect = 10
const heightOfRect = 10
const r = 6
const start = 0


function randomNumber(min, max) {
    return Math.random() * (max - min) + min
}

function randomColor() {
    const red = randomNumber(0, 255)
    const green = randomNumber(0, 255)
    const blue = randomNumber(0, 255)

    return `rgb(${red}, ${green}, ${blue})`
}


function drawRect (x, y, widthOfRect, heightOfRect) {
    ctx.fillStyle = randomColor()
    ctx.fillRect(x, y, widthOfRect, heightOfRect)
}

function drawTriangle (x, y) {
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + 6, y + heightOfTriangle)
    ctx.lineTo(x - 6, y + heightOfTriangle)
    ctx.closePath()
    ctx.fillStyle = randomColor()
    ctx.fill()
}

function drawCircle (x, y, r, start) {
    ctx.beginPath();
    ctx.arc(x, y, r, start, 2 * Math.PI)
    ctx.fillStyle = randomColor()
    ctx.fill()
}

function confettiExplode () {
    drawRect(x, y, widthOfRect, heightOfRect)
    drawTriangle(x, y)
    drawCircle(x, y, r, start)
}

confettiExplode()