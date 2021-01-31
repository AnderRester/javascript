const min = 14;
const max = 90;

const age = Number(prompt(`Введите возраст в диапазоне от ${min} до ${max}`, 14));

const check = () => {
    let option = document.getElementById("variant").value;
    switch (Number(option)) {
        case 1:
            if (!(age < 14) && !(age > 90)) {
                alert("Число принадлежит интервалу");
            } else {
                alert("Число не принадлежит интервалу");
            }
            break;
        case 2:
            if (age >= 14 && age <= 90) {
                alert("Число принадлежит интервалу");
            } else {
                alert("Число не принадлежит интервалу");
            }
            break;
    }
}

// //C оператором НЕ

// if (!(age <= 14) && !(age >= 90)) {
//     alert("Число принадлежит интервалу");
// } else {
//     alert("Число не принадлежит интервалу");
// }

// //Без оператора НЕ

// if (age >= 14 && age <= 90) {
//     alert("Число принадлежит интервалу");
// } else {
//     alert("Число не принадлежит интервалу");
// }