
const canvas = document.createElement('canvas');

body.append(canvas);

canvas.setAttribute('width', '800');
canvas.setAttribute('height', '800');

const ctx = canvas.getContext('2d');


let heightOfTriangle = 12 * (Math.sqrt(3)/2);
let x = randomNumber(0, 800)
let y = randomNumber(0, 800)
let rectX = randomNumber(0, 800)
let rectY = randomNumber(0, 800)
let circleX = randomNumber(0, 800)
let circleY = circleX
let widthOfRect = 10
let heightOfRect = 10
let r = 6
let start = 0


function randomNumber(min, max) {
    return Math.random() * (max - min) + min
}

function randomColor() {
    const red = randomNumber(0, 255)
    const green = randomNumber(0, 255)
    const blue = randomNumber(0, 255)

    return `rgb(${red}, ${green}, ${blue})`
}


function drawRect (rectX, rectY, widthOfRect, heightOfRect) {
    ctx.fillStyle = randomColor()
    ctx.fillRect(rectX, rectY, widthOfRect, heightOfRect)
}

drawRect(rectX, rectY, widthOfRect, heightOfRect)

function drawTriangle (x, y) {
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + 6, y + heightOfTriangle)
    ctx.lineTo(x - 6, y + heightOfTriangle)
    ctx.closePath()
    ctx.fillStyle = randomColor()
    ctx.fill()
}

drawTriangle(x, y)

function drawCircle (circleX, circleY, r, start) {
    ctx.beginPath();
    ctx.arc(circleX, circleY, r, start, 2 * Math.PI)
    ctx.fillStyle = randomColor()
    ctx.fill()
}

drawCircle(circleX, circleY, r, start)