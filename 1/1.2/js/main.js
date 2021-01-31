let a = Number(prompt("Введите интервал", 0));
const b = Number(prompt("Введите интервал", 0));
let sum = 0;
for (a; a <= b; a++) {
    if (a % 2 == 0) {
        sum += a;
    }
}
alert(sum);