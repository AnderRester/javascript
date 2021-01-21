let a = prompt("Введите интервал", 0);
let b = prompt("Введите интервал", 0);
let sum = 0;
let x = parseInt(a);
let y = parseInt(b);
for (; x <= y; x++) {
    //sum += x;
    if (x % 2 == 0) {
        sum += x;
    }
}
alert(sum);