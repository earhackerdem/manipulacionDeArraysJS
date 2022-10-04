const { el } = require("date-fns/locale");

const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

const newArray =[...elements];
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}
//Concat juntara un array y si se le concatena un texto respetara el texto
const rta = elements.concat(othersElements);
console.log('rta',rta);
console.log('for',newArray);

const rta2 = [...elements,...othersElements]
//en caso de que se use el spread operator con un texto lo separara para utilizar cada carácter como un elemento
const rta3 = [...elements,...'random']
console.log(rta3)
console.log('rta2',rta2)


const rta4 = elements.concat('a text yo');
console.log(rta4)

//al hacerlo así inserta el arreglo como un elemento
elements.push(othersElements);
console.log('elements',elements)
//al hacerlo con el spread operator añadirá los elementos
elements.push(...othersElements);
console.log('elements',elements)