import {globalConstants as global} from "./constants.js";

class Obstacle {
    constructor() {
        this.x = global.CANVAS_WIDTH;
        this.wasSurpassed = false;
        this.GAP = 220;
        this.WIDTH = 60;
        this.v = -2;
        this.GAP_HEIGHT = (Math.random() * (global.CANVAS_HEIGHT - 2 * this.GAP)) + this.GAP/2;
    }

    draw(ctx) {
        ctx.drawImage(global.PIPES_IMAGE, 52, 0, 52, 640, this.x, this.GAP_HEIGHT - 640, this.WIDTH, 640);
        ctx.drawImage(global.PIPES_IMAGE, 0, 0, 52, 640, this.x, this.GAP_HEIGHT + this.GAP, this.WIDTH, 640);
    }

    update(){
        this.x += this.v;
    }

    speedUp(){
        this.v *= 1.15;
    }
}

export default Obstacle;