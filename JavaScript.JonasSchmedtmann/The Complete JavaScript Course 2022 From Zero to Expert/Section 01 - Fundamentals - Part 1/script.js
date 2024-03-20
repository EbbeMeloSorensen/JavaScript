let a = 1; // declaring a variable
a = 2; // mutating the variable
a = 'Bamse'; // variable can be set to value of different type
const b = 'Kylling'; // declaring an immutable variable
let firstName = 'Ebbe'; // Best practice is to use camel case for variable names
let c; // Declaring an empty variable. The value will be undefined
console.log(a); // Writing the value of a varable to the console (can be seen when activating devtools in the browser by pressing F12)
console.log(a, b); // You can simultaneously log multiple values

if (false) {
    alert('hej'); // display a modal messagebox in the browser
}

// 7 primitive data types:
let number1 = 1; // Number
let number2 = 3.14; // Another Number. Note that we dont distinguish between integers and floats
let string1 = 'a'; // String
let string2 = "I'm hungry"; // Another String
let string3 = 'She said: "Hi"'; // Another String
let boolean1 = false; // Boolean
let boolean2 = true; // Another Boolean
let undefined1 = undefined; // Undefined
let null1 = null; // Null
//let symbol1 = ? // Symbol
//let bigInt = ? // BigInt

console.log(typeof number1); // typeof operator

var d = 3; // Declaring a variable using var. Legal but deprecated
           // (var is "function scoped" while let is "block scoped")

// Basic operators

// Arithmetic operators
console.log(1 + 2);
console.log(2 - 1);
console.log(3 * 2);
console.log(3 / 2);
console.log(2 ** 3); // 2 to the power of 3 (= 8)
console.log('Ebbe' + ' ' + 'Sorensen'); // Concatenating strings

// Assignment operators
a = 7;
a += 2;
a -= 1;
a *= 3;
a /= 2;
a++;
a--;

// Comparison operators
var b1 = 1 < 2;
var b2 = 1 > 2;
var b3 = 1 <= 2;
var b4 = 1 >= 2;

// Template literals (Resembles notation in C#)
console.log(`Name: ${firstName}`); // Notice the use of backticks
// Using template literals for making multiline string
console.log(`string with
multiple
lines`);
// Multiline strings can also be made in a more traditional way
console.log('other\nmultiline\nstring');

// Control flow
if (1 > 2) {
    console.log('control flow 1');
}
else if (1 > 3) {
    console.log('control flow 2');
}
else {
    console.log('control flow 3');
}

// Type conversion
let yearAsNumber = Number('1975');
let yearAsString = String(1975);

// Type coercion (happens when an operator that "expects" multiple values of same type receives values of different types)
console.log(3 + '2'); // Here, the number is coerced into a string, so the result is 32
console.log(3 - '2'); // Here, thestring is coerced into a number, so the result is 1

// Truthy & Falsy
// A falsy value is characterized by evaluating to false, when coerced into a boolean
// These 5 values are falsy (all other values are truthy):
var val1 = 0;
var val2 = '';
var val3 = undefined;
var val4 = null;
var val5 = NaN;

if (val1 || val2 || val3 || val4 || val5) {
    console.log("this will not be logged");    
}

// Equality operators

// Strict vs loose equality/inequality operators
// (Try to avoid using the loose equality and inequality operators, because it can lead to bugs)

// Strict equality operator (coercion not allowed)
if (2 === '2') {
} else {
    console.log("2 is not strictly equal to '2'");    
}

// Loose equality operator (coercion allowed)
if (2 == '2') {
    console.log("2 is loosely equal to '2'");    
}

// Strict inequality operator (coercion not allowed)
if (2 !== '2') {
    console.log("2 strictly differs from '2'");    
}

// Loose inequality operator (coercion allowed)
if (2 != '2') {
} else {
    console.log("2 is not loosely inequal to '2'");    
}

// Technique for getting input from the user (for diagnostic purposes, I guess..)
const name1 = prompt('what is your name?');
console.log(`Hi ${name1}`);


// Boolean logic (like C#)
let b5 = b1 && b2; // AND
let b6 = b1 || b2; // OR
let b7 = !b5; // NOT

// Switch/Case
let day = 'saturday';
switch(day) {
    case 'monday':
        console.log("get up early");
        break;
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log("go to work");
        break;
    case 'saturday':
    case 'sunday':
        console.log("relax (not)");
        break;
    default:
        console.log("invalid day");
        break;
}

// Statements & Expressions
// Expression: A piece of code that produces a value, like:
a === b;

// Statement: A piece of code that does not produce a value in itself, like:
if (a === b) console.log("a equals b");

// Ternary operator (like in C# - perhaps a bit different, since the arguments to the right of the question mark can be statements)
// In java script, the ternary operator resembles an if/else construct, but is it an
// EXPRESSION, so it can be used in conjunction with constructs that require an expression,
// such an in a template literal, like here:
console.log(`I am ${a === b ? 'happy' : 'sad'}`);
// The ternary operator is usually utilized for assigning values to variables

// A bit of fun with dates (not from the course)
// Notice: JavaScript counts months from 0 to 11...
// Notice: JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated)
let myBirthday = new Date(1975, 6, 24); 
console.log(myBirthday);
