// // Задание 1
//
function pow(x, n)
{
    let result = 1;
    for (var i = 0; i < n; i++) {
        result *= x
    };
    return result;
}

x = prompt("Число?", '')
n = prompt("Степень?", '')
if (n < 0)  {
    alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else
{
    alert(pow(x, n));
}
//
// // Задание 2
//
// let name2 = "Alexandr";
// let city2 = "Moscow";
// let birthday2 = 1992;
// let color2 = "red";
// let answer2 = true;
// let infinity2 = Infinity;
// let number2 = 532;
// let perimeter2 = 48;
// let message2 = "Введенные данные неверны";
//
// // Задание 3
//
// let a = 5; // Числовой тип
// let name = 'Name'; // Строковый тип
// let i = 0; // Числовой тип
// let double = 0.23; // Числовой тип
// let result = 1/0; // Числовой тип
// let answer = true; // Булевый тип
// let no = null; // Значение "null"
//
// // Задание 4
//
// let a1 = 45;
// let b1 = 21;
// let S = 2*a1 + 2*b1;
// console.log(S);
//
// // Задание 5
//
let b2 = 5;
let S2 = b2 ** 2;
let c2 = 45;
let d2 = 21;
let S3 = 45 * 2 + 21 * 2;
let amount = S3 / S2;
console.log(Math.round(5.6));

// // Задание 6
//
// let i3 = 2;
// let a3 = ++i3;
// let b3 = i3++;
//
// Задание 7

// let c1 = "Привет" > "привет";
// console.log(c1);
// let c2 = "Привет" > "Пока";
// console.log(c2);
// let c3 = 45 > "53";
// console.log(c3);
// let c4 = false > 3;
// console.log(c4);
// let c5 = true > "3";
// console.log(c5);
// let c6 = 3 > "5мм";
// console.log(c6);
// let c7 = null > undefined;
// console.log(c7);

// // Задание 8
//
// alert("Введенные данные неверны");
//
// // Задание 9
//
// prompt('Секретный вопрос', '');
//
// // Задание 10
//
// let login = 0;
// let password = 0;
// login = prompt('Введите логин: ', '');
// if (login == "" || login == null) {
//     alert("Введенные данные неверны")
// }
//
// password = prompt('Введите пароль: ', '');
// if (password == "" || password == null) {
//     alert("Введенные данные неверны")
// } else {
//     alert("Вы успешно вошли в аккаунт!");
// }
//
// // Задание 11
//
// alert("У вас три экзамена: русский, математика, английский");
//
// let amount3;
// amount3 = prompt("Сколько экзаменов вы сдали?", 3);
//
// if (amount3 == 3) {
//     alert("Поздравляю, вы переведены на следующий курс!");
// } else if (amount3 < 3 && amount3 >= 1 ) {
//     alert("На пересдачу!");
// } else if (amount3 == 0) {
//     alert("Отчислен!");
// }
//
// // Задание 12
//
// let a6 = Number(prompt("Введите число а", ""));
// let b6 = Number(prompt("Введите число b", ""));
// let c6 = a6 + b6;
// alert("Сумма чисел равна " + c6);
//
// Задание 13

    // let b1 = true + true;
    // console.log(b1);
    // let b2 = 0 + "5";
    // console.log(b2);
    // let b3 = 5 + "мм";
    // console.log(b3);
    // let b4 = 8/Infinity;
    // console.log(b4);
    // let b5 = 9 * "\n9";
    // console.log(b5);
    // let b6 = null - 1;
    // console.log(b6);
    // let b7 = "5" - 2;
    // console.log(b7);
    // let b8 = "5px" - 3;
    // console.log(b8);
    // let b9 = true - 3;
    // console.log(b9);
    // let b10 = 7 || 0;
    // console.log(b10);

// // Задание 14
//
// for(let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i + 2);
//     } else {
//         console.log(i + "мм");
//     }
// }
//
// // Задание 15
//
// let number45 = 0;
// while (number45 < 100) {
//     number45 = prompt("Введите число", "");
// }
//
// // задание 16
//
// let arr13 = ["Понедельник", "Вторник",
//  "Среда", "Четверг", "Пятница",
//  "Суббота", "Воскресенье"]
//
//  let i13 = prompt("Введите число (от 1 до 7)", "");
//  weekday(i13);
//
//  function weekday(i13) {
//     if (i13 > 7 || i13 < 1) {
//         alert("Ошибка ввода");
//         return 1;
//     }
//     alert("Сегодня " + arr13[--i13]);
//  }
