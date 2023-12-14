'use strict';

// Selecting elements
const score0Elem = document.querySelector('#score--0');
const score1Elem = document.getElementById('score--1');
const curr0Elem = document.querySelector('#current--0');
const curr1Elem = document.querySelector('#current--1');

const diceElem = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0Elem.textContent = 0;
score1Elem.textContent = 0;
diceElem.classList.add('hidden');

let currScore = 0;


// Rolling the die funcionality
btnRoll.addEventListener('click', function() {
    // 1. Generate a roll
    const die = Math.trunc(Math.random() * 6) + 1;
    console.log(die);

    // 2. Deisplay die
    diceElem.classList.remove('hidden');
    diceElem.src = `dice-${die}.png`;

    // 3. Chck for rolled 1: if yes -> switch player 
    if (die != 1) {
        // add die to curr score
        currScore += die;
        curr0Elem.textContent = currScore;  // change for curr player 
    } else {

    }

    
});
