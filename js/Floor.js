import {globalConstants as global} from "./constants.js";

class Floor {
    constructor() {
        this.x = 0;
        this.y = 10/11 * global.CANVAS_HEIGHT;
        this.v = -1;
    }

    draw(ctx) {
        ctx.drawImage(global.FLOOR_IMAGE, 0, 0, 336, 112, this.x, this.y, global.CANVAS_WIDTH, global.CANVAS_HEIGHT - this.y);
        ctx.drawImage(global.FLOOR_IMAGE, 0, 0, 336, 112, this.x + global.CANVAS_WIDTH, this.y, global.CANVAS_WIDTH, global.CANVAS_HEIGHT - this.y);
    }

    update(frame){
        if(this.x <= -global.CANVAS_WIDTH) this.x = 0;
        this.x = this.x + this.v;
    }

    speedUp(){
    }
}

export default Floor;