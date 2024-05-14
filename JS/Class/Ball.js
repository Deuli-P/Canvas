import Shape from './Shape.js';

export default class Ball extends Shape {
    #color
    #dx
    #dy

    constructor(x, y, radius, dx, dy) {
        super(x,y,radius)
        this.#color = "red";
        this.#dx = dx
        this.#dy = dy
    }

    get dx() { return this.#dx}
    set dx(dx) { this.#dx = dx}
    get dy() { return this.#dy}
    set dy(dy) { this.#dy = dy}


    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
    }
}