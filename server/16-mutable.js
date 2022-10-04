const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));
const productIndex = products.findIndex(item => item.id === '🍔');
if (productIndex !== -1) {
    myProducts.push(products[productIndex])
    products.splice(productIndex, 1);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productsAfterDelete = [];
products.forEach(product => {
    if (product.id !== '🍔') {
        productsAfterDelete.push(product)
    }
});

const products2 = products.filter(product => product.id !== '🍔');
console.log('products2', products2)
console.log('Products after delete', productsAfterDelete);

//Update

const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicioso'
    }
}

// const productIndex2 = productsV2.findIndex(item => item.id === update.id);
// productsV2[productIndex2] = { ...productsV2[productIndex2], ...update.changes }
// console.log(productsV2);

const productsV3 = [];
productsV2.forEach(food => {
    if (food.id === update.id) {
        food = { ...food, ...update.changes }
    }
    productsV3.push(food);
})

const productsV4 = productsV2.map( food => {
    if(food.id === update.id){
        return {...food,...update.changes}
    }
    return food;
})


console.log('productsV2',productsV2)

console.log('productsV3',productsV3)
console.log('productsV4',productsV4)