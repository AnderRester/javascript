let a = prompt("Введите число в диапазоне от -1 до 1, включая 0", 0);

let x = parseInt(a);

if (x < 0) {
    alert("Меньше нуля");
} else {
    if (x > 0) {
        alert("Больше нуля");
    } else {
        alert("Равно нулю");
    }
}