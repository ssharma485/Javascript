'use strict'

const calaverageHumage = function(ages){
  const humanages =  ages.map(age => (age <= 2 ? 2*age : 16 + age*4));
  console.log(humanages)
     const adults = humanages.filter(age => (age >= 18))
     console.log(adults)
 
const average = adults.reduce((acc,age)=> acc + age,0)/adults.length;
return average;
    };
const avg1 = calaverageHumage([5,2,4,1,15,8,3]);
console.log(avg1);


