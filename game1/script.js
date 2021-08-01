var character = document.getElementById("character");

document.addEventListener("keydown", jump);

function jump() {
    character.classList.add("animate");
    setTimeout(removeJump, 700); //300ms = length of animation
};

function removeJump() {
    character.classList.remove("animate");
}
// if (character.classList == "animate") { 
//     return;
// }

var block = document.getElementById("block");
var score = document.getElementById("score");
let count = 0;

function checkDead() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 126) {
        alert("Game Over");
        count *= 0;
        score.innerHTML = count;
    }
    else if (blockLeft < -7){
        count += 10;
        score.innerHTML = count; 
    }
}

setInterval(checkDead, 10);