'use strict';
//Function
// function describeCountry(country, population, capitalCity){
   
//    const details = `${country}  has ${population} million population with its capital city ${capitalCity}`;
//    return details;
// }
// const India = console.log(describeCountry('India', 12, 'Delhi'));
// const China = console.log(describeCountry("China", 2, "shanghai"));
// const USA = console.log(describeCountry("USA", 5, "DC"));


//function Declarartion vs Function Expression
//function Declaration
//  function percentageOfWorld1(population){    
// const countryPopulation = (population/7900)*100;
//  return countryPopulation;
//  const worldPopulation1 = `${country} has ${population} million people, so it's about ${countryPopulation} of
//  the world population`;
//  return worldPopulation1;
// }
//  console.log(percentageOfWorld1("china", 1441));
//  console.log(percentageOfWorld1("India",1776));
//  console.log(percentageOfWorld1("Africa", 1332));
//function expression
//  const percentageOfWorld2 = function(country, population){
//     let countryPopulation2 = (population/7900)*100;
//     const worldPopulation2 = `${country} has ${population} million people, so it's about ${countryPopulation2} of the world population`;
//     return worldPopulation2;
//  }
//  console.log(percentageOfWorld2("China",1441));
//  console.log(percentageOfWorld2("India",1551));
//  console.log(percentageOfWorld2("africa",1771));




//Arrow Functions
//  const percentageOfWorld3 = (country, countryPopulation3) =>{ 
//     const countryPopulationPercentage = (countryPopulation3/7900)*100;
//     const countryPopulation =`${country} has ${countryPopulation3} million people, so it's about ${countryPopulationPercentage} of the world population`;
//      return countryPopulation;
//  }
//  console.log(percentageOfWorld3("china", 1441));

 
//Functions Calling Other Functions
// function describePopulation(country, population){
//   const percentage = percentageOfWorld1(population);
//   const describe = `${country} has ${population} million people, so it's about ${percentage} of the world population`;
//    console.log (describe);
// }
// describePopulation("china", 1441);



//Introduction to array




