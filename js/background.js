import {globalConstants as global} from "./constants.js";

class Background {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.v = -Math.floor(global.CANVAS_WIDTH * 0.0025);
    }

    draw(ctx) {
        ctx.drawImage(global.BG_IMAGE, 0, 0, 288, 512, this.x, 0, global.CANVAS_WIDTH, global.CANVAS_HEIGHT);
        ctx.drawImage(global.BG_IMAGE, 0, 0, 288, 512, this.x + global.CANVAS_WIDTH, 0, global.CANVAS_WIDTH, global.CANVAS_HEIGHT);
    }

    update(frame){
        if(this.x <= -global.CANVAS_WIDTH) this.x = 0;
        this.x = this.x + this.v;
    }
}

export default Background;