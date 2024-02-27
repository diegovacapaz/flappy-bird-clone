const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 342;
canvas.height = 608;

const globalConstants = {
    GRAVITY: 1,
    CANVAS_WIDTH: canvas.width,
    CANVAS_HEIGHT: canvas.height
}

export {globalConstants};