import {globalConstants as global} from "./constants.js";

class Score {
    constructor(score) {
        this.x = 0;
        this.y = 0;
        this.WIDTH = Math.floor(global.CANVAS_WIDTH * 0.09);
        this.HEIGHT = Math.floor(global.CANVAS_HEIGHT * 0.075);
        this.value = score;
    }

    draw(ctx) {
        let numbers = this.splitScore().reverse();
        for (let i = 0; i < numbers.length; i++) {
            switch(numbers[i]) {
                case 0:
                    ctx.drawImage(global.NUMBERS_IMAGE, 24 * 0, 0, 24, 36, (this.x + this.WIDTH) * i, this.y, this.WIDTH, this.HEIGHT);
                    break;
                case 1:
                    ctx.drawImage(global.NUMBERS_IMAGE, 24 * 1, 0, 24, 36, (this.x + this.WIDTH) * i, this.y, this.WIDTH, this.HEIGHT);
                    break;
                case 2:
                    ctx.drawImage(global.NUMBERS_IMAGE, 24 * 2, 0, 24, 36, (this.x + this.WIDTH) * i, this.y, this.WIDTH, this.HEIGHT);
                    break;
                case 3:
                    ctx.drawImage(global.NUMBERS_IMAGE, 24 * 3, 0, 24, 36, (this.x + this.WIDTH) * i, this.y, this.WIDTH, this.HEIGHT);
                    break;
                case 4:
                    ctx.drawImage(global.NUMBERS_IMAGE, 24 * 4, 0, 24, 36, (this.x + this.WIDTH) * i, this.y, this.WIDTH, this.HEIGHT);
                    break;
                case 5:
                    ctx.drawImage(global.NUMBERS_IMAGE, 24 * 5, 0, 24, 36, (this.x + this.WIDTH) * i, this.y, this.WIDTH, this.HEIGHT);
                    break;
                case 6:
                    ctx.drawImage(global.NUMBERS_IMAGE, 24 * 6, 0, 24, 36, (this.x + this.WIDTH) * i, this.y, this.WIDTH, this.HEIGHT);
                    break;
                case 7:
                    ctx.drawImage(global.NUMBERS_IMAGE, 24 * 7, 0, 24, 36, (this.x + this.WIDTH) * i, this.y, this.WIDTH, this.HEIGHT);
                    break;
                case 8:
                    ctx.drawImage(global.NUMBERS_IMAGE, 24 * 8, 0, 24, 36, (this.x + this.WIDTH) * i, this.y, this.WIDTH, this.HEIGHT);
                    break;
                case 9:
                    ctx.drawImage(global.NUMBERS_IMAGE, 24 * 9, 0, 24, 36, (this.x + this.WIDTH) * i, this.y, this.WIDTH, this.HEIGHT);
                    break;
                default:
                    break;
            }
        }
    }

    update(){
        this.value++;
    }

    splitScore(){
        let splittedScore = [];
        let aux = this.value;
        while(10 - aux <= 0){
            splittedScore.push(Math.floor(aux%10));
            aux /= 10;
            aux = Math.floor(aux);
        }
        splittedScore.push(Math.floor(aux));
        return splittedScore;
    }

}

export default Score;