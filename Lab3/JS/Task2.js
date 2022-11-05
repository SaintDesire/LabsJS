alert("Задание 2");

let days = {
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
    7: "Воскресенье",
}
let Iday = Number(prompt("Введите номер дня недели"));
console.log(`Сегодня ${days[Iday]}`);
let count = 0;
let str = "";
for(let i = 1; i <= 7; i++) {
    if (i % 2 != 0){
        str += days[i] + " ";
        count++;
    }
}
console.log(str);
console.log(`Количество нечетных дней ${count}`);