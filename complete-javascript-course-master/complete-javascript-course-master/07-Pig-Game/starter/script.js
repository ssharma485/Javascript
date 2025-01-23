'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//Initial conditions
 score0El.textContent = 0;
 score1El.textContent = 0;
let currentScore = 0;
diceEl.classList.add('hidden');
let activePlayer = 0;
 //storing both player score in array
let scores = [0, 0];
let playing = true;

//rolling dice functionality
btnRoll.addEventListener('click',function(){
    if(playing){
    //generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1 //give number between 0 to 6
    
    
    // display dice
    diceEl.classList.remove('hidden');
    //display dice image which is rolled
    diceEl.src = `dice-${dice}.png`;

    //check for 1 rolled : if true, switch to next player
    if(dice !== 1){
     //Add dice to current score
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore; 
      }else{
       //switch to next player
       document.getElementById(`current--${activePlayer}`).textContent = 0; 
       currentScore = 0; 
       activePlayer = activePlayer === 0 ? 1 : 0;
       player0El.classList.toggle('player--active');
       player1El.classList.toggle('player--active');
           
    }
}

});

btnHold.addEventListener('click',function(){
    if(playing){

     //Add current score to active player score 
      scores[activePlayer] = currentScore + scores[activePlayer];
      document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
     //check that score is atleast 100
      if((scores[activePlayer]) >= 20){
        //finish game
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player-active');
        playing = false;
        diceEl.classList.add('hidden');
      }else{
        //Switch player
     document.getElementById(`current--${activePlayer}`).textContent = 0; 
     currentScore = 0; 
     activePlayer = activePlayer === 0 ? 1 : 0;
     player0El.classList.toggle('player--active');
     player1El.classList.toggle('player--active');
      }
    }
     
     });

     btnNew.addEventListener('click',function(){
       score0El.textContent = 0;
       score1El.textContent = 0;
       currentScore = 0;
       current0El.textContent = 0;
       current1El.textContent = 0;
       diceEl.classList.add('hidden');
       activePlayer = 0;
       //storing both player score in array
      scores = [0, 0];
      playing = true;
      player0El.classList.remove('player--winner');
      player1El.classList.remove('player--winner');
      player0El.classList.add('player--active');
      player1El.classList.remove('player--active');
      
     })



