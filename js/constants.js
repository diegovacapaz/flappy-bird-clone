const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 720;
const pipes = new Image();
pipes.src = "../assets/pipes.png";
const bird = new Image();
bird.src = "../assets/bird.png";
const background = new Image();
background.src = "../assets/background.png";

const globalConstants = {
    GRAVITY: 1,
    CANVAS_WIDTH: canvas.width,
    CANVAS_HEIGHT: canvas.height,
    BIRD_JUMP_IMPULSE: -16.5,
    PIPES_IMAGE: pipes,
    BIRD_IMAGE: bird,
    BG_IMAGE: background,
}

export {globalConstants};