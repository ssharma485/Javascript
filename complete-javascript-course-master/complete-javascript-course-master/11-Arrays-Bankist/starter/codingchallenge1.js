'use strict'
const dogJulia = [3,5,2,12,7];
const dogKate = [4,1,15,8,3];
const checkdogs = function(Julia, kate){
  const correctdogJulia =  Julia.slice(1,3);
   console.log(correctdogJulia);
const dogs = correctdogJulia.concat(dogKate);
console.log(dogs);
dogs.forEach(function(dog,i)
{
console.log(`Dog number ${i + 1} is ${dog >= 3 ? "an adult" : " still a puppy " }, and is ${dog} years old`)
})
}
checkdogs(dogJulia,dogKate);



