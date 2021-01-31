const array = [1, 2, 3, 4, 6, 0];

const cycle = () => {
    let option = document.getElementById("variant").value;
    switch (Number(option)) {
        case 1:
            for (let i = 0; i < array.length; i++) {
                alert(array[i]);
            }
            break;
        case 2:
            for (let i in array) {
                alert(array[i]);
            }
            break;
        case 3:
            for (let i of array) {
                alert(i);
            }
            break;
        case 4:
            array.forEach(i => alert(i));
            break;
        case 5:
            let i = array.map((i) => { alert(i) });
            // let i = array.map(function(num) {
            //     alert(num);
            // });
            break;
        case 6:
            alert(1);
            break;
    }
}