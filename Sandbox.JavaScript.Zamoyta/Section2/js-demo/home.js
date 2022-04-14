/* Multi line comment
   Bim bam busse
*/ 

//alert('Bamsen er løs!');

// Declaring constants
const pi = 3.1415927;

// Declaring variables
let price = 49.99;
let product = 'Hiking Boots';
let discounted = true;

// Other way of declaring variables
let name1 = 'Bimse',
    name2 = 'Bamse';

// Man kan også bruge var, men det er deprecated i forhold til let og const
var a = 17;

// Ligesom i andre programmeringssprog er det i JavaScript
// normalt at navnet på en private variabel starter med underscore

// Når man erklærer en variabel skal den altid sættes til en værdi.

// Variabler kan ændre værdi
price = 29.99;

// Og de kan endda ændre type ligesom i Python
price = 'Hejsa Bamse';

// Man bruger escape karakterer lige som i andre sprog
let message1 = '\"Kylling\"'

// streng formaterering
let message2 = `Hello ${name1}`;

// streng konkatenering
let message3 = 'Hej' + ' Ursula';

// string methods
message3 = message3.toLowerCase();
message3 = message3.substring(1)
let length = message3.length;

// Nu skal vi have list sjov med operatorer - det lader til at være helt ækvivalent til C#
// det gælder også operator præcedens - så husk paranteser
let b = pi + 2 - 1;
let c = 5 % 2; // modulo
c += 2;
c -= 1;
c *= 3;
c /= 2;
c %= 2; // Svar til c = c % 2
++c;
c++;
--c;
++c;

// konvertering mellem strenge og numbers
let number = 123.12;
let numberAsString = number.toString();
let floatNumber = Number.parseFloat("123.45");

// Her bruger vi en funktion fra utils.js
// Bemærk, at vi ikke behøver nogen include, import eller using statement lige som i andre sprog
showMessage(price);
showMessage(typeof(price));
showMessage(b);
showMessage(c);
showMessage(message3);

// Lidt sjov med boolske variable
let d = false;
let e = !d;
let f = d && e;

// Her har vi en uinitialiseret variable, som så er undefined
let g;

// Vi kan initialisere den og sætte den tilbage til at være uinitialiseret
// faktisk er der forskel på undefined of null. I praksis sætter man som
// regel en variabel til null for at wipe den værdi den har, så man kan se,
// at den er blevet sat til null efter at have haft en værdi
g = 10;
g = null;

// Nu erklærer vi et OBJEKT, hvilket i princippet er en samling af variable med værdier.
// Den er ikke ækvivalent til klasse eller struct fra andre sprog, da det jo sådan set svarer mere
// til en instans, men altså uden at der er en bagvedliggende klasse
// Typen for denne variabel er "object"
let animal = {
    name: 'Garfield',
    species: 'Cat',
    legs: 4,
}

// Det her bliver skrevet i loggen for browseren, dvs man kan bruge det til at diagnosticere
console.log("any message");
console.log(animal.species);

// Nu skal vi lege lidt med control flow
// Bemærk, at der er 3 tegn for de 2 første
// Det kan læses som "strictly equal to", dvs typerne skal være ens
if (5 === 5) {
    console.log('Yes');
}

if (5 !== 5) {
    console.log('No');
}

if (5 > 5) {
    console.log('No');
}

// Der er også en operator med 2 lighedstegn, men deprøver at konvertere variablerne til 
// andre typer, så dette evaluerer til true
if (1 == "1") {
    console.log('Yes');
}

// Bemærk, at braces ikke er påkrævet, når man bare har en linie
// (men det er stadig best practice at have dem med)
if (5 >= 5) {
    console.log('Yes');
}
else if (3 == 2) {
    console.log('Bamse');
}
else
    console.log('No');

// Truthy og Falsy
// Alle disse er falsy, dvs hvis man putter dem i en if statement, så evaluerer de til false
// (og alt, hvad der ikke er falsy, er truthy)
let f1 = false;
let f2 = 0;
let f3 = "";
let f4 = '';
let f5 = null;
let f6 = undefined;
let f7 = NaN;

// Denne konstruktion tager hånd om floating point unøjagtighed
// toFixed konverterer til et tal med et bestemt antal decimaler, her 2
// og laver det i øvrigt til en streng
// + tegnet i starten koverterer det til et number
if ( +(1.1 + 1.3).toFixed(2) === 2.4) {
    showMessage('true');
}

let a1 = 2.12345;
showMessage(typeof(a1.toFixed(2))); // typen er string
showMessage(typeof(+a1.toFixed(2))); // typen er number

// Ternary operator supporteres også
let b1 = 5 > 4 ? "bigger" : "smaller";

// variable gælder kun inden for det scope, hvor der er erklærede, lige som i C#
if (true)
{
    let value = 'hej';
}

