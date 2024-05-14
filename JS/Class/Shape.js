export default class Shape {
    #x
    #y
    #radius

    constructor(x, y, radius){
        this.#x = x;
        this.#y = y;
        this.#radius = radius;
    }

    get x() { return this.#x}
    get y(){ return this.#y}
    get radius(){ return this.#radius}
    set x(x){ this.#x = x}
    set y(y){ this.#y = y}
    set radius(radius){ this.#radius = radius}

}