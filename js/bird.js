import {globalConstants as global} from "./constants.js";

class Bird {
    constructor(x, y, jumpImpulse) {
        this.HEIGHT = Math.floor(global.CANVAS_HEIGHT *  0.055555);
        this.WIDTH = Math.floor(global.CANVAS_WIDTH *  0.125);
        this.x = x;
        this.y = y;
        this.JUMP_IMPULSE = jumpImpulse; //jump impulse velocity
        this.lastJumpY = this.y; //height of last jump
        this.isJumping = false; //for avoid automatic jump
        this.sprite = 0;
        this.staggerFrame = 5;
    }

    draw(ctx, frame){
        ctx.drawImage(global.BIRD_IMAGE, 36 * this.sprite, 0, 34, 24, this.x, this.y, this.WIDTH, this.HEIGHT);
        if(frame % this.staggerFrame == 0){
            if(this.sprite < 3) this.sprite++;
            else this.sprite = 0;
        }
    }

    jump(){
        global.JUMP_SOUND.load();
        this.lastJumpY = this.y; //Recalculate last jump for star a new jump
        global.JUMP_SOUND.play();
    }

    update(time){
        this.y = this.lastJumpY + this.JUMP_IMPULSE * time + 0.5 * time * time * global.GRAVITY;
    }
}

export default Bird;