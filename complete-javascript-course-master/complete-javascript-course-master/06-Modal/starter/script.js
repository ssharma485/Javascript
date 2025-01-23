'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const show_modal = document.querySelectorAll('.show-modal');
const closemodal = document.querySelector('.close-modal');

const close_modal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0; i < show_modal.length; i++){
  show_modal[i].addEventListener('click',function(){
    console.log("clicked");
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  })
}
closemodal.addEventListener('click',close_modal);
overlay.addEventListener('click',close_modal)

//keypress event, click will happen everywhere
document.addEventListener('keydown',function(esc){

if(esc.key==='Escape' && (!modal.classList.contains('hidden'))){
   close_modal()
}
})