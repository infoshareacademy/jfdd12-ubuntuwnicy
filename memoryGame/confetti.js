
const canvas = document.createElement('canvas');

body.append(canvas);

canvas.classList.add("hiddenCanvas");

const w = canvas.width = window.innerWidth;
const h = canvas.height = window.innerHeight * 2;

const ctx = canvas.getContext('2d');

let pieces = [];
let numberOfPieces = 400;
let lastUpdateTime = Date.now();
let heightOfTriangle = 12 * (Math.sqrt(3)/2);

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
    
    ctx.font = "60px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = 'middle';
    ctx.fillText("Congratulations!", h/2, w/2);

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

function Rect(x, y) {
    this.x = x;
    this.y = y;
    this.size = getRandomNumber(10, 15);
    this.gravity = getRandomNumber(0.5, 1) * 0.075;
    this.rotationSpeed = (Math.PI * 2) * Math.random() * 0.0005;
    this.rotation = (Math.PI * 2) * Math.random();
    this.color = getRandomColor();
}

while(pieces.length < numberOfPieces) {
    pieces.push(new Rect(Math.random() * w, Math.random() * w));
}

function confettiFalling() {
    let now = Date.now()
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
    confettiFalling();
    drawRect();
}




//function confettiFallinTriangle() {
//    let now = Date.now()
//        deltaTime = now - lastUpdateTime;
   
//    for(let i = pieces.length -1; i >= 0; i--) {
//        let pt = pieces[i];
//        if(pt.y > 800) {
//            pieces.splice(i, 1);
//            continue;
//        }
//        pt.y += pt.gravity * deltaTime;
//        pt.rotation += pt.rotationSpeed * deltaTime;
//    }

//    while(pieces.length < numberOfPieces) {
//        pieces.push(new Rect(Math.random() * 800, -20));
//    }

//    lastUpdateTime = now;

//    setTimeout(confettiFallinTriangle, 1);
//}

//function drawTriangle() {
//    ctx.clearRect(0, 0, 800, 800);

//    pieces.forEach(function (p) {
//        ctx.save();
//        ctx.fillStyle = p.color;
//        ctx.beginPath()
//        ctx.moveTo(p.x, p.y);
//        ctx.lineTo(p.x + 6, p.y + p.size);
//        ctx.lineTo(p.x - 6, p.y + p.size);
//        ctx.closePath()
//        ctx.translate((p.x + 6) - p.size / 2, p.y / 2);
//        ctx.rotate(p.rotation);
//        ctx.fill()
//        ctx.restore();
//    });
//    requestAnimationFrame(drawTriangle);
//}

//function Triangle(x, y) {
//    this.x = x;
//    this.y = y;
//    this.size = 12 * (Math.sqrt(3)/2);
//    this.gravity = getRandomNumber(0.75, 1) * 0.1;
//    this.rotationSpeed = (Math.PI * 2) * Math.random() * 0.0005;
//    this.rotation = (Math.PI * 2) * Math.random();
//    this.color = getRandomColor();
//}

//while(pieces.length < numberOfPieces) {
//    pieces.push(new Triangle(Math.random() * 800, Math.random() * 800));
//}

//function drawCircle ((xCircle, yCircle, r, start) {
//   ctx.beginPath();
//   ctx.arc(xCircle, yCircle, r, start, 2 * Math.PI)
//   ctx.fillStyle = getRandomColor()
//   ctx.fill()
