import {globalConstants as global} from "./constants.js";

class Obstacle {
    constructor() {
        this.x = global.CANVAS_WIDTH;
        this.wasSurpassed = false;
        this.GAP = Math.floor(global.CANVAS_HEIGHT * 0.30555);
        this.WIDTH = Math.floor(global.CANVAS_WIDTH * 0.15);
        this.v = -Math.floor(global.CANVAS_WIDTH * 0.0050);
        this.GAP_HEIGHT = (Math.random() * (global.CANVAS_HEIGHT - 2 * this.GAP)) + this.GAP/2;
    }

    draw(ctx) {
        ctx.drawImage(global.PIPES_IMAGE, 52, 0, 52, 640, this.x, this.GAP_HEIGHT - 640, this.WIDTH, 640);
        ctx.drawImage(global.PIPES_IMAGE, 0, 0, 52, 640, this.x, this.GAP_HEIGHT + this.GAP, this.WIDTH, 640);
    }

    update(){
        this.x += this.v;
    }
}

export default Obstacle;