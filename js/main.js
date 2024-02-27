import Bird from "./bird.js";
import Obstacle from "./obstacle.js";
import {globalConstants as global} from "./constants.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let gameFrame = 0;
let obstacles = [];

const bird = new Bird(0.3 *global.CANVAS_WIDTH, 0.5 * global.CANVAS_HEIGHT, -18);


const generateObstacles = () => {
    if(obstacles.length === 0 || obstacles[obstacles.length - 1].x < global.CANVAS_WIDTH / 6) obstacles.push(new Obstacle());
    if(obstacles[0].x + obstacles[0].WIDTH < 0) obstacles.splice(0, 1);
}
generateObstacles();
//Check if bird collides

const checkObstacleCollision = (obstacle) => {
    const lateralCollision = (bird.x < obstacle.x + obstacle.WIDTH) && (bird.x + bird.WIDTH > obstacle.x);
    const verticalCollision = (bird.y < obstacle.GAP_HEIGHT) || (bird.y + bird.HEIGHT > obstacle.GAP_HEIGHT + obstacle.GAP);
    return lateralCollision && verticalCollision;
}

//Main loop

const main = () => {
    ctx.clearRect(0, 0, global.CANVAS_WIDTH, global.CANVAS_HEIGHT);
    generateObstacles();
    console.log(obstacles.length)
    bird.draw(ctx);
    obstacles.forEach(obstacle => obstacle.draw(ctx));

    for(let obstacle of obstacles){
        if(checkObstacleCollision(obstacle)) return;
    }

    bird.update(gameFrame);
    obstacles.forEach(obstacle => obstacle.update());
    
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