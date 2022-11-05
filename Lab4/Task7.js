// Задание 7

alert("Задание 7");

function* moveObject() {
    let x = {
        score: 0
    }
    let y = {
        score: 0
     }
     let data;
     for(let i = 0; i < 10; i++) {
         data = yield `Step №${i + 1}`;
         gameEngine(data, x, y);
         console.log(`Вы сейчас на ${x.score} по x, ${y.score} по y`);
     }
}

function gameEngine(step, x, y) {
    let left    = "left";
    let right   = "right";
    let up      = "up";
    let down    = "down";
    if (step == left) {
        x.score -= 1;
    } else if (step == right) {
        x.score += 1;
    } else if (step == up) {
        y.score += 1;
    } else if (step == down) {
        y.score -= 1;
    }
}

let game = moveObject();
let choice;
let one = game.next(choice);

for(let i = 0; i < 10; i++) {
    alert(one.value);
    choice = prompt("Сделайте ход");
    one = game.next(choice);
}