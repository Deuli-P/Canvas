import Ball from './Class/Ball.js'

// Canvas, dimension, pos, clear, draw

const canvas = document.getElementById("canvas-animation");
const ctx = canvas.getContext("2d");


// dimension du canvas
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;



let pos = {x:canvasWidth/2, y:canvasHeight/2};
let lastPos = {x:0, y:0};
const rayon = 15;
let ball
const speed = 2;

// creation de la balle
const createBall = ()=> {
    ball = new Ball(pos.x, pos.y,rayon*2, speed, speed);
    ball.draw(ctx);
}


// Nouvelle position de la balle


function newFrame(ball) {
    // Sauvegarder l'ancienne position
    lastPos.x = ball.x;
    lastPos.y = ball.y;

    // Mettre à jour la position de la balle
    ball.x += speed;
    ball.y += speed;

    // Vérifier les collisions avec les bords du canvas
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        if (lastPos.x !== ball.x) {
            ball.dx *= -1; // Inverser la direction de la balle sur l'axe x
        }
    }
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        if (lastPos.y !== ball.y) {
            ball.dy *= -1; // Inverser la direction de la balle sur l'axe y
        }
    }
}

function animate() {
    // Effacer le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Mettre à jour la position de la balle
    newFrame(ball);
    // Dessiner la balle à sa nouvelle position
    createBall();
    requestAnimationFrame(animate);
    // Demander une nouvelle image
}

// new position pour la balle

function init(){
    createBall();
    animate()
}

init()






