import {globalConstants as global} from "./constants.js";

class Score {
    constructor(score) {
        this.x = 0;
        this.y = 0;
        this.WIDTH = 24;
        this.HEIGHT = 36;
        this.value = score;
    }

    draw(ctx) {
        let numbers = this.splitScore().reverse();
        for (let i = 0; i < numbers.length; i++) {
            switch(numbers[i]) {
                case 0:
                    ctx.drawImage(global.NUMBERS_IMAGE, this.WIDTH * 0, 0, this.WIDTH, this.HEIGHT, (this.x + this.WIDTH) * i, this.y, this.WIDTH, this.HEIGHT);
                    break;
                case 1:
                    ctx.drawImage(global.NUMBERS_IMAGE, this.WIDTH * 1, 0, this.WIDTH, this.HEIGHT, (this.x + this.WIDTH) * i, this.y, this.WIDTH, this.HEIGHT);
                    break;
                case 2:
                    ctx.drawImage(global.NUMBERS_IMAGE, this.WIDTH * 2, 0, this.WIDTH, this.HEIGHT, (this.x + this.WIDTH) * i, this.y, this.WIDTH, this.HEIGHT);
                    break;
                case 3:
                    ctx.drawImage(global.NUMBERS_IMAGE, this.WIDTH * 3, 0, this.WIDTH, this.HEIGHT, (this.x + this.WIDTH) * i, this.y, this.WIDTH, this.HEIGHT);
                    break;
                case 4:
                    ctx.drawImage(global.NUMBERS_IMAGE, this.WIDTH * 4, 0, this.WIDTH, this.HEIGHT, (this.x + this.WIDTH) * i, this.y, this.WIDTH, this.HEIGHT);
                    break;
                case 5:
                    ctx.drawImage(global.NUMBERS_IMAGE, this.WIDTH * 5, 0, this.WIDTH, this.HEIGHT, (this.x + this.WIDTH) * i, this.y, this.WIDTH, this.HEIGHT);
                    break;
                case 6:
                    ctx.drawImage(global.NUMBERS_IMAGE, this.WIDTH * 6, 0, this.WIDTH, this.HEIGHT, (this.x + this.WIDTH) * i, this.y, this.WIDTH, this.HEIGHT);
                    break;
                case 7:
                    ctx.drawImage(global.NUMBERS_IMAGE, this.WIDTH * 7, 0, this.WIDTH, this.HEIGHT, (this.x + this.WIDTH) * i, this.y, this.WIDTH, this.HEIGHT);
                    break;
                case 8:
                    ctx.drawImage(global.NUMBERS_IMAGE, this.WIDTH * 8, 0, this.WIDTH, this.HEIGHT, (this.x + this.WIDTH) * i, this.y, this.WIDTH, this.HEIGHT);
                    break;
                case 9:
                    ctx.drawImage(global.NUMBERS_IMAGE, this.WIDTH * 9, 0, this.WIDTH, this.HEIGHT, (this.x + this.WIDTH) * i, this.y, this.WIDTH, this.HEIGHT);
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