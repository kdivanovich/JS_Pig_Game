'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

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

const scores = [0, 0];  // scores for player 1 and 2, access via scores[0/1]
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0; 
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}


// Rolling the die funcionality
btnRoll.addEventListener('click', function() {
        if (playing) {
            
        // 1. Generate a roll
        const die = Math.trunc(Math.random() * 6) + 1;
        //console.log(die);

        // 2. Deisplay die
        diceElem.classList.remove('hidden');
        diceElem.src = `dice-${die}.png`;

        // 3. Check for rolled 1: if 
        // no -> accumulate score, display it;   yes -> switch player 
        if (die != 1) {
            // Add die to curr score
            currentScore += die;
            // Select the score dynamically based on which the current player is: 
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // Player switch
            switchPlayer();
        }    
    }    
});

btnHold.addEventListener('click', function() {
    if (playing) {
        // 1. Add curr score to active player's score 
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
        // 2. Check if score >= 100 -> finish game
        if (scores[activePlayer] >= 20) {            
            diceElem.classList.add('hidden');
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');  
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');  
        } else {
             // 3. Switch to next player
            switchPlayer();
        }
    }
});
