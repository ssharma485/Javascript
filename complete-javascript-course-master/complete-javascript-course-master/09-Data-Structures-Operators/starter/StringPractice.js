'use strict'
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


// const newFlight = flights.split("+");
// console.log(newFlight);

for(const flight of flights.split("+")){
   
const [type,from, to, time] = flight.split(";");
// console.log(flight)
const output = `${type.startsWith('_Delayed') ? "🛑":" "} ${type.replaceAll('_',' ')} from ${from.slice(0,3).toUpperCase()} to ${to.slice(0,3).toUpperCase()} (${time.replace(':','h')})`.padStart(30);
console.log((output));

}