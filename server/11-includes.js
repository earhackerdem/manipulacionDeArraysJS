const pets = ['cat','dog','bat']

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if(element === 'dog'){
        includeInArray = true;
        break;
    }
}

console.log('for',includeInArray)

const rta = pets.includes('dog')

console.log('rta',rta)

function solution(word,query){
    return word.toLowerCase()
    .includes(query.toLowerCase());
}


const rta1 = solution("Ana lava la tina", "ana");
const rta2 = solution("Santiago", "tiago");
const rta3 = solution("Nicolas", "ana");

console.log('rta1',rta1)
console.log('rta2',rta2)
console.log('rta3',rta3)