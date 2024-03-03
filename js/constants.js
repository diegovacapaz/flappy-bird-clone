const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const aspectRatio = 16/9;

canvas.height = window.innerHeight;
canvas.width = Math.floor(canvas.height / aspectRatio);

const pipes = new Image();
pipes.src = "../assets/pipes.png";
const bird = new Image();
bird.src = "../assets/bird.png";
const background = new Image();
background.src = "../assets/background.png";
const floor = new Image();
floor.src = "../assets/floor.png";
const numbers = new Image();
numbers.src = "../assets/numbers.png";
const point = new Audio();
point.src = "../assets/point.wav";
const wing = new Audio();
wing.src = "../assets/wing.wav";
const die = new Audio();
die.src = "../assets/die.wav";

const globalConstants = {
    GRAVITY: Math.floor(canvas.height *  0.0013888),
    CANVAS_WIDTH: canvas.width,
    CANVAS_HEIGHT: canvas.height,
    BIRD_JUMP_IMPULSE: - Math.floor(canvas.height *  0.0222222),
    PIPES_IMAGE: pipes,
    BIRD_IMAGE: bird,
    BG_IMAGE: background,
    FLOOR_IMAGE: floor,
    NUMBERS_IMAGE: numbers,
    POINT_SOUND: point,
    DYING_SOUND: die,
    JUMP_SOUND: wing
}
export {globalConstants};