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

function spawnEnemy() {
    const width = 40;
    const x = Math.random() * (canvas.width - width);
    enemies.push({ x, y: 0, width, height: 40, speed: 2 });
}

function update() {
    // Move bullets
    bullets.forEach((b, i) => {
        b.y -= speed;
        if (b.y < 0) bullets.splice(i, 1);
    });

    // Move enemies
    enemies.forEach((e, i) => {
        e.y += e.speed;
        if (e.y > canvas.height) enemies.splice(i, 1);
    });

    // Collision detection
    bullets.forEach((b, bi) => {
        enemies.forEach((e, ei) => {
            if (
                b.x < e.x + e.width &&
                b.x + b.width > e.x &&
                b.y < e.y + e.height &&
                b.y + b.height > e.y
            ) {
                bullets.splice(bi, 1);
                enemies.splice(ei, 1);
            }
        })
    })
}