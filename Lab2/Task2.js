alert("Задание 2");

function outputString(a = 'String: ', b , c) {
    let x = String(a + b + c);
    console.log(x);
}
let _ = undefined;
let b = "dada "
let c = prompt("Введите строку");
outputString(_ , b, c);