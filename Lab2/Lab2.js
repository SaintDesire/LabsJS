// Задание 1

alert("Задание 1");

function round(r, pi) {
    let S = pi * (r ** 2);
    console.log(`Площадь круга: ${S}`);
}

let findD = function(r) {
    let d = 2 * r;
    console.log(`Диаметр окружности: ${d}`);
}

let findL = (r, pi) => 2 * pi * r;

let pi = 3.1415926535;
let r = prompt("Введите радиус круга", '');
round(r, pi);
findD(r);
let x = findL(r, pi);
console.log(`Длина окружности ${x}`);



// Задание 2

alert("Задание 2");

function outputString(a = 'String: ', b , c) {
    let x = String(a + b + c);
    console.log(x);
}
let _ = undefined;
let b = "dada ";
let c = prompt("Введите строку");
outputString(_ , b, c);

// Задание 3

alert("Задание 3");

function  countStudents() {
    let s = 0;
    let t = 1;
    while (t != 0) {
        t = (prompt("Введите имя студента (для завершения ввода введите 0)"));
        s++;
    }
    let text = `На паре присутствуют ${s-1} студента`;
    console.log(text);
}

countStudents();

// Задание 4

alert("Задание 4");


function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

let i = factorial(26)/factorial(21); // варианты с буквами
let j = 1000; // варианты с цифрами
let x = i * j; // кол-во вариантов
let time = x * 3;

let years = time / 31104000;
let month = (years - Math.floor(years)) * 12;
let days = (month - Math.floor(month)) * 30;
let hours = (days - Math.floor(days)) * 24;
let minutes = (hours - Math.floor(hours)) * 60;
let seconds = (minutes - Math.floor(minutes)) * 60;
console.log(`${Math.floor(years)} лет ${Math.floor(month)} месяцев ${Math.floor(days)} дней ${Math.floor(hours)} часов ${Math.floor(minutes)} минут ${Math.floor(seconds)} секунд`);


// Задание 5

alert('Задание 5');

function isInteger(num) {
    return (Math.floor(num)) == num;
}

function insertData(k) {
        let d = Number(k);
        let p = parseInt(k);
        let type = typeof p === 'number';
        if (isFinite(Number(k)) && Number(k) % 1 !== 0) {
            alert(`Округление до большего: ${Math.ceil(k)}, Округление до меньшего: ${Math.floor(k)}, Округление до ближайшего целого: ${Math.round(k)}`);
        } else if (isFinite(Number(k)) && !k.includes("."))  {
            let uk = d.toString(16);
            alert(`0x${uk.toUpperCase()}`);
        } else {
            alert(`Верхний регистр: ${k.toUpperCase()}, Нижний регистр: ${k.toLowerCase()}`);
        }
}

let k = prompt("Введите данные");
insertData(k);


// Задание 6

alert("Задание 6");

let dictionaryWord = "Абитуриент";
let enteredAnswer = prompt("Исправьте ошибку в слове 'Обитуриент'?");
let positions = [];
enteredAnswer = enteredAnswer.toLowerCase().trim();
dictionaryWord = dictionaryWord.toLowerCase().trim();
if (enteredAnswer === dictionaryWord) {
    alert("Слово исправлено!");
} else {
    for (let i = 0, j = 0; i < dictionaryWord.length; i++, j++) {
        if (enteredAnswer[i] !== dictionaryWord[j]) {
            positions.push(i + 1);
            continue;
        }
    }
    alert(`Позиции ошибок: ${positions.join(", ")}`);
}

// Задание 7

alert("Задание 7");

let firstCheck;
do {
    firstCheck = prompt("Введите длину катета A");
} while (!isFinite(Number(firstCheck)));

let firstСathetus = Number(firstCheck);

let secondCheck;
do {
    secondCheck = prompt("Введите длину катета B");
} while (!isFinite(Number(secondCheck)));

let secondСathetus = Number(secondCheck);

function getHypotenuse(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

function getArea(a, b) {
    return a * b / 2;
}

function getPerimeter(a, b) {
    return a + b + getHypotenuse(a, b);
}

function getHeight(a, b) {
    return (a * b) / getHypotenuse(a, b);
}

function getCosA(a, b) {
    return (a / getHypotenuse(a, b)).toFixed(2);
}

function getCosB(a, b) {
    return (b / getHypotenuse(a, b)).toFixed(2);
}

function getSinA(a, b) {
    return (b / getHypotenuse(a, b)).toFixed(2);
}

function getSinB(a, b) {
    return (a / getHypotenuse(a, b)).toFixed(2);
}

function getTanA(a, b) {
    return (b / a).toFixed(2);
}

function getTanB(a, b) {
    return (a / b).toFixed(2);
}

function getAtanA(a, b) {
    return (a / b).toFixed(2);
}

function getAtanB(a, b) {
    return (b / a).toFixed(2);
}

console.log(`Гипотенуза: ${getHypotenuse(firstСathetus, secondСathetus)}
Площадь: ${getArea(firstСathetus, secondСathetus)}
Периметр: ${getPerimeter(firstСathetus, secondСathetus)}
Высота: ${getHeight(firstСathetus, secondСathetus)}
Косинус угла A: ${getCosA(firstСathetus, secondСathetus)}
Косинус угла B: ${getCosB(firstСathetus, secondСathetus)}
Синус угла A: ${getSinA(firstСathetus, secondСathetus)}
Синус угла B: ${getSinB(firstСathetus, secondСathetus)}
Тангенс угла A: ${getTanA(firstСathetus, secondСathetus)}
Тангенс угла B: ${getTanB(firstСathetus, secondСathetus)}
Арктангенс угла A: ${getAtanA(firstСathetus, secondСathetus)}
Арктангенс угла B: ${getAtanB(firstСathetus, secondСathetus)}`);