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

