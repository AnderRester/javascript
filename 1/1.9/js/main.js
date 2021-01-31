const username = prompt("Введите имя пользователя", "User");

alert(`Привет ${username}`);

const result = confirm("Вы знакомы с JavaScript");
if (result == true) {
    alert("Молодец");
} else {
    alert("Можно начать изучение прямо сейчас");
}