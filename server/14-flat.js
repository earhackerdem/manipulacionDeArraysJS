const matriz = [
    [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]],
    [4, 5, 6],
    [7, 8, 9]
];
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
const rta = matriz.flat(3);
console.log('for', newArray)
console.log('flat', rta)

function aplanar(list) {
    let newList = [];
    if (typeof list !== "object") return [list];
    list.forEach(element => {
        newList = newList.concat(aplanar(element))
    });
    return newList;
}

console.log(aplanar(matriz))