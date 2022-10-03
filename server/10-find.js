const numbers = [1, 30, 49, 29, 10, 13];

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 31230) {
        rta = element;
        break;
    }
}

console.log('for', rta)

const rta2 = numbers.find(item => item === 30123);

console.log('find', rta2)

const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];

const rta3 = products.find(item => item.id === '🍔')
console.log('find',rta3)

const rta4 = products.findIndex(item =>item.id ==='3')
console.log('findIndex',rta4)