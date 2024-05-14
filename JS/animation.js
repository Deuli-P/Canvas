import Ball from './Class/Ball.js'


// Canvas, dimension, pos, clear, draw

const canvas = document.getElementById("canvas-animation");
const ctx = canvas.getContext("2d");

let ball

// dimension du canvas
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;





let posIntial = {x:canvasWidth/2, y:canvasHeight/2};

let newPos = {x: posIntial.x, y: posIntial.y};

let lastPos = {x: posIntial.x, y: posIntial.y};

const rayon = 15;

let speed = 2;

// creation de la balle
const createBall = ()=> {
    ball = new Ball(posIntial.x, posIntial.y,rayon*2);
    ball.draw(ctx);
}

// Si la position de la balle + radius/ 2 arrive a la limite du canvas alors il repart dans l'autre sens

const limitCanvas = (ball) => {
    if(ball.x + ball.radius > canvasWidth || ball.x - ball.radius < 0){
        newPos.x = lastPos.x;
    }
    if(ball.y + ball.radius > canvasHeight || ball.y - ball.radius < 0){
        newPos.y = lastPos.y;
    }
}



function animate() {
    // Effacer le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Mettre à jour la position de la balle
    newFrame(ball);

    // Dessiner la balle à sa nouvelle position
    ball.draw();

    // Demander une nouvelle image
    requestAnimationFrame(animate);
}

// Lancer l'animation
animate();


// new position pour la balle


function init(){
    createBall();
}

init()





