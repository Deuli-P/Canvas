import Shape from './Shape.js';

export default class Ball extends Shape {
    #color

    constructor(x, y, radius) {
        super(x,y,radius)
        this.#color = "red";
    }

    



    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
    }
}