let currentImage = 1;
const totalImages = 34;
let spinning = false;
let direction = 1;
let animationFrame;

function updateImage() {
    document.getElementById("productImage").src = `images/product/bike-${currentImage}.jpg`;
}

function spin() {
    if (!spinning) return;
    currentImage += direction;
    if (currentImage > totalImages) currentImage = 1;
    if (currentImage < 1) currentImage = totalImages;
    updateImage();
    setTimeout(() => {
        animationFrame = requestAnimationFrame(spin);
    }, 100);
}

function startSpin(dir) {
    if (spinning) return;
    direction = dir;
    spinning = true;
    spin();
}

function stopSpin() {
    spinning = false;
    cancelAnimationFrame(animationFrame);
}



//pacman
document.addEventListener("DOMContentLoaded", () => {
    const pacman = document.getElementById("pacman");
    const buttons = document.querySelectorAll(".controls button");
    let direction = "stop";
    let velocity = { x: 0, y: 0 };
    let position = { x: 50, y: 50 };
    let container = document.querySelector(".game-box");
    let pacmanSpeed = 5;
    let animation;

    function movePacman() {
        position.x += velocity.x;
        position.y += velocity.y;

        if (position.x <= 0 || position.x >= container.clientWidth - 40) {
            velocity.x *= -1;
        }
        if (position.y <= 0 || position.y >= container.clientHeight - 40) {
            velocity.y *= -1;
        }

        pacman.style.left = `${position.x}px`;
        pacman.style.top = `${position.y}px`;

        animation = requestAnimationFrame(movePacman);
    }

    function updateDirection(newDirection, velX, velY, imageRotation) {
        if (direction !== newDirection) {
            direction = newDirection;
            velocity.x = velX;
            velocity.y = velY;
            pacman.src = "images/pacman/pac-man-fast.gif";
            pacman.style.transform = `rotate(${imageRotation}deg)`;
            buttons.forEach(btn => btn.classList.remove("active"));
            document.getElementById(newDirection).classList.add("active");
            cancelAnimationFrame(animation);
            animation = requestAnimationFrame(movePacman);
        }
    }

    document.getElementById("up").addEventListener("click", () => updateDirection("up", 0, -pacmanSpeed, 270));
    document.getElementById("down").addEventListener("click", () => updateDirection("down", 0, pacmanSpeed, 90));
    document.getElementById("left").addEventListener("click", () => updateDirection("left", -pacmanSpeed, 0, 180));
    document.getElementById("right").addEventListener("click", () => updateDirection("right", pacmanSpeed, 0, 0));

    document.getElementById("stop").addEventListener("click", () => {
        cancelAnimationFrame(animation);
        pacman.src = "images/pacman/pac-man-static.gif";
        velocity.x = 0;
        velocity.y = 0;
        direction = "stop";
        buttons.forEach(btn => btn.classList.remove("active"));
        document.getElementById("stop").classList.add("active");
    });

    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "w":
                updateDirection("up", 0, -pacmanSpeed, 270);
                break;
            case "s":
                updateDirection("down", 0, pacmanSpeed, 90);
                break;
            case "a":
                updateDirection("left", -pacmanSpeed, 0, 180);
                break;
            case "d":
                updateDirection("right", pacmanSpeed, 0, 0);
                break;
            case "x":
                document.getElementById("stop").click();
                break;
        }
    });
});
