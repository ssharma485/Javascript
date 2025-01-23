'use strict';







// Data needed for first part of the section
const restaurant = {
  name1: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your pasta with ${ing1},${ing2} and ${ing3}`);
  },
  orderDelivery: function({starterIndex = 4, mainIndex = 4, time, address}){
    console.log(
      `HEre is ur delivery at ${time} with ${this.starterMenu[starterIndex]} and 
      ${this.mainMenu[mainIndex]} on address ${address}`

    );
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPizza : function(mainIngridient, ...otherIngridient){
  console.log(mainIngridient);
  console.log(otherIngridient);
  }
  
};


// restaurant.orderDelivery({
//   time: "10:30 PM",
//   starterIndex: 2,
//   mainIndex: 2,
//   address: "Dwarka"
// });
// restaurant.orderPizza("mushrooms","onions","olives", "spinach");

//const ingredients = [prompt('Enter Ing1'),prompt('Enter Ing2'),prompt('Enter Ing3')];
// restaurant.orderPasta(...ingredients);



////////////////////////////////destructing array////////////////////////////////////////////


// const arr = [1,2,3];
// const [q,w,e] = arr;
// console.log(q,w,e);

// //Switching variable
// let [main1, secondary] = restaurant.categories;
// [main1, secondary] = [secondary, main1]
// console.log(main1,secondary);

// //write a function to order food.
// const [starter, mainCourse] =  restaurant.order(2, 0);
// console.log(starter, mainCourse)

// //nestedArray destruting
// const arrNested = [1,2,[3,4]];
// const [first, ,[third,fourth]] = arrNested;
// console.log(first,third,fourth);


////////////////////////////////destructing objects////////////////////////////////////////////
// const {name1,openingHours, categories} = restaurant;
// console.log(name1, openingHours, categories);

//changing property names to variable names
// const {name1: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);

//give default value 
// const {menu = [], starterMenu : starter = []} = restaurant;
// console.log(menu, starter );

//mutating variables while destructing objects
// let a = 111;
// let b = 4;
// const obj = {a: 23, b : 8};
// ({a,b} = obj);
// console.log(a,b);

//Nested object
//  const {fri: {open, close}} = restaurant.openingHours;
//  console.log(open, close)

///////////////////////////////////////////////Spread oerator/////////////////////////////////////////
// const arr = [4,5,6];
// const newArr = [...arr,1,2];
// console.log(newArr);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join two array
// const mainMenuCopyArr = [...restaurant.mainMenu, ...newArr];
// console.log(mainMenuCopyArr)

/////////////////////////objects//////////////////////////////////////
// const oldRestaurant = {...restaurant};
// // const newRestaurantCopy = {founder:"shilpa", ...restaurant}
// // console.log(newRestaurantCopy);

// // //Changing Restaurant NAme of new Reataurant created 
// // newRestaurantCopy.name1 = "New Restaurant";
// // console.log(newRestaurantCopy);



// //////////////////////////////////////////////REST OPERATOR///////////////////////////////////////////////

// // const arr = [1,2,3];
// // const [a,b, ...others] = [1,2,3,4,5];
// // console.log(a,b,others);

// ////Array///////
// const [pizza, pasta,...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza,otherFood);

// //Objcts////
// const {sat, ...wekkdays} = restaurant.openingHours;
// console.log(wekkdays);

// //Functions
// const add = function(...numbers){

//   let sum = 0;
//   for(let i = 0; i< numbers.length; i++)
//     sum += numbers[i];
//     console.log(sum);
  
// }
// add(2,3);
// add(2,3,4);
// add(2,3,4,5);

// const x = [1,2,3]
// add(...x);
// console.log(add());
//////////////////////////////////////Nullish value////////////////////////////////
// restaurant.numGuest = 0;
//  const guests = restaurant.numGuest ?? 10;
//  console.log(guests);

 //OR assignment operator
//  const res1 = {
//   numGuest : 12,
//   owner : "Shilpa"
//  };
//  const res2 = {
//  owner : "ankit"
  
//  }

// res1.numGuest ||= 10;
// res2.numGuest ||= 10;
// console.log(res1);
// console.log(res2);

 //Nullish assignment operator
//   const res1 = {
//   numGuest : 0,
//   owner : "Shilpa"
//  };
//  const res2 = {
//  owner : "ankit"
// };
// res1.numGuest ??= 10;
// res2.numGuest ??= 10;
// console.log(res1);
// console.log(res2);

 //AND assignment operator
//    const res1 = {
//   numGuest : 0,
  
//  };
//  const res2 = {
//  owner : "ankit"
// };
// res1.owner &&= "<ANONYMOUS>";
// res2.owner &&= "<ANONYMOUS>";
// console.log(res1);
// console.log(res2);

/////////////////////////////////Looping arrays////////////////////////////////////

//For of loop
// const allMenu = [...restaurant.starterMenu,...restaurant.mainMenu]
// for(const item of allMenu)
//   console.log(item);

//.entries()
// const allMenu1 = [...restaurant.starterMenu,...restaurant.mainMenu]
// for(const item of allMenu1.entries())
//   console.log(item);

//.entries() , 2nd example
// const allMenu1 = [...restaurant.starterMenu,...restaurant.mainMenu]
// for(const [i,el] of allMenu1.entries())
//   console.log(`${i + 1}: ${el}`);

/////////////////////////////////optional chaining//////////////////////////////////////////////

// console.log(restaurant.openingHours.mon?.open);

// const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun']

// for(const day of days){
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`we open on ${day} at  ${open}`)
// }

// //On Methods

// console.log(restaurant.order?.(0,1) ?? "Method does not exist");

// //On array

// const user = [{name: "Shilpa" , husband: "Ankit"}]
// console.log(user[0]?.name?? "List is empty");

////////////////////////////Looping object/////////////////////////////////////////////

//keys

// const properties = Object.keys(restaurant.openingHours);

// let openStr = `we are open on ${properties.length} days: `
// for(const day of properties){
//   openStr +=` ${day}`;
// }
// console.log(openStr)

// //values

// const values = Object.values(restaurant.openingHours);
// console.log(values);

// //entries

// const entries = Object.entries(restaurant.openingHours)
// //console.log(entries);

// for(const [key, {open, close} ] of entries){
//    console.log(`On ${key} we will open at ${open} and close at ${close}`)
//}

/////////////////////SETS/////////////////////////////////////////////////////////////////

// const ShilpaSet = new Set(["Kajal", "Neha", "Mouni", "Priya", "Shilpa", "Kajal"]);

// for(const x of ShilpaSet)
//   console.log(x);

//sorting for unique value in set and converting into array using spread operator.

// const ShilpaSet1 = new Set(["Kajal", "Neha", "Mouni", "Priya", "Shilpa", "Kajal", "Mouni"]);
// const ShilpaSetUnique = [...new Set(ShilpaSet1)];
// console.log(ShilpaSetUnique);


//////////////////////////////////MAPS/////////////////////////////////////////////////

// const rest = new Map();
// rest.set("name","Classico Italiano");
// rest.set(1, "Firesnse");
// rest.set(2,"Portugal")
// rest.set("categories", ["Italian", "Indian"]).set("open",10).set("close",17).set(true, "we are open").set(false,"we are closed");

// console.log(rest.get("name"));
// console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.delete(2));
// console.log(rest.has("categories"));
// console.log(rest.size);

// const quest = new Map([["question","What is the best programming language ?"],[1,"Python"],[2,'Java'],[3,"C++"],["correct",1  ],[true,"correct"],[false,"wrong"]])
// // console.log(quest);
// ///////////Convert object to map
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// // console.log(hoursMap);

// console.log(quest.get("question"))
// for(const [key, value] of quest){
//   if(typeof key === 'number')
//     console.log(`Answer ${key}: ${value}`)
// }
// const ans = Number(prompt("Your Answer"));
// console.log(ans)

// console.log(quest.get((ans == quest.get("correct"))))

// ////convert map to array
// console.log([...quest])


/////////////////////////////////////STRINGS/////////////////////////////////
// const airplane = "VGDDSSSSS";
// console.log(airplane.indexOf("G"))

// console.log(airplane.lastIndexOf("D"))
// console.log(airplane.slice(3,7))

// //check middle seat of airplane

// const middleSeat = function(seat){

//   const s = seat.slice(-1);
//   console.log(s);
//   if(s === "B" || s === "E")
//     console.log(`You have middle seat`);
//   else{
//     console.log(`You do not have middle seat`);
//   }

// }
// middleSeat("11B");
// middleSeat("10A");
// middleSeat("12C");

// //Compare userEmail
// const email = "hello@shilpa.io";
// const login =   '    HEllo@shiLPA.IO \n';
// const LowerEmail = login.toLowerCase();
// console.log(LowerEmail);
// const spaceEmail = LowerEmail.trim();
// console.log(spaceEmail);

// //Replace parts of strings
// const string = "hello hello hello";
// console.log(string.replaceAll("hello", "bye"));
// console.log(string.replace("hello", "bye"));

// const checkBAggage = function(items){
// const itemLowerCase = items.toLowerCase();
// console.log(itemLowerCase)
// if(itemLowerCase.includes("deadbody") ||itemLowerCase.includes("knife") || itemLowerCase.includes("gun"))
// {
//   console.log(`NOT ALLOWED`)

// }else{
//   console.log(`Allowed`)
// }
//   }
// checkBAggage("I have LAptop, food and dictionary");
// checkBAggage("I have Knife, gun and dictionary");
// checkBAggage("I have deadbody, food ");


// console.log("Shilpa Sharma".split(" "))
// const firstName = "Ankit";
// const lastName = "sharma"
// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);


// const capital = function(name){
//   const s = (name.split(" "));
//   console.log(s);
//   const UpperNames = [];
//   for(const n of s){
//    UpperNames.push(n[0].toUpperCase() + n.slice(1));
//   }
// console.log(UpperNames.join(" "));
// }
// capital("shilpa sharma")
// capital('ankit sharma')


// const sh = "Shilpa sharma";
// const newSH = sh.padStart(26, "_");
// console.log(newSH)

// const newSHend = sh.padEnd(26, "_");
// console.log(newSHend)














