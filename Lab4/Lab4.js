// Задание 1

// alert("Задание 1");
//
function countArgs(...args){
    let amount = args.length;
    if (amount <= 3) {
        let str = '';
        for (let i = 0; i < amount; i++) {
            str += arguments[i];
        }
        return str;
    } else if (amount > 3 && amount <= 5) {
        let str = '';
        for(let i = 0; i < amount; i++) {
            str += typeof(arguments[i]) + " ";
        }
        return str;
    } else if (amount > 5 && amount <= 7) {
        return amount;
    } else if (amount > 7) {
        let str = "Количество аргументов очень большое";
        return str;
    }
}
//
// console.log(countArgs(1,2,3));
// console.log(countArgs(1,2,3,4,5));
// console.log(countArgs(1,2,3,4,5,6,7));
// console.log(countArgs(1,2,3,4,5,6,7,8));

// Задание 2

// alert("Задание 2");

// window.a;
// alert(a);
//
// alert(a);
// window.a = 2;
//
// alert(a);
// window.a = 2;
// let a;
//
// alert(a);
// window.a = 2;
// var a;
//
// alert(a);
// let a = 2;
//
// let a = 2;
// window.a = 3;
// alert(a);
//
// var a = 2;
// window.a = 3;
// alert(a);

// Задание 3

// alert("Задание 3");
//
// let s = 5;
// function sum() {
//     alert(s);
// }
//
// sum();

// Задание 4

// alert("Задание 4");

// Вариант 1

function makeCounter() {
    let currentCount = 1;

    return function() {
        return currentCount++;
    };
}
//
// let counter = makeCounter();
//
// alert(counter());
// alert(counter());
// alert(counter());
//
// let counter2 = makeCounter();
// alert(counter2());

// Вариант 2

// let currentCount = 1;
//
// function makeCounter() {
//     return function() {
//         return currentCount++;
//     };
// }
//
// let counter = makeCounter();
// let counter2 = makeCounter();
//
// alert(counter());
// alert(counter());
//
// alert(counter2());
// alert(counter2());


// Задание 5

alert("Задание 5");

console.log(makeCounter.name);
console.log(countArgs.name);

// Задание 6

// alert("Задание 6");
//
// function volume(a){
//     return (b) => {
//         return (h) => {
//             return a * b * h;
//         }
//     }
// }
//
// console.log(volume(2)(4)(1));
// console.log(volume(3)(5)(2));
// console.log(volume(4)(6)(3));
//
// let vol = volume(3);
//
// console.log('');
// console.log(vol(12)(6));
// console.log(vol(3)(1));

// Задание 7
//
// alert("Задание 7");
//
// function* moveObject() {
//     let x = {
//         score: 0
//     }
//     let y = {
//         score: 0
//     }
//     for(let i = 0; i < 10; i++) {
//         let data = yield `Step №${i+1}`;
//         gameEngine(data,x,y);
//         console.log(`Вы сейчас на ${x.score} по x, ${y.score} по y`);
//     }
// }
//
// function gameEngine(step, x, y) {
//     let left    = "left";
//     let right   = "right";
//     let up      = "up";
//     let down    = "down";
//     if (step == left) {
//         x.score -= 1;
//     } else if (step == right) {
//         x.score += 1;
//     } else if (step == up) {
//         y.score += 1;
//     } else if (step == down) {
//         y.score -= 1;
//     }
// }
//
// let game = moveObject();
// let choice;
// let one = game.next(choice);
//
// for(let i = 0; i < 10; i++) {
//     alert(one.value);
//     choice = prompt("Сделайте ход");
//     one = game.next(choice);
// }