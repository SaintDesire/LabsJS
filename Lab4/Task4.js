// Задание 4

alert("Задание 4");

// Вариант 1

function makeCounter() {
    let currentCount = 1;

    return function() {
        return currentCount++;
    };
}

let counter = makeCounter();

alert(counter());
alert(counter());
alert(counter());

let counter2 = makeCounter();
alert(counter2());

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
