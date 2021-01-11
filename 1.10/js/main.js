let num = prompt("Введите число");

function dividers(num) {
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            console.log(i);
        }
    }
}
alert(dividers(num));