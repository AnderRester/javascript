const num = Number(prompt("Введите число"));

function divisors(num) {
    for (let i = 1; i <= num / 2; i++) {
        if (num % i == 0) {
            console.log(i);
        }
    }
}
divisors(num) + console.log(num);