import {globalConstants as global} from "./constants.js";

class Obstacle {
    constructor() {
        this.x = global.CANVAS_WIDTH;
        this.GAP = 220;
        this.WIDTH = 70;
        this.VELOCITY = -5;
        this.GAP_HEIGHT = (Math.random() * (global.CANVAS_HEIGHT - 1.5 * this.GAP)) + this.GAP/2;
    }

    draw(ctx) {
        ctx.fillRect(this.x, 0, this.WIDTH, this.GAP_HEIGHT);
        ctx.fillRect(this.x, this.GAP_HEIGHT + this.GAP, this.WIDTH, global.CANVAS_HEIGHT - this.GAP_HEIGHT - this.GAP);
    }

    update(){
        this.x += this.VELOCITY;
    }
}

export default Obstacle;