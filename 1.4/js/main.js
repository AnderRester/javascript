let str = prompt("Введите имя", "Некто");

function ucFirst(str) {
    let word = "";
    for (let i = 1; i <= str.length; i++) {
        word += str.charAt(i);
    }
    return (str.charAt(0).toUpperCase() + word);

}
alert(ucFirst(str));