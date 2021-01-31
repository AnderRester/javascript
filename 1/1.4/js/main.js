const nickname = prompt("Введите имя", "Некто");

function ucFirst(nickname) {
    let word = "";
    for (let i = 1; i <= nickname.length; i++) {
        word += nickname.charAt(i);
    }
    return (nickname.charAt(0).toUpperCase() + word);

}
alert(ucFirst(nickname));