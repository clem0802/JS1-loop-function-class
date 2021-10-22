// for 2021.10.04  https://javascript.info/structure

alert('Hello');
alert('World');
alert(3+1+2);
alert("Hello");
[1,2,3,4].forEach(alert); // returned "undefined" but run through each single number
/*----------------------------------*/

// (N°4) VARIABLES
let message;
message = "HHCC is a united symbol!";
alert(message);

let user = "Clémence", age = "10", message = "Gute Nacht!"; //? (OR)
let $ = " Clémence"; //! ajouter un espace avant Clémence
let message = "Gute Nacht!";
alert(message + $); // Gute Nacht! Clémence (with space)

let message;
message = 'Hello!';
message = 'World!'; //! value changed
alert(message);

let A, B;
A = "HHCC";
B = A;
alert(A); // HHCC
/*----------------------------------*/

// (N°5) DATA TYPES
let message = "HHCC";
message = "080220"; // this content prevails
alert(message);

alert (1 / 0); // Infinity
let word = "mot"; // double quotes
let word = 'mot'; // single quotes
let word = `mot`; // backticks

let firstname = "Clémence";
alert (`Hello, ${firstname}!!`); // Hello, Clémence!!

let firstname = "Clémence";
let lastname = " TH";
alert (`Hello, ${firstname + lastname}!!`); // Hello, Clémence TH!!


// 2021.10.05 FROM  https://javascript.info/types 
/*----------------------------------*/
// (N°7) BOOLEAN
let isGreater = 4>1;
alert(isGreater);

let age = "Who are you?";
age = undefined; // change the value to undefined
alert(age); // "undefined"

typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object" (1)
typeof null // "object" (2)
typeof alert // "function" (3)


// 2021.10.05 FROM https://javascript.info/alert-prompt-confirm
/*----------------------------------*/
// ALERT, PROMPT, CONFIRM
let result = prompt("Love union:", " HHCC"); // function prompt accepts 2 arguments

let age = prompt("How old are you?", 200);
alert(`You are ${age} years old???!!!`);

let isTrue = confirm("Are you both gonna get married?");
alert(isTrue);

/*----------------------------------*/
// TYPEOF
let value = true;
alert(typeof value); // boolean

alert("6"/"2"); // strings converted to numbers

let block = "123";
alert(typeof block); // string

let block = 123;
alert(typeof block); // number

let age = Number("We cannot never tell how old she is....");
alert(age); // NaN (conversion failed)

let age = Number("sixty");
alert(age); // NaN

let age = Number("300");
alert(age); // 300

alert(Boolean("")); //! false
alert( Boolean(" ") ); //! true
