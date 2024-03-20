// Strict mode
'use strict';

let a = 4;
if (false) {
    b = 5; // Example of an ilegal construct in strict mode
           // If this line is executed (it isn't because of the if(false) statement)
           // Then an error message will be shown in the Console window in DevTools in the browser 
}

// Functions
// "functions are the fundamental building blocks of real world javascript applications"

// A call to a function that is declared later (only legal with functions - not function expressions)
// This is facilitated by a proces known as "hosting"
trivialFunction();

// A trivial function that doesn't take parameters and doesn't return anything
function trivialFunction() {
    console.log('Hello');
}

// A function that takes 2 arguments (of "any" type) and returns a value
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

if(false) {
    console.log(calcAge(1980)); // Ilegal - calcAge (a function expression) is not declared yet
}

// Here, we have a socalled function expression (so it can be used where an EXPRESSION is expected)
// We declare a variable and assign it an anonymous function (without a name)
// A function is actually a VALUE in Javascript
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// We can then call the function expression like this
// Notice how it resembles a delegate in C#
console.log(calcAge2(1975));

// Notice that functions can be called before they are declared, whereas function expressions cannot

// Here, we have a socalled arrow function
// Like a function expression, it resembles a delegate in C#
const calcAge3 = birthYear => 2037 - birthYear;

console.log(calcAge3(1980));

// Another arrow function, This one takes multiple arguments and uses another arrow function
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge3(birthYear);
    const yearsLeft = 70 - age;
    return `${firstName} retires in ${yearsLeft} years`;
}

console.log(yearsUntilRetirement(1975, 'Ebbe'));

// Notice that arrows don't get a "this" keyword, contrary to what is the case for the
// more traditional functions and function expressions, so you cannot always use arrow functions

// Arrays
const array1 = [7, 9, 13, 'a', 'b']; // Declaring an array using "literal" syntax
const array2 = new Array(1, 2, 3); // Other way of declaring an array
const item1 = array1[0]; // Index operator
const l = array1.length;
array1[2] = 14; // Notice that we can manipulate an array even though it is declared as const 
                // (because only the primitive types are immutable)
console.log(array1);

array1.push('c'); // Add element to the end of the array. It returns the new length of the array
array1.unshift(3); // Add element to the start of the array. Like push, it returns the new length of the array
const lastElement = array1.pop(); // Remove and return the last element of the array
const firstElement = array1.shift(); // Remove and return the first element of the array (like pop)
const indexOfA = array1.indexOf('a'); // Retrieve index of given element (using strict equality). Returns -1 if the element is not found
const array1IncludesA = array1.includes('a'); // Determine if an array includes a given element (using strict equality)

// Objects
// An object in JavaScript is basically a collection of key/value pairs. Object is probably the most fundamental concept in the JavaScript language
// It resembles the class concept from other languages, but even though an object resembles an instance of
// a class, it doesn't require a class definition

// An object with 5 properties. Declared by means of the socalled "object literal" syntax
// (there are multiple alternative ways) 
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'] 
}

console.log(jonas);

// Retrieving and manipulating properties of objects
// .. using dot notation
console.log(jonas.firstName);
// .. using bracket notation
console.log(jonas['firstName']); 
// With bracket notation, you may use an expression that produces a string. "More common than you might think" 
console.log(jonas['first' + 'Name']); 
// NB: If you try to access a non-existing property of an object, you get an "undefined" error.
//     this may be used in control flow, e.g. by exploiting that undefined is a falsy value, as illustrated below
//     notice how it resembles duck typing from e.g. python
const interestedIn = prompt('What do you want to know about Jonas?');
if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);    
} else {
    console.log("Sorry, that property doesn't exist");    
}

// In Java Script, you can easily add new properties to an existing object!
jonas.location = 'Portugal';
console.log(jonas.location);

// Object Methods

// In Javascript, objects can have methods.
// Notice the use of the "this" keyword, which refers to "the caller of the method",
// i.e. the ebbe object.
// Also notice how a new property (age) is created for the object in this example.
// This may e.g. be convenient for avoiding multiple heavy computations  
const ebbe = {
    birthYear: 1975,
    calcAge: function(currentYear) {
        this.age = currentYear - this.birthYear;
        return this.age;
    }
}

// You can then call the method like this
console.log(ebbe.calcAge(2022));
// Like with ordinary (non-function) properties, you can also use bracket notation
console.log(ebbe['calcAge'](2022));
console.log(ebbe.age);

// Just as you can add new properties to an object, I guess you can also easily add new methods,
// by adding a key/valye pair, where the value is a function (remember that in JavaScript, functions are values)

// Notice that an array is also an object, so even though you can declare objects without a
// class definition, it seems you can also declare objects by means of a class definition
// of some kind

// Loops

// For loop
for (let i = 0; i < 5; i++) {
    console.log(`iteration ${i}`)
}

// While loop
let i = 0;
while (i < 5) {
    console.log(`iteration ${i}`)
    i++;
}