'use strict';
// const bookings = []
// const createBooking = function(flightNum, numPassengers= 1,price = 199){
//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking)
// }
// createBooking('LH123',3,999);

// /////////////Function accepting callback funvtions/////////////////////

// const oneWord = function(str){
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function(str){
//      const [first, ...others]= str.split(' ');
//      return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function(str, fn){

//     console.log(`Orginal string ${str}`);
//     console.log(`Function name ${fn.name}`)
//     console.log(`Transformed string : ${fn(str)}`)
   

// }

// transformer('javascript is the best!!', upperFirstWord)
// transformer('javascript is the best!!', oneWord);


///////////////Function returning other function//////////////
//Using arrow 
// const greet = (greeting) => (name) => 
//   console.log(`${greeting} ${name}`)

// const greetHey = greet('Hello');
// greetHey('Ankit');
// //Another way to call
// greet('Hello')('Shilpa')

//////////////call() and apply()/////////////////////////////////
// const Luftansa = {
//     airline: "LH",
//     iadata: 23,
//     bookings: [],
//     book(flightnum,name){
//         console.log(`${name} has booked ${this.airline}${flightnum} with flight code ${this.iadata}`);
//         this.bookings.push({flight: `${this.iadata} ${this.flightnum}`, name});
// }
// }
// Luftansa.book(234,'Shilpa Sharma');

// const euroWings = {
//     airline: "EW",
//     iadata: 13,
//     bookings: [],
//     book(flightnum,name){
//         console.log(`${name} has booked ${this.airline}${flightnum} with flight code ${this.iadata}`)
//     },
// }

// const airIndia = {
//     airline: "AI",
//     iadata: 10,
//     bookings: [],
//     book(flightnum,name){
//         console.log(`${name} has booked ${this.airline}${flightnum} with flight code ${this.iadata}`)
//     },
// }

// const book = Luftansa.book;
// book.call(euroWings,456,"Ankit sharma");


// //apply()
// const flightData = [123,"Kajal Sharma"]
// book.apply(airIndia, flightData);

/////////////////////////Bind()///////////////////////

////////////////IIFE////////////////////////////
// (function(){
//     console.log(`Run once`)
// })()

/////////////////////////////CLOSURE////////////////////////////////////
//Example 1
let f ;
 const g = function(){
    const a = 23;
    f = function(){
        console.log(`${a*2}`)
    }
 }
 const h = function(){
    const b = 12;
    f = function(){
        console.log(`${b*2}`)
    }
 }
 g();
 f();
 console.dir(f)
//Reassign function 
 h();
 f();
 console.dir(f)


//Example 2
const boardPassengers = function(n, wait){
    const perGrp = n/3;
    setTimeout(function(){
        console.log(`All passengers on board now with ${n}  passengers`);
        console.log(`there are 3 gropus, ${perGrp} per group passengers`)
    }, wait * 1000);
    console.log(`Will start borading in ${wait} seconds`)
}
boardPassengers(180, 5);












