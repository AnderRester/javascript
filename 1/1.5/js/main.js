let CurrencyValue = prompt("Введите тип валюты и размер транзакции", "$5");

function extractCurrencyValue(CurrencyValue) {
    let num = "";
    for (let i = 1; i <= CurrencyValue.length; i++) {
        num += CurrencyValue.charAt(i);
    }
    return (num);
}
alert(extractCurrencyValue(CurrencyValue));