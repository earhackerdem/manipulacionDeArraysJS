const words = ["spray", "elites", "limit", "apple", "exuberant"]

const newArray = [];

for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if(item.length>=6){
        newArray.push(item);
    }    
}

console.log('newArray',newArray)
console.log('original',words)

const rta = words.filter( item => item.length >=6);
console.log('rta',rta)
console.log('original',words)

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    }, {
        customerName: "Nicolas",
        total: 6023,
        delivered: false,
      },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    }
];

const rta2 = orders.filter(item => item.delivered && item.total>=100);
console.log('rta2',rta2)

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

const valentinaOrders = orders.filter(item => item.customerName.includes('Valentina'));
console.log('nico orders',valentinaOrders);
console.log(search('Nico'))
