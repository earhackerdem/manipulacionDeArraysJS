const elements = ['Fire', 'Air', 'Water'];
const separator = '--';
let rtaFinal = '';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if (index !== elements.length - 1) {
        rtaFinal = rtaFinal + element + separator;
    }else{
        rtaFinal = rtaFinal + element;
    }
}
const rta = elements.join('--');
console.log('for', rtaFinal)
console.log('join', rta)

const title = 'Curso de manipulación de arrays'
const titleFinal = title.split(' ').join('-').toLowerCase();
console.log(titleFinal)