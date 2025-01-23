'use strict';
// document.querySelector(".message").textContent = "Correct Number!!"
// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 20
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random()*20)+1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',function(){
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess);
if(!guess){
    document.querySelector('.message').textContent = "No Number!!";
}else if(guess === secretNumber){
   document.querySelector('.message').textContent = "Correct Number!!";
   document.querySelector('body').style.backgroundColor = '#06b347';
   document.querySelector('.number').style.width = '30rem';
   document.querySelector('.number').textContent = secretNumber;
   //highcore implementation
   if(score > highscore){
    document.querySelector('.highscore').textContent = score;
   }

}else if(guess > secretNumber){
    if(score > 1){
        document.querySelector('.message').textContent = "TOO HIGH!!";
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = "YOU LOST!!"
        document.querySelector('.score').textContent = 0;
    }
    
}else if(guess < secretNumber){
    document.querySelector('.message').textContent = "TOO LOW!!";
    score--;
    document.querySelector('.score').textContent = score;
}
});

document.querySelector('.again').addEventListener('click',function(){
   score = 20;
   secretNumber = Math.trunc(Math.random()*20)+1;
   document.querySelector('.message').textContent = "Start guessing....";
   document.querySelector('.guess').value = " ";
   document.querySelector('.score').textContent = score;
   document.querySelector('.number').textContent = "?";
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';
  
})
