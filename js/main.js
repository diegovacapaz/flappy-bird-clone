import Bird from "./bird.js";
import {globalConstants as global} from "./constants.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let gameFrame = 0;

const bird = new Bird(global.CANVAS_WIDTH / 10, global.CANVAS_HEIGHT / 2, -18);

//Check if bird collides

const checkCollision = () => {
    return bird.y > global.CANVAS_HEIGHT; 
}

//Main loop

const main = () => {
    ctx.clearRect(0, 0, global.CANVAS_WIDTH, global.CANVAS_HEIGHT);
    bird.draw(ctx);
    
    if(checkCollision()) return;
    bird.update(gameFrame);
    
    gameFrame = (gameFrame + 1) % 6000; //Autoreset
    window.requestAnimationFrame(main);
}
main();

//Event Listeners

document.addEventListener("keydown", (event) => {
    if (event.code === "Space" && !bird.isJumping) {
        bird.jump();
        bird.isJumping = true;
        gameFrame = 0;
    }
});

document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
        bird.isJumping = false;
    }
});