// Løkker
// Bemærk, at hvis du har en uendelig løkke, så fryser browseren og man er nødt til at
// lukke den, og derudover skal man lukke applikationen fra konsollen, rette fejæen 
// og køre den påny
for (let i = 0; i < 3; i++) {
    console.log(i);
}

let count = 10;
while(count > 5)
{
    console.log(count)
    count--;
}

do {
    console.log(count)
    count++;
} while (count <= 10);

// Functions
logMessage();

// Her erklærer vi en function
function dummyFunc1() {
    console.log("Kylling");
}

// Og her erklærer vi en function expression, så det minder om en delegate eller en function pointer
// Bemærk, at den ikke har noget navn
let fn1 = function() {
    console.log("Ælling");
}

// Her kalder vi vores function expression
fn1();

// Her har vi en function expression med et navn, hvilket er god praksis men ikke påkrævet
// Navnet bruges udelukkende til debugging formål
let fn2 = function dummyFunc2() {
    console.log("Luna");
}

fn2();

// Her erklærer vi en function, der tager et antal parametre
// Bemærk, at den ikke har nogen type
function dummyFunc3(message1, message2) {
    console.log(message1, message2);
}

dummyFunc3("Aske", "Baske");

// Hvis man kalder med færre argumenter end signaturen så sættes de manglende til undefined
// Det munder naturligt nok ud i bugs af og til...
dummyFunc3("Arthur");

// Her har vi en variabel med global scope
let variableWithGlobalScope = 7;

// Her har vi en funktion, som returnerer en værdi
function getSecretCode(value) {
    // Som i andre sprog er dette en lokal variabel, hvis lifecycle indskrænker
    // sig til funktionen scope
    let code = value * 42;

    // Funktioner kan godt tilgå variable med globalt scope
    // Så vær lige opmærksom på at bruge forskellige variabelnavne,
    // så man ikke f.eks. kommer til at bruge en lokal variabel, når man
    // havde i sinde at bruge en global variabel
    code *= variableWithGlobalScope;
    return code;
}

console.log(getSecretCode(2));

// Man kan godt sætte en variabel til en funktion, der ikke returnerer noget,
// men den vil så blive undefined og det er der næppe nogen praktiske anvendelser af
// - bemærk blot at man ikke får nogen fejlbesked
let undefinedVariable = dummyFunc3("Bim", "Bam");
console.log(undefinedVariable);


// Her har vi en funktion, der er nested inde i en anden
function myFunction() {
    let myNestedFunction = function(value) {
        return value * 7;
    }
    return myNestedFunction(2);
}

// Her kalder vi den. Bemærk i øvrigt, at jeg kan kalde den med parametre, 
//selv om den ikke modtager nogen - det ignorerer den bare
console.log(myFunction(1, 2, 3));
changePercentOff(51);

// Nu skal vi have noget mere sjov med objects, som vi lige kort har berørt
// ovenfor (animal)
let person = {
    name: "John",
    age: 32,
    partTime: false
}

// Man tilgår objektets properties (samme betegnelse som andre sprog) således
// NB: Hvis man tilgår en property, der ikke eksisterer, får manbare undefined tilbage, så pas på
console.log(person.name);
console.log(person.age);
console.log(person.partTime);

// Man kan ændre et objekts properties på forskellige måder
person.age = 64;
person['age'] = 98;

// Man kan også have objekter inde i andre objekter

// Datatypen Symbol kan bruges inde i et objekt til at skjule information
// Så er det kun kode med adgang til pågældende symbol, som kan tilgå den property
// (han kommer ikke ind på hvordan)
let mySymbol = Symbol();

let person2 = {
    name: "Jane",
    age: 35,
    partTime: true,
    [mySymbol]: 'secretInformation'
}

// Her har vi så et object, der har en method
let person4 = {
    name: "Harry",
    age: 35,
    partTime: true,
    showInfo: function(arg1) {
        showMessage(this.name + " " + arg1);
    }
}

person4.showInfo("Truman");

// NB: methods kan også ændres, lige som det gælder for properties
// så på det punkt adskiller det sig markant fra andre sprog
person4.showInfo = function (){
    showMessage(this.name + " Potter");
}

person4.showInfo();

// Her har vi en funktion, der tager en string som argument
// Bemærk, at argumentet IKKE ændres, da det passes "by value", lige som i andre sprog
function changeMessage(message) {
    message = "kylling";
    console.log(message);
}

let message = "bamse";
changeMessage(message)
console.log(message);

// Her har vi til gengæld en funktion, der tager et OBJEKT, og objekter passes altså by reference,
// således at man faktisk godt kan ændre deres værdi
function incrementAge(person) {
    person.age++;
}

console.log(person4.age);
incrementAge(person4);
console.log(person4.age);

// Nu skal vi have lidt sjov med built-in objects
let now = new Date();
console.log(now.toDateString())
console.log(Math.sqrt(49))
console.log(Math.random())
let s = "Hello";
console.log(s.charAt(0));
console.log(Number.MAX_VALUE);
