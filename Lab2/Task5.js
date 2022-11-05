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

