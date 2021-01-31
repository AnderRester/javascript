const dataBase = [
    first = {
        name: "First",
        marks: [8, 10, 7, 5, 8]
    },
    second = {
        name: "Second",
        marks: [8, 10, 4, 5, 4]
    },
    third = {
        name: "Third",
        marks: [8, 9, 7, 5, 6]
    },
    firth = {
        name: "Firth",
        marks: [8, 10, 7, 5, 5]
    },
    fifth = {
        name: "Fifth",
        marks: [8, 10, 9, 10, 10]
    }
]

// for (let i = 0; i < dataBase.length; i++) {
//     alert(dataBase[i].marks.length);
// }


// for (let i = 0; i < dataBase.length; i++) {
//     unitAverage = Math.Average(dataBase[i].marks.length);
//     alert(1);
// }

let unitAverage = 1;
const average = () => {
    for (let i = 0; i < dataBase.length; i++) {
        for (let a = 0; a < dataBase[i].marks.length; a++) {
            unitAverage += dataBase[i].marks[a];
        }
        unitAverage = unitAverage / dataBase[i].marks.length;
        alert(unitAverage);
        unitAverage = 0;
    }
}
average(unitAverage);







// const sort = () => {
//     if (unitAverage < 5) {
//         alert(1);
//     }
// }