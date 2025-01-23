//Activating Strict Mode
// 'use strict';

//functions
// function logger(){
//     console.log("This is a Function")
//     }
//     logger(); // calling, running, invoking a function

    // function fruitProcessor(apples, oranges)
    // {
    //     console.log(apples, oranges);
    //     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    //     return juice;
    // }
    // const appleJuice = fruitProcessor(3,4); // arguments
    // console.log(appleJuice);

//
//Arrow function
// const calAge = birthyear => 2037 - birthyear;
// // console.log(calAge(1991));
// const age = calAge(1991);
// console.log(age);

//calculate Retirement Years left
// const retirementYearsLeft = (birthyear, firstname) =>{
//    const age = 2023 - birthyear;
//     const retirement = 60 - age; 
//     //  return retirement;
//      return `${firstname} is going to retire in ${retirement} years`;
// }
// console.log(retirementYearsLeft(1993, 'Shilpa'));

//Function calling other functions
// function fruitPiece(fruit){
//  return fruit*4;
// }

// function fruitProcessor(apples, oranges){
//     const applePiece = fruitPiece(apples); // function calling other function
//     const orangePiece = fruitPiece(oranges); // function calling other function
//     const Juice = `${applePiece} apple piece and ${orangePiece} orange piece were used to make Juice`;
//     return Juice;
// }
// const finalJuice = console.log(fruitProcessor(2,3));



//Array
// const freinds = ["Shilpa", "Kajal", "Sunita", "dinesh"];
// console.log(freinds);
// const  years = new Array(1223,1234,123455);
// console.log(years);
// console.log(years[0]); // gives first element
// console.log(freinds.length); // length of array (starts from 1)
// console.log(freinds[freinds.length-1]); //last element
// freinds[0]= 'Ankit'; // Replace "shilpa" with "ankit"
// console.log(freinds);
// const firstName = 'Shilpa'
// const shilpa = [firstName, "Sharma", '2024 - 1993', freinds]
// console.log(shilpa);
// console.log(shilpa.length) // 5

//Calculate ages based on birthyear 
// const calAge =  function(birthyear){
//     return 2024 - birthyear
// }
// const years = [1991, 1992, 1993, 1994]
// // const age1 = calAge(years[0]); // first element calculate
// // const age2 = calAge(years[1]); // second element calculate
// // const age3 = calAge(years[years.length - 1]); // last element calculate
// // console.log(age1,age2,age3);
//  //putting them in array
//  const ages = [calAge(years[0]),calAge(years[1]), calAge(years[years.length - 1])];
//  console.log(ages);


//array Method
// const freinds = ["Shilpa", "Kajal", "Sunita", "dinesh"];
// freinds.push("Ankit"); // add at end
// console.log(freinds); 
// const newLength = freinds.push("Asha"); // will return length.
// console.log(newLength);
// freinds.unshift("Rakesh"); // add "rakesh" at the beginning.
// console.log(freinds); 
// freinds.pop(); // removes last element from array, asha will be removed
// console.log(freinds);
// const popped = freinds.pop(); // will print "ankit" as Ankit is removed now.// shows which element is removed
// //Asha was already reoved , this is new one.
// console.log(popped);
// freinds.shift(); // Removed first element // rakesh will be removed
// console.log(freinds);
// console.log(freinds.indexOf("Shilpa"));// which give 0 , as "shilpa" is positioned at 0 
// console.log(freinds.indexOf("Neha")); // will -1 as "Neha " is not in array
// console.log(freinds.includes("Neha")); // false as Neha is not there in array
// console.log(freinds.includes("Kajal")); // True as Kajal is there



//Objects
// const shilpa = 
// {
//     firstName : 'Shilpa',
//     lastName : 'Sharma',
//     age : 2024 - 1993,
//     friends : ['Preeti', 'Saurabh', "Sushant"]
// }
// console.log(shilpa);
// console.log(shilpa.lastName);//Sharma
// console.log(shilpa['lastName']); // Sharma
// const nameKey = 'Name';
// console.log('first' + nameKey); //Shilpa
// console.log('last' + nameKey); //Sharma
// const shilpaDetail = prompt(`What do you want to know about Shilpa "firstName?","lastName?","age?","friends?"`);
// // console.log(shilpa[shilpaDetail]);
// if(shilpa[shilpaDetail]){
//     console.log(shilpa[shilpaDetail]); 
// }else {
//     console.log(`Wrong Request !! choose between "firstName?","lastName?","age?","friends?"`)
// }

//write "Shilpa has 3 friends, and her best friend is Preeti."
// const shilpa = 
// {
//     firstName : 'Shilpa',
//     lastName : 'Sharma',
//     age : 2024 - 1993,
//     friends : ['Preeti', 'Saurabh', "Sushant"]
// }
//console.log(`${shilpa.firstName} has ${shilpa.friends.length} and her best friend is ${shilpa.friends[0]}`);

//Object Method
// const shilpa = 
// {
//     firstName : 'Shilpa',
//     lastName : 'Sharma',
//     birthYear : 1993,
//     job: "engineer",
//     friends : ['Preeti', 'Saurabh', "Sushant"],
//     hasDriversLicense : false,
//     // calAge : function(){
//     //    return 2024 - this.birthYear;
//     // }
//     calAge : function(){
//         this.age = 2024 -  this.birthYear;
//         return this.age;
//     },
//     getSummary: function(){
//         return `${this.firstName} is an ${shilpa.job} who ${this.hasDriversLicense ? 'does' : "doesn't"} have a drivers License`
//     }
// };
// // // console.log(`Shilpa age is ${shilpa.calAge()}`);
// // console.log(shilpa.age);
// console.log(shilpa.getSummary())

//Iteration for loops
// for(let i = 1; i <=10; i++){
//     console.log(`${i}`)
// }

//Looping array, breaking and continuing
// const shilpa = ['shilpa', 'kajal', 'sunita', 'dinesh', 1992, 2024-1993];
// const types = [];
// for(let i =0; i < shilpa.length; i++){
//     console.log(shilpa[i]);
// //1. filling array with typeof 

// types[i] = typeof shilpa[i]

// //2. filling array with push

// types.push(typeof shilpa[i]);
// }
// console.log(types)
//calculate ages and put them in new array
//  const years = [1993,2007,1969,2020];
//  const ages = [];
//  for(let i = 0; i < years.length; i++){
// ages.push(2024 - years[i]);
   
//  }
//  console.log(`ages of person are ${ages}`)
//continue and break
//Print array elements that are only string
// const shilpa = ['shilpa', 1881, 'kajal', true, 987, 'sunita', 'dinesh'];
// for( let i= 0; i < shilpa.length; i++){

//     if(typeof shilpa[i] !== 'string')
//         continue;
//         console.log(shilpa[i]);
// }
///When number is found stop the array
// const shilpa = ['shilpa', 1881, 'kajal', true, 987, 'sunita', 'dinesh'];
// for(let i =0 ; i< shilpa.length; i++){
//     if(typeof shilpa[i] === 'number')
//     break;
// console.log(shilpa[i])
// }




//Looping backwards and loop inside loop
// const shilpa = ['shilpa', 1881, 'kajal', true, 987, 'sunita', 2024-1993,'dinesh',['ankit', 'asha', 'rakesh']];
// //looping backwards
// for( let i = shilpa.length - 1; i >= 0; i--){
//  console.log(i,shilpa[i])
// }
//Loop inside loop
// for(let exercise = 1; exercise < 3; exercise++){
//     console.log(`Start Exercise ${exercise}`);

//   for( let rep = 1; rep < 6 ; rep++){
//     console.log(` Exercise time is : ${rep}`)
//   }  
// }


//While
//Lets roll a dice and keep rolling it until its 6
let roll = Math.trunc(Math.random() * 6) + 1; // need to give a number first
while( roll !== 6){
    console.log(`roll ${roll}`);
    roll = Math.trunc(Math.random() * 6) + 1; //Need new roll if number is not 6
    if(roll === 6){
        console.log(`Loop will end now coz you got ${roll}`)
    }

}
 









    