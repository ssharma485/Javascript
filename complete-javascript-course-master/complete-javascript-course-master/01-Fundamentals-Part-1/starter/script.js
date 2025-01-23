// //Mathematical operator 
// const now = 2037
// const ageJonas = now - 1991;
// const ageSarah = now - 2016;
// console.log(ageJonas, ageSarah);
// console.log(ageSarah /2, ageJonas **6);

// //Concat(+)
// const firstName = "Jonas";
// const lastName = "sharma";
// console.log(firstName +' ' + lastName);


// //Assigment operator (=, +=, ++, --)

//  let x = 12+4;
//  x += 10; // x = x + 10 = 26;
//  console.log(x);
//  x *= 4 // x = x * 4 = 104;
//  console.log(x);
//  x++; // x = x +1 = 105;
//  console.log(x);
//  x--; // x = x-1 = 104;
//  console.log(x);

//  //Comparison operator (boolean value)

//  console.log(ageJonas > ageSarah); // true
//  console.log(ageJonas  >= 18); // true
//  const fullAge = ageJonas >= 18; // true
//  // value is stored in fullAge.

//  console.log(now - 1991  > now - 2016); // true


 //if/else
//  const age = 18;
//  if(age >= 18){
//     console.log(`old enough for driving car`)
//  }else {
//     console.log(`Not old enough for driving car`)
//  }

//  const birthYear = 2018;
//  let century;
//  if(birthYear <= 2000){
//     century = 20
//     //console.log(`This person is born in ${century} Century`)
//  }else{
//     century = 21
//     //console.log(`This person is born in ${century} Century`)
//  }
//  console.log(`This person is born in ${century} Century`)

//  //Type Conversion and Type Coercion

//  //Type Conversion
//  const inputYear = '1991';
//  console.log(Number(inputYear)); // this will just give cnverted value but original is still string.
//  console.log(Number(inputYear) + 14); // need to convert in Number here.
// //Type Coercion
// console.log('i am ' + 23 + ' years old'); // 23 is converted into string.// same happens in template literals.
// console.log('23' - '10' - 3); // 10
// console.log('23' + '10' + 3); // 23103
// console.log('23' * '10' / 3);  //76.666666



// //Truthy and Falsy Values
// //Falsy
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// const money = 0;
// if(money){
//    console.log("dont spend it all")
// }else{
//    console.log('get a job !!')
// } 
// //result is get a job !! because 0 is falsy value hence else will get executed.

// //Equality operator : == vs ===
// const age = 18;
// if (age === 18){
//    console.log('You are an adult(strict)')
// }
// if (age == 18){
//    console.log('You are an adult(loose)')
// }

// const age1 = '18';
// if (age1 === 18){
//    console.log('You are an adult(strict)')
// }
// if (age1 == 18){
//    console.log('You are an adult(loose)')
// }


// // let fav = prompt('Whats your fav number?');
// // if (fav === 23){// it is not a number, it is string hence need to convert it to number or use == 
// //    console.log('23 is fav')
// // }else{
// //    console.log('try diff number') 
// //}
// let fav = Number(prompt('Whats your fav number?'));
// if (fav === 23){// it is not a number, it is string hence need to convert it to number or use == 
//    console.log('23 is fav')
// }else{
//    console.log('try diff number') 
// }
// if (fav !== 23){
//    console.log('why not 23?')
// }

//Switch statement
//  const day = "wednesday";
  
//  switch(day){
//     case 'monday': 
//         console.log('It is Monday');
//        break;
//     case 'tuesday' : 
//         console.log('It is tuesday');
//        break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('It is Wednesday');
//         console.log('It is thursay as well');
//         break;
//     case 'friday':
//         console.log("it is  start of weekend");
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('It is a holiday');
//             break;
//     default:
//         console.log("Not a valid day");
//         break;

//  }


//Ternary operator
 //const age = 18;
//  age >= 18 ? console.log("U can vote"):console.log('Cant vote');
//const age = 18;
//const vote = age >= 18 ? 'Vote' : 'Cant Vote';
 // console.log(vote);

 //Ternary operator with template literal
//  const age = 1
//  console.log(`i can drink ${age >= 18 ? 'wine' : 'water'}`);









 

