'use strict';

// First, establish references to the elements that we're gonna access from the javascript file

// Notice that querySelector only returns the first element in case there are multiple elements with the given class.
// On the other hand, querySelectorAll returns a list of all elements with the given class
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// The overlay, when shown, just causes the body to appear blurred

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Assign a button click handler for each of the 3 buttons that removes the "hidden" class from two of the elements
// in the html file. Notice that the hidden style is defined in the css file.
// In html/css/javascript, a "class" is apparently "an aggregation of styles" placed in the css file
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// "Usually, when you need to manipulate styles on a page, then always just export the styles into a class,
// and then use the class like in this example, i.e. you add and remove classes from elements in the html page
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Add a "global" listener for the keydown event. In the handler function, check if escape was pressed while the modal window
// is shown, and if so, close it
document.addEventListener('keydown', function (e) {
  // Log the keyboard event
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
