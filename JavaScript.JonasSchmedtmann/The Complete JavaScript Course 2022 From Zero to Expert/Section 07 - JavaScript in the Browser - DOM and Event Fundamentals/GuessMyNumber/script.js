'use strict';

// We can get hold of a html element by using the class attribute like this
// The document object is the entry point to the DOM: the Document Object Model
// Note that the DOM and methods and properties for DOM manipulation is not a part of Javascript
// Instead, they are part of WEB APIs implemented (in JavaScript) by browsers and which can be
// accessed by JavaScript code
const element1 = document.querySelector('.message');
console.log(element1.textContent);

// It is also common to use the id attribute like this
// (then you need to use the hash character instead of the dot)
const element2 = document.querySelector('#bamse');
console.log(element2.textContent);

// Manipulation of DOM elements
//element2.textContent = 'Guess my number';
//document.querySelector('.number').textContent = 13;
//document.querySelector('.score').textContent = 20;

// Getting and manipulating the value of an input element
//document.querySelector('.guess').value = 7;
console.log(document.querySelector('.guess').value);

// State variables
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

// Helper function for displaying a message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Use an event listener for associating a function expression with the
// click event of a given button
// Notice that the element in question has 2 class names, written like this
// class="btn check"
// We use the "check" class name since it is the least generic one
// (btn is the most generic name)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // If the input element is empty it will return the number zero,
  // which is a falsy value
  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    if (score > 1) {
      score--;
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
});
