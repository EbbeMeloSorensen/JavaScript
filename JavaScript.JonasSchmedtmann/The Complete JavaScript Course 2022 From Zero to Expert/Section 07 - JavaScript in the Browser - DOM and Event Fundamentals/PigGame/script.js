'use strict';

// SELECTING ELEMENTS (so we can use them as variables in the code)

// Velegnet, når vi skal have fat i et eller flere med en given klasse.
// Her bruges den imidlertid til at få fat i et element med et givet id.
// Bemærh hash tagget, som svarer til en hash selector
const score0Element = document.querySelector('#score--0');

// funktionen document.getElementById er mere velegnet, når vi skal have fat i ét element med et givet id
const score1Element = document.getElementById('score--1');

const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Global state variables
// (they just need to be declared here, so they will be global.
// no need to specify type since that can easily change in JavaScript
// like in python)
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // STARTING CONDITIONS
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;
  diceElement.classList.add('hidden');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  // For hver af de næste to linier fjernes klassen fra det givne
  // element, hvis den er i klasselisten, og ellers tilføjes klassen
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

// ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener('click', function () {
  if (!playing) {
    return;
  }

  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;
  console.log(dice);

  // 3. Check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;

    // Her genererer vi det klassenavn, der skal bruges
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  if (!playing) {
    return;
  }

  // 1. Add current score to active player's score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // 2. Check if player's score is >= 100
  if (scores[activePlayer] >= 100) {
    // Finish the game
    playing = false;
    diceElement.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    switchPlayer();
  }
});

// Here, we don't declare an anonymouse function like for the
// other event handlers. Instead we pass an existing function.
// Notice that functions are basically objects that can be passed
// to other functions as parameters, resembling how delegates can
// be passed in C#
btnNew.addEventListener('click', init);

init();
