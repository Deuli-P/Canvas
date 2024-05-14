import Pencil from './Class/Pencil.js';

// Canvas, palette de couleur, Celar et Radius

const canvas = document.getElementById("canvas-dessin");
const ctx = canvas.getContext("2d");


// lors du click sur un bouton de couleur, on change la couleur du crayon

let pos = {x: 0, y: 0};
let color = localStorage.getItem("color") || "black";
let radiusPencil = localStorage.getItem("radius") || 5;

const colorButton = document.querySelectorAll(".color-picker");
const radiusSlider= document.querySelector("#slider-radius")

function init(){

    canvas.width = window.innerWidth - 100;
    canvas.height = window.innerHeight - 300;
    radiusSlider.value = radiusPencil;

    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        console.log("mousedown:",isDrawing);
        Draw(e);
    });
    
    canvas.addEventListener('mousemove',(e)=> Draw(e));
    
    canvas.addEventListener('mouseup', (e) => {
        isDrawing = false;
        console.log("mouseup:",isDrawing);
    });
}





colorButton.forEach((button) => {
    button.addEventListener("click", (e) => {
        color = window.getComputedStyle(e.target).backgroundColor;
        localStorage.setItem("color", color);
        console.log("Nouvelle color selectionnée:",color);
    })

})


// lors du slide de la taille du radius du Pencil




radiusSlider.addEventListener("input", (e) => {
    radiusPencil = e.target.value;
    localStorage.setItem("radius", radiusPencil);
    console.log("Nouveau radius selectionné:", radiusPencil);
})
// lors de l'entrée dans le canvas dans une position le canvas, cela commence a dessiner avec le pencil c
 
const setPosition = (e) => {
    pos.x = e.offsetX;
    pos.y = e.offsetY;
}


// Clear Canvas 
function clearCanvas(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    console.log("Canvas cleared");
}

const Draw = (e)=> {
    setPosition(e);
    if (!isDrawing) return;
    const pencil = new Pencil(pos.x, pos.y, radiusPencil, color);
    pencil.draw(ctx);

}

let isDrawing = false;



const ClearButton = document.querySelector("#clear-canvas");

ClearButton.addEventListener("click",() =>clearCanvas())



init();
