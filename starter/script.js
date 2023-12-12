'use strict';
// Getting Element 

const scoreEl0 = document.getElementById('score--0');
const scoreEl1 = document.getElementById('score--1');
const payer0El =  document.querySelector('.player--0');
const payer1El =  document.querySelector('.player--1');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1')

const diceEl=document.querySelector('.dice');

const  btnNew = document.querySelector('.btn--new');
const  btnRoll = document.querySelector('.btn--roll');
const  bntHold = document.querySelector('.btn--hold');  
;
// staring condition 
let scores , playing , currentScore , activePayer; 
const inati =function(){
    currentScore = 0;
    activePayer = 0; 
     scores = [ 0 , 0 ];
     playing = true;

    scoreEl0.textContent=0;
    scoreEl1.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;

    diceEl.classList.add('hidden');
    payer0El.classList.remove('player--winner');
    payer1El.classList.remove('player--winner');
    payer0El.classList.add('player--active');
    payer1El.classList.remove('player--active');
  

}
inati();

const switchPayer = function(){
    currentScore = 0;
    document.getElementById(`current--${activePayer}`).textContent = 0;
   activePayer = activePayer === 0 ? 1 : 0;

   payer0El.classList.toggle('player--active');
   payer1El.classList.toggle('player--active');
}
 



//  Redom Number
 
btnRoll.addEventListener('click', function(){
    if(playing){
    const dice = Math.trunc(Math.random()*6)+1;
    console.log(dice);

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1 ){
        currentScore += dice;
           document.getElementById(`current--${activePayer}`).textContent = currentScore; 
     }
    else{
      
     switchPayer();
    }
}
});
    
bntHold.addEventListener ('click', function(){
    if(playing){
    scores[activePayer]+=currentScore;

    document.getElementById(`score--${activePayer}`).textContent= scores[activePayer]; 



    if(scores[activePayer] >= 100){
     playing = false;
     diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePayer}`).classList.add('player--winner');

        document.querySelector(`.player--${activePayer}`).classList.remove('player--active');

    } else{switchPayer();}


}
});

btnNew.addEventListener('click', inati);