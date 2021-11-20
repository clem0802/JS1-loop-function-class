// 2021.10.21 FROM (MM) 
/*----------------------------------*/
// ES6 (JavaScript) - ARROW FUNCTIONS
// they are used to write cleaner and shorter code
// ARROW FUNCTIONS are a type of ANONYMOUS function => NO FUNCTION NAME
//! if wa want to call these functions, we need to store them inside a variable 
//! and call the variable with parentheses at the end
// no need of the "function" keyword or the function name

function getGreeting(){
    return "Hello";
};

var greeting = () => "Hi";
console.log(getGreeting()); // Hello
console.log(greeting()); // Hi



// 2021.10.22 FROM (MM) 
/*----------------------------------*/
// like with normal functions, we can add PARAMETERS inside the PARENTHESES
// right after the parentheses and before the opening curly brace is where we add the arrow operator =>
// we use this operator right before the code block or expression we want the function to execute
//! just like with traditional functions, we use curly braces {} to contain an arrow function's code block

function getGreeting(firstName){
    return "Greetings! " + firstName;
}

var welcome = (firstName) => { //!
    return "Hi, " + firstName;
}
console.log(getGreeting("Isaac")); // Greetings! Isaac
console.log(welcome("Isaac")); // Hi, Isaac



/*----------------------------------*/
const greetings = () => {
    const name = "Isaac";
    return "Hello my son " + name;
}
console.log(greetings()); // Hello my son Isaac
//------

const greetings = () => {
    let position = 20;
    return "Hi Jane";
}
greetings(); // Hi Jane
//------

const getVehicleCount = () => {
    count = 4000;
    return count;
}
console.log(getVehicleCount()); // 4000



/*----------------------------------*/
// remove curly braces {}
// remove "return"
const greetings = () => "Welcome Isaac";
console.log(greetings()); // Welcome Isaac

const getVehicleCount = () => 400;
console.log(getVehicleCount()); // 400



/*----------------------------------*/
// => is the VALUE used to declare an ARROW FUNCTION
const getStudentsCount = () => 200;
console.log(getStudentsCount()); // 200
//------

const getStudentsCount = () => {
    count = 200;
    return count;
}
console.log(getStudentsCount()); // 200 => don't forget "()"


/*----------------------------------*/
const getWelcomeMessage = () => "Welcome to Taiwan";
console.log(getWelcomeMessage()); // Welcome to Taiwan
//------

const getStudentsCount = () => count=200; //!!
console.log(getStudentsCount()); // 200
//------

const getCount = () => {
    count = 400;
    return count;
}
console.log(getCount()); // 400 => don't forget "()"



