const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = {
    x: canvas.width / 2,
    y: canvas.height - 80,
    width: 40,
    height: 40,
    color: "lime",
    speed: 5
};

let bullets = [];
let enemies = [];

document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft") player.x -= player.speed;
    if (e.code === "ArrowRight") player.x += player.speed;
    if (e.code === "Space") {
        bullets.push({
            x: player.x + player.width / 2 - 2,
            y: player.y,
            width: 4,
            height: 10,
            speed: 8
        });
    }
});

