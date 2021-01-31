const user = {
    name: "John",
    pass: "ads2123"
}

const username = prompt("Введите имя пользователя", "User");
const password = prompt("Введите пароль", "password");

if (user.name == username && user.pass == password) {
    alert("Привет");
} else {
    if (user.name == username && user.pass != password) {
        alert("Неправильный пароль");
    } else {
        if (user.name != username && user.pass == password) {
            alert("Неправильный username");
        } else {
            alert("Ошибка Валидации");
        }
    }
}