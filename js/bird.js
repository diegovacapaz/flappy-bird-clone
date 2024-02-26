import {globalConstants as global} from "./constants.js";

class Bird {
    constructor(x, y, jumpImpulse) {
        this.HEIGHT = 30;
        this.WIDTH = 40;
        this.x = x;
        this.y = y;
        this.JUMP_IMPULSE = jumpImpulse; //jump impulse velocity
        this.lastJumpY = this.y; //height of last jump
        this.isJumping = false; //for avoid automatic jump
    }

    draw(ctx){
        ctx.fillRect(this.x, this.y, this.WIDTH, this.HEIGHT);
    }

    jump(){
        this.lastJumpY = this.y; //Recalculate last jump for star a new jump
    }

    update(time){
        this.y = this.lastJumpY + this.JUMP_IMPULSE * time + 0.5 * time * time * global.GRAVITY;
    }
}

export default Bird;