Pluralsight Course: JavaScript: Getting Started
Instructor: Mark Zamota

ABSTRACT:
  Det er et udpræget begynder-kursus i JavaScript. Bemærk, at der er meget stor
  grad af overensstemmelse mellem JavaScript, C# og Java

DEN RØDE TRÅD:

Section 1: Course Overview
  En meget kort præsentation af, hvad kurset indeholder. Han nævner, at "Apache Cordova" er et populært 
  værktøj til at lave "native applications for smart phones and tablets". Han nævner også, at man med
  et tool som "Electron" kan lave full fledged desktop applikationer til f.eks. Mac og Windows, som
  er uafhængige af en browser. Desuden nævner han, at man med "Node.js" kan skrive server side kode
  i form af bl.a. web api'er og web servers. Han nævner, at vi til kurset skal bruge de 3 tools:
  git, node.js og visual studio code.
  

Section 2: Introduction to JavaScript  
  Han demonstrerer, hvordan man sætter en minimal HelloWorld applikation op, og dernæst, hvordan man
  kører en applikation, der er mere kompleks, men som stadig er ren html med css og altså ikke bruger 
  JavaScript endnu

Section 3: JavaScript Beginnings
  Nu skal vi så i gang med at bruge JavaScript i vores web applikation
  Det er temmelig basic stuff vedr funktioner, separering af html og js,
  kommentering osv.

Section 4: Variables and Constants
  Total basic stuff om erklæring og intitialisering af konstanter og variable
  
Section 5: Types and Operators
  Igen meget basic stuff om typer, operatorer, strenge, konvertering. Han snakker om null og undefined,
  hvor undefined angiver, at en variabel aldrig har været initialiseret, mens null angiver, at den er
  blevet nulstillet af noget kode en udvikler har skrevet.
  Til sidst snakker han om typen object, som minder om en struct.
  
Section 6: Program Flow
  Igen meget basic stuff, nu om logiske operatorer og en snak om begreberne Truthy or Falsy.
  Han introducerer operatorerne ===, !===, ==, !=  - de 2 første kan læses som "strictly equal to".
  Så snakker han om if-then-else konstruktioner, ternary operator, looping, og understreger, hvor vigtigt
  det er at undgå uendelige løkker.

Section 7: Functions
  Basic stuff om functions. Function expressions (som minder om delegates). Passing arguments to functions and
  receiving return values. Using functions to modify a page - det minder ret meget om wpf som i xaml vs code 
  behind, hvor man kan ændre et gui element, hvis den har et navn, man kan bruge i koden.

Section 8: Objects and the DOM
  Han introducerer begrebet Object, som minder om en instans af en klasse, men uden at der er en bagvedliggende 
  klasse. Så introducerer han datatypen Symbol, som kan bruges til at have properties for et objekt, som kun
  kan tilgås af udvalgte komponenter (han kommer ikke ind på hvordan).
  Så snakker han om hvordan man passer objekter til funktioner og nævner, at det er noget anderledes end at
  passe simple datatyper, og at det i øvrigt er en kilde til mange problemer og bugs. Det drejer sig om at
  simple datatyper passes "by value", mens objekter passes "by reference".
  Nu snakker han så om nogle af de mest almindelige built-in objekter i JavaScript:
    - Array
    - Date
    - Math
    - String
    - Number
  Man kan i øvrigt se en oversigt på https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects.
  Nu snakker han så om Domain Object Model, hvilket i princippet er en reference til selve web pagen og de objekter,
  den er bygget op af. "You would say that you are programming the DOM, and that refers to modifying the web page and
  getting events from a user using the web page, events such as a user typing in information or clicking a button. All
  of this is controlled by the DOM".
  
  

