const items = [1, 3, 2, 3, 3, 3, 10, 1, 2, 6, 7, 5];

const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1
    }
    return obj
}, {})

console.log(rta);



const data = [
    {
        name: "Nicolas",
        level: "low",
    },
    {
        name: "Andrea",
        level: "medium",
    },
    {
        name: "Zulema",
        level: "hight",
    },
    {
        name: "Santiago",
        level: "low",
    },
    {
        name: "Valentina",
        level: "medium",
    },
    {
        name: "Lucia",
        level: "hight",
    },
];

const rta1 = data
    .map(item => item.level)
    .reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item] = obj[item] + 1
        }
        return obj
    }, {})

console.log(rta1)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 23, 23, 3, 32, 56, 19, 23, 11, 16, 32, 24, 15, 18, 20];

const numbersInRange = numbers.reduce((holder, number) => {
    if (number >= 1 && number <= 4) holder["1-4"] += 1;
    else if (number >= 5 && number <= 8) holder["6-8"] += 1;
    else if (number >= 9 && number <= 10) holder["9-10"] += 1;
    return holder;
},
    {
        "1-4": 0,
        "6-8": 0,
        "9-10": 0
    }
)

console.log(numbersInRange)