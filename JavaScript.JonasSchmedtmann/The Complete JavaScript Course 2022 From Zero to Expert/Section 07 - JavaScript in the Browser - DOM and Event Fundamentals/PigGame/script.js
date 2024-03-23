'use strict';

// Selecting elements, so we can use them as variables in the code

// Velegnet, når vi skal have fat i et eller flere med en given klasse.
// Her bruges den imidlertid til at få fat i et element med et givet id.
// Bemærh hash tagget, som svarer til en hash selector
const score0Element = document.querySelector('#score--0');

// Velegnet, når vi skal have fat i ét element med et givet id
const score1Element = document.getElementById('score--1');

score0Element.textContent = 0;
score1Element.textContent = 0;
