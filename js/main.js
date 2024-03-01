import Bird from "./bird.js";
import Obstacle from "./obstacle.js";
import {globalConstants as global} from "./constants.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scoreboard = document.getElementById("scoreboard");
const gameOverScreen= document.getElementById("game_over");
const retryButton= document.getElementById("retry");

let jumpFrame = 0;
let gameFrame = 0;
let obstacles = [];
let score = 0;

let bird = new Bird(0.3 *global.CANVAS_WIDTH, 0.5 * global.CANVAS_HEIGHT, global.BIRD_JUMP_IMPULSE);


const generateObstacles = () => {
    if(obstacles.length === 0 || obstacles[obstacles.length - 1].x < global.CANVAS_WIDTH / 6) obstacles.push(new Obstacle());
    if(obstacles[0].x + obstacles[0].WIDTH < 0) obstacles.splice(0, 1);
}
generateObstacles();

//Check if bird and obstacles are colliding
const checkObstacleCollision = (obstacle) => {
    const lateralCollision = (bird.x < obstacle.x + obstacle.WIDTH) && (bird.x + bird.WIDTH > obstacle.x);
    const verticalCollision = (bird.y < obstacle.GAP_HEIGHT) || (bird.y + bird.HEIGHT > obstacle.GAP_HEIGHT + obstacle.GAP);
    return lateralCollision && verticalCollision;
}

//Update and refresh the scoreboard
const checkAndUpdateScore = (obstacle) => {
    if((obstacle.x + obstacle.WIDTH < bird.x) && !obstacle.wasSurpassed){
        obstacle.wasSurpassed = true;
        score++;
        scoreboard.innerHTML = score; 
    };
}

//Reset the game
const resetGame = () => {
    gameOverScreen.style.display = "none";
    score = 0;
    scoreboard.innerHTML = score;
    jumpFrame = 0;
    gameFrame = 0;
    obstacles = [];
    generateObstacles(); 
    bird = new Bird(0.3 *global.CANVAS_WIDTH, 0.5 * global.CANVAS_HEIGHT, global.BIRD_JUMP_IMPULSE);
    main();
}

//Game over
const showGameOver = () => {
    gameOverScreen.style.display = "flex";
}

//Main loop

const main = () => {
    ctx.clearRect(0, 0, global.CANVAS_WIDTH, global.CANVAS_HEIGHT);
    generateObstacles();
    bird.draw(ctx, gameFrame);
    obstacles.forEach(obstacle => obstacle.draw(ctx));

    for(let obstacle of obstacles){
        checkAndUpdateScore(obstacle);
        if(checkObstacleCollision(obstacle)){
            showGameOver();
            return;
        }
    }

    bird.update(jumpFrame);
    obstacles.forEach(obstacle => obstacle.update());
    
    jumpFrame = (jumpFrame + 1) % 6000; //Autoreset
    gameFrame = (gameFrame + 1) % 4000; //Autoreset

    window.requestAnimationFrame(main);
}
main();

//Event Listeners

document.addEventListener("keydown", (event) => {
    if (event.code === "Space" && !bird.isJumping) {
        bird.jump();
        bird.isJumping = true;
        jumpFrame = 0;
    }
});

document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
        bird.isJumping = false;
    }
});

retryButton.addEventListener("click", (event) => {
    resetGame();
});