import Shape from './Shape.js';

export default class Pencil extends Shape {
    #color

    constructor(x, y, radius,color) {
        super(x,y,radius)
        this.#color = color;
    }

    get color() { return this.#color}
    set color(color){ this.#color = color}


    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.lineWidth = this.radius;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}