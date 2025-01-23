const gameevents = new Map([
   [ 17, 'Goal',],
   [ 36, 'substutution',],
    [47, 'Goal',],
    [61,"Yellow card"],
    [64,"Red Card"],
    [70, "substutution"],
    [80, "Goal"],
    [90, "Goal"]

]);

const events =[...new Set(gameevents.values())];
console.log(events);    


gameevents.delete(64);
console.log(gameevents);


console.log(`An event happened, on an average, every ${90/gameevents.size} mins`);


for(const [key, value] of gameevents){
   console.log(`[${key < 45 ? "FIRST" : "SECOND" } HALF] ${key} : ${value}`)
}