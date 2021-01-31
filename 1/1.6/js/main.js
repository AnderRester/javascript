const a = Number(prompt("Введите число в диапазоне от -1 до 1, включая 0", 0));

if (a < 0) {
    alert("Меньше нуля");
} else {
    if (a > 0) {
        alert("Больше нуля");
    } else {
        alert("Равно нулю");
    }
}