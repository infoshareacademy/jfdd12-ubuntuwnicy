
const canvas = document.createElement('canvas');

body.append(canvas);

canvas.setAttribute('width', '800');
canvas.setAttribute('height', '800');

const ctx = canvas.getContext('2d');

function degresForCircle(deg) {
    return deg * Math.PI/180;
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min
}

let height = 10 * (Math.sqrt(3)/2);
let x = randomNumber(0, 800)
let y = randomNumber(0, 800)
//let c = a - randomNumber(0, 5)
//let d = a - randomNumber(0, 5)

function drawRect (x, y, width, height, color = 'blue') {
    ctx.fillStyle = color
    ctx.fillRect(x, y, width, height)
}


function drawTriangle (x, y, color = 'blue') {
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + 5, y + height)
    ctx.lineTo(x - 5, y + height)
    ctx.closePath()
    ctx.fillStyle = color
    ctx.fill()
}

drawTriangle(x, y)

function drawCircle (x, y, r, start, degresForCircle, color = 'blue') {
    ctx.beginPath();
    ctx.arc(x, y, r, start, degresForCircle(deg))
    ctx.fillStyle = color
    ctx.fill()
}
