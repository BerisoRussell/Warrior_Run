const Warrior = document.getElementById("Warrior");
const enemy = document.getElementById("enemy");

function jump() {
if (Warrior.classList != "jump") {
    Warrior.classList.add("jump");

setTimeout(function () {
    Warrior.classList.remove("jump");
    }, 300);
}
}

let isAlive = setInterval(function () {
let WarriorTop = parseInt(window.getComputedStyle(Warrior).getPropertyValue("top"));


let enemyLeft = parseInt(
    window.getComputedStyle(enemy).getPropertyValue("left")
);

if (enemyLeft < 40 && enemyLeft > 0 && WarriorTop >= 140) {

    alert('Game Over')
}
}, 10);

document.addEventListener("keydown", function (event) {
jump();
});