'use strict'

// const calaverageHumage = function(ages){
//     const humanages =  ages.map(age => (age <= 2 ? 2*age : 16 + age*4));
//     console.log(humanages)
//        const adults = humanages.filter(age => (age >= 18))
//        console.log(adults)
   
//   const average = adults.reduce((acc,age)=> acc + age,0)/adults.length;
//   return average;
//       };
//   const avg1 = calaverageHumage([5,2,4,1,15,8,3]);
//   console.log(avg1);

const calaverageHumage = function(ages){
const humanages = ages.map(age =>(age<=2 ? 2*age : 16+ age*4)).filter(age => age >=18).reduce((acc,age,i,arr)=>
    acc+age/arr.length,0);
console.log(`Humange ages average are : ${humanages}`)
}
const avg1 = (calaverageHumage([5,2,4,1,15,8,3]));
const avg2 = (calaverageHumage([6,7,8,2,15,18,9]));
