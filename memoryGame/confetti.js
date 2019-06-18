
const canvas = document.createElement('canvas');

body.append(canvas);

canvas.setAttribute('width', '800');
canvas.setAttribute('height', '800');

const ctx = canvas.getContext('2d');

function degresForCircle(deg) {
    return deg * Math.PI/180;
}

function drawRect (x, y, width, height, color = 'blue') {
    ctx.fillStyle = color
    ctx.fillRect(x, y, width, height)
}

function drawTriangle (x, y, color = 'blue') {
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x, y)
    ctx.lineTo(x, y)
    ctx.closePath()
    ctx.fillStyle = color
    ctx.fill()
}

function drawCircle (x, y, r, start, degresForCircle, color = 'blue') {
    ctx.beginPath();
    ctx.arc(x, y, r, start, degresForCircle(deg))
    ctx.fillStyle = color
    ctx.fill()
}
