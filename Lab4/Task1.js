// Задание 1

alert("Задание 1");

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

console.log(countArgs(1,2,3));
console.log(countArgs(1,2,3,4,5));
console.log(countArgs(1,2,3,4,5,6,7));
console.log(countArgs(1,2,3,4,5,6,7,8));