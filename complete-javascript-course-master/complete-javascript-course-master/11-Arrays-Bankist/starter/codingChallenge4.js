'use strict';
const dogs = [
    { weight : 22, curFood:250 , owners : ["Alice", 'Bob']},
    { weight : 8, curFood:200 , owners : ["Matlida"]},
    { weight : 13, curFood:275 , owners : ["Sarah", "John"]},
    { weight : 32, curFood:340 , owners : ["Micheal"]},

];

//1.
dogs.forEach(dog => dog.recFood = Math.trunc(dog.weight ** 0.75 *28))
console.log(dogs);

//2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'))
console.log(`Sarah dog is eating  ${dogSarah.curFood > dogSarah.recFood ? 'too much' : "too little "}`);

//3.
const ownerEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners)
console.log(ownerEatTooMuch)
const ownerEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners)
console.log(ownerEatTooLittle);

//4.
console.log(`${ownerEatTooMuch.join(' and ')} dogs eat too much`);
console.log(`${ownerEatTooLittle.join(' and ')} dogs eat too little`);

//5.
console.log(dogs.some(dog => dog.curFood === dog.recFood)); 

//6.
console.log(dogs.some(dog => dog.curFood > dog.recFood *0.9 && dog.curFood < dog.recFood *1.10 ));

//7.
console.log(dogs.filter(dog => dog.curFood > dog.recFood *0.9 && dog.curFood < dog.recFood *1.10 ));

//8. sort recommended food portion in an ascnding order
const dogsSorted = dogs.slice().sort((a,b)=> a.recFood - b.recFood)
console.log(...dogsSorted)