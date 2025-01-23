'use strict';
//Hoisting in practice

// console.log(me);
// console.log(you);
// console.log(them);

// var me = "Shilpa";
// let you = "Kajal";
// const them ="world";

// console.log(addDeclaration(2,3));
// console.log(addExpresion(2,3));  // Hoisting //const variable // TDZ
// console.log(addArrow(2,3));

// function addDeclaration(a,b){
//     return a + b ;
// }


// const addExpresion = function(c,d){
//     return c + d;
// }


// const addArrow = (e,f) =>{
//     e+f;
// }

//This Keyword
//Simple function call
// const calAge = function(birthyear){
 //    const age = 2024 - birthyear;
//     console.log(this)
// }
// calAge(1993);


//arrow function call
// const calAgeArrow = birthyear =>{
//     const age = 2024 - birthyear;
//     console.log(this)
// }
// calAgeArrow(1991);



//Method
// const shilpa ={
//     name:"shilpa",
//     year: 1993,
//     calAge : function() {
//     console.log(2024 - this.year);
//     }
// }
// shilpa.calAge();

const shilpa ={
    name:"shilpa",
    year: 1993,
    calAge : function() {
    console.log(2024 - this.year);
    },
    greet : () => {
       
        console.log(`hey ${this.name}`)
    }
};

shilpa.greet();


