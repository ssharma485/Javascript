"use strict";
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    };


   //Print name and goal of players.
    
    // for(const [i, player] of game.scored.entries())
    //     console.log(`Goal ${i +1 } : ${player}`)

    //Calculate avg of odds

    // let avg = 0;
    // for(const x of Object.values(game.odds))
    //     avg = avg + x;
    //     avg = avg/(Object.values(game.odds).length);
    
    // console.log(avg)

    //Print 3 odds to console

    // for(const [team,  odd] of Object.entries(game.odds)){
    //     const teamstr = team === "x" ? "draw" : `vicotry of ${game[team]}`;
    //     console.log(`odd of ${teamstr}: ${odd}`);
    // }
        
        
