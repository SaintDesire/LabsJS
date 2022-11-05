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