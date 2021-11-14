// 2021.10.13 FROM (MM) //! TO REVIEW AGAIN on 10.14
/*----------------------------------*/
// FUNCTIONS
// How do we use the retunr value of a function? => we call the function and use it like any other value
// How do we store the retunr value in a variable? => we call the function and store it in a variable


// to return something from a function we add the "return" keyword followed by the value to return, like here with "return age;"
function userAge(number){
    var age = "User age: " + number;
    return age;
}
console.log(userAge(99)); // User age: 99



// How do we use the retunr value of a function? => we call the function and use it like any other value
// How do we store the return value in a variable? => we call the function and store it in a variable
// a function can return any type of value, like a string, number, or boolean
// this function returns the number value inside "result"
function timesTen(number){
    var result = number * 10;
    return result;
}
console.log(timesTen(15)); // 150



// we can use the return value of a function like any value by calling the function, here we call "userAge(22)" to use its value
function userAge(number){
    var age = "User age: " + number;
    return age;
}
console.log(userAge(22)); // User age: 22



// we can store the return value in a variable too, here we store the retunr vaule in "result" and display it in the console
function userAge(number){
    var age = "User age: " + number;
    return age;
}
var result = userAge(29);
console.log(result); // User age: 29



// if we don't includ a "return" statement, the function returns the value "undefined" instead
function userAge(number){
    var age = "User age: " + number;
}
var result = userAge(29);
console.log(result); //! undefined



//return the value from this function
function giveMeTen(){
    return 10;
}
console.log(giveMeTen()); // 10



// return the string
function addGreeting(user){
    var greeting = "Greetings " + user;
    return greeting;
}
var result = addGreeting("Isaac TAN");
console.log(result); // Greetings Isaac TAN



// return a single value from the function
function lessThanFive(number){
    var lessThan = number < 5
    return lessThan;
}
var result = lessThanFive(10);
console.log(result); //! false



// call the addTen() function with a value
function addTen(number){
    var addedTen = 10 + number;
    return addedTen;
}
console.log(addTen(100)); // 110



// call the reduceTen() function with a value
function reduceTen(number){
    var reducedTen = number - 10;
    return reducedTen;
}
console.log(reduceTen(400)); //! 390



// create the "result" variable and store the return value of the function inside
function signUp(user){
    var status = user + " has signed up";
    return status;
}
var result = signUp("TAN Isaac"); 
console.log(result); // TAN Isaac has signed up



// call the "reject()" function with the value "Ann"
function reject(user){
    var choice = "No Emails: " + user + "'s account is rejected!";
    return choice;
}
var result = reject("Ann");
console.log(result); //! No Emails: Ann's account rejected!




// EXO benj (vendredi.2021.10.15)
var benjiBestTeacherEver = true;
var check = benjiBestTeacherEver === true;
if (check) {
    console.log("Yes, Benji is the best teacher !!");
} else {
    console.log("Your computer will be turned off in 3 seconds!");
}



var msgPerDay = 10;
if(msgPerDay >= 6){
    console.log("they are together");
} else{
    console.log("no, they are not together");
}



var currentSavings = 200;
var rateForEvent = 1800;
if(currentSavings >= rateForEvent){
    console.log("you are fine, relax.");
} else{
    var differenceNeeded = rateForEvent - currentSavings;
    console.log("You need " + differenceNeeded + "€ more to be able to attend the event.");
}



var ssTimesPerDay = [2, 3, 4, 2, 3, 5, 4];
console.table(ssTimesPerDay);


var temperatures = [17, 15, 13, 18, 22];
temperatures[2] = 19;
console.log(temperatures); // (5) [17, 15, 19, 18, 22]



function display(firstName){
    console.log(firstName);
}
display("Alex"); // Alex

/*----------------------------------*/
function display(firstName, lastName){
    console.log(firstName);
}
display("Alex", "Morgan"); 
// Alex

/*----------------------------------*/
function display(firstName, lastName){
    console.log(firstName + " " + lastName);
}
display("Alex", "Morgan"); 
// Alex Morgan

/*----------------------------------*/
function display(first, second){
    console.log("1st: " + first);
    console.log("2nd: " + second);
}
display("Amy", "Sam");
// 1st: Amy
// 2nd: Sam

/*----------------------------------*/
function display(first, second, third){
    console.log(first + " " + second + " " + third);
}
display("duck", "goose", "swan"); 
// duck goose swan


/*----------------------------------*/
function mix(first, second, third){
    return first + second + third;
}
var result = mix("big", "bad", "wolf");
console.log(result);
//! bigbadwolf


/*----------------------------------*/
function createId(name, year){
    return name + year + "@hutmail.com";
}
var email = createId("clemence", "1998");
console.log(email);
//! clemence1998@hutmail.com


/*----------------------------------*/
function addPrefix(prefix, word){
    return prefix + word;
}
var newWord = addPrefix("re", "do");
console.log(newWord);
// redo


/*----------------------------------*/
function addPrefix(prefix, word){
    return prefix + word;
}
addPrefix("re", "do");
// 'redo'


/*----------------------------------*/
function showWinners(first, second){
    console.log("1st: " + first);
    console.log("2nd: " + second);
}
showWinners("Joe", "Tom");
// 1st: Joe
// 2nd: Tom


/*----------------------------------*/
function mix(first, second, third){
    console.log(first + second + third);
}
var result = mix("Peter", "Piper", "Picked");
// PeterPiperPicked
