// 2021.10.19 FROM (MM) 
/*----------------------------------*/
// FUNCTIONS with (PARAMETER)


// Function nmes should be descriptive and let us know the main thing the function does. 
function display(word){
    console.log(word);
}
display("Hi");
display("Bye");
// Hi
// Bye


// Functions are actions, so their names should contain at least one verb. 
function sumTotal(price, tax){
    console.log(price + tax);
}
sumTotal(1000, 250);
// 1250


// Functions that mainly return a value without changing it in any way start with verbs like "get"
function getName(fullName){
    return fullName[0];
}
var fullName = ["Don", "Juan"];
var firstName = getName(fullName);
console.log(firstName); // Don



function getName(fullName){
    console.log(fullName);
}
getName("Isaac " + "TAN"); // Isaac TAN



/*----------------------------------*/
function displayName(name){
    console.log(name);
}
function displayAlias(name){
    console.log(name[1]);
}
//------
var firstName = ["Kent", "Luther"];
displayAlias(firstName); // Luther
var author = "Isaac TAN";
console.log(author);



// ######################### 
//! night of 2021.10.19 
//! MM program "FUNCTION" part ends here
var author = "Isaac TAN";
console.log(author); // Isaac TAN


var author = "Isaac TAN";
var title = "Youth";
var date = 2008;
console.log(author); // Isaac TAN
console.log(title); // Youth
console.log(date); // 2008


/*----------------------------------*/
function sumScore(score, bonus){
    console.log(score + bonus);
}
sumScore(400, 150); // 550


/*----------------------------------*/
function displayScore(points, name){
    console.log(name + ": " + points);
}
displayScore(950, "Isaac"); // Isaac: 950


/*----------------------------------*/
function sum(a, b){
    console.log(a+b);
}
sum("10","25"); // 1025


/*----------------------------------*/
// 1st way to code
function isRentingAge(age){
    console.log(age >= 25);
}
isRentingAge(30); // true
isRentingAge(18); // false


// 2nd way to code
function isRentingAge(age){
    return age >= 25;
}
var canRent = isRentingAge(24);
console.log(canRent); // true
console.log(canRent); // false



/*----------------------------------*/
function isSameWord(word){
    console.log(word === "dexterous");
}
isSameWord("dexter"); // false


/*----------------------------------*/
var author = "Isaac TAN"
var title = "Youth";
console.log(author); // Isaac TAN
console.log(title); // Youth


/*----------------------------------*/
function displayNames(names){
    console.log(names);
}
var students = ["Isaac", "David", "Joel"];
displayNames(students); // (3) ['Isaac', 'David', 'Joel']



function displayNames(names){
    console.log(names.length); //!
}
var students = ["Isaac", "David", "Joel"];
displayNames(students); // 3



function displayNames(names){
    console.log(names[2]); //!
}
var students = ["Isaac", "David", "Joel"];
displayNames(students); // Joel




/*----------------------------------*/
function displayGroup(names){
    console.log(names);
}
var names = ["Daniel", "John", "Peter"];
displayGroup(names); // (3) ['Daniel', 'John', 'Peter']


/*----------------------------------*/
function displayGroupInfo(array){
    console.log(group.length); // 4
    console.log(group[3]); // Jude
}
var group = ['Daniel', 'John', 'Peter', 'Jude'];
displayGroupInfo(group);



function displayGroupInfo(array){
    console.log(group[0] + ", " + group[2]); 
}
var group = ['Daniel', 'John', 'Peter', 'Jude'];
displayGroupInfo(group);
// Daniel, Peter



/*----------------------------------*/
function displayName(name){
    console.log(name); // Daniel,John,Peter,Jude
}
var name = ['Daniel', 'John', 'Peter', 'Jude'];
displayNameName(name);



/*----------------------------------*/
/*----------------------------------*/
function displayName(name){
    console.log(name.length); 
}
var name = ['France', 'Japan', 'Taiwan', 'Israel', 'USA', 'UK'];
displayName(name);
//! 33



function displayName(name){
    console.log(name.length); 
}
var countries = ['France', 'Japan', 'Taiwan', 'Israel', 'USA', 'UK'];
displayName(countries);
// 6 


/*----------------------------------*/
/*----------------------------------*/
function getListOfNames(names){
    console.log(names); // (4) ['Isaac', 'David', 'Joel', 'John']
}
var pupils = ["Isaac", "David", "Joel", "John"];
var list = getListOfNames(pupils);


