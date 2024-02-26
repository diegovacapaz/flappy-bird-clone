const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 405;
const CANVAS_HEIGHT = canvas.height = 720;

let x = 75;
let y = (CANVAS_HEIGHT - 0.5 * CANVAS_WIDTH)/ 2;
const v0 = -20;
const g = 1;
let gameFrame = 0;
let jump_y = y;   

const startJump = () => {
    jump_y = y
    gameFrame = 0; 
}

const jump = (y0, t) => {
    const v = v0 + g*t;
    y = y0 + v0*t + 0.5 * t * t * g;
    return y;
}

// Agregar event listener para la tecla de espacio
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        startJump();
    }
});

const main = () => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(x, y, 150, 110);

    y = jump(jump_y, gameFrame);
    gameFrame++;

    window.requestAnimationFrame(main);
}
main();