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