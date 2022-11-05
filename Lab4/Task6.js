// Задание 6

alert("Задание 6");

function volume(a){
    return (b) => {
        return (h) => {
            return a * b * h;
        }
    }
}

console.log(volume(2)(4)(1));
console.log(volume(3)(5)(2));
console.log(volume(4)(6)(3));

let vol = volume(3);

console.log('');
console.log(vol(12)(6));
console.log(vol(3)(1));
