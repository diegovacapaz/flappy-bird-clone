import Bird from "./bird.js";
import Obstacle from "./obstacle.js";
import Background from "./background.js";
import {globalConstants as global} from "./constants.js";
import Floor from "./floor.js";
import Score from "./score.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scoreboard = document.getElementById("scoreboard");
const gameOverScreen= document.getElementById("game_over");
const retryButton= document.getElementById("retryButton");

let jumpFrame = 0;
let gameFrame = 0;
let obstacles = [];
let gameOver = false;

let bird = new Bird(0.3 *global.CANVAS_WIDTH, 0.5 * global.CANVAS_HEIGHT, global.BIRD_JUMP_IMPULSE);
let background = new Background();
let floor = new Floor();
let score = new Score(0);


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
        score.update();
        global.POINT_SOUND.play();
    };
}

//Check the floor collision
const checkFloorCollision = () => {
    return (bird.y + bird.HEIGHT) >= floor.y;
}

//Reset the game
const resetGame = () => {
    gameOverScreen.style.display = "none";
    score = new Score(0);
    jumpFrame = 0;
    gameFrame = 0;
    gameOver = false;
    obstacles = [];
    generateObstacles();
    background = new Background();
    floor = new Floor();
    bird = new Bird(0.3 *global.CANVAS_WIDTH, 0.5 * global.CANVAS_HEIGHT, global.BIRD_JUMP_IMPULSE);
    main();
}

//Game over
const showGameOver = () => {
    global.DYING_SOUND.play();
    gameOverScreen.style.display = "flex";
    gameOver = true;
}

//Main loop

const main = () => {
    ctx.clearRect(0, 0, global.CANVAS_WIDTH, global.CANVAS_HEIGHT);
    generateObstacles();
    background.draw(ctx);
    bird.draw(ctx, gameFrame);
    obstacles.forEach(obstacle => obstacle.draw(ctx));
    floor.draw(ctx);
    score.draw(ctx);


    for(let obstacle of obstacles){
        checkAndUpdateScore(obstacle);
        if(checkObstacleCollision(obstacle)){
            showGameOver();
            return;
        }
    }
    if(checkFloorCollision()){
        showGameOver();
        return;
    }

    bird.update(jumpFrame);
    background.update(gameFrame);
    obstacles.forEach(obstacle => obstacle.update());
    floor.update(gameFrame);
    
    jumpFrame = (jumpFrame + 1) % 6000; //Autoreset
    gameFrame = (gameFrame + 1) % 4000; //Autoreset

    window.requestAnimationFrame(main);
}
main();

//Event Listeners

document.addEventListener("keydown", (event) => {
    if (event.code === "Space" && !bird.isJumping && !gameOver) {
        bird.jump();
        bird.isJumping = true;
        jumpFrame = 0;
    }
});

document.addEventListener("keyup", (event) => {
    if (event.code === "Space" && !gameOver) {
        bird.isJumping = false;
    }
});

document.addEventListener("click", (event) => {
    if(!gameOver){
        bird.isJumping = true;
        bird.jump();
        jumpFrame = 0;
        bird.isJumping = false;
    }
});

retryButton.addEventListener("click", (event) => {
    resetGame();
});
