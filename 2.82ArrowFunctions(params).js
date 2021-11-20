// 2021.10.22 FROM (MM) 
/*----------------------------------*/
// ES6 (JavaScript) - ARROW FUNCTIONS => (PARAMETERS)
// get more used to working with arrow functions
// see how to use parameters inside of arrow functions
// parameters in arrow functions are similar to parameters in normal functions

const getPrice = (discount) => 500 - (discount * 500);
console.log(getPrice(0.25)); // 375



/*----------------------------------*/
/*----------------------------------*/
const getPrice = (total) => {
    const discount = 0.10;
    return total - (discount * total);
}
console.log(getPrice(500)); // 450
//--------

const getPrice = total => {  //! only 1 parameter, so () omitted is OK
    const discount = 0.10;
    return total - (discount * total);
}
console.log(getPrice(500)); // 450
//--------

const getPrice = (discount) => 500 - (discount * 500);
console.log(getPrice(0.10)); // 450
//--------

const getPrice = discount => 100 - discount;
console.log(getPrice(10)); // 90


/*----------------------------------*/
// PARAMETERS (3 cases)

const getPrice = (total) => {
    const tax = 0.16;
    return total + (tax * total);
}
console.log(getPrice()); // NaN
//--------

const getPrice = (total) => { //! set the default value in console.log
    const tax = 0.16;
    return total + (tax * total);
}
console.log(getPrice(200)); // 232  
//--------

const getPrice = (total=200) => { //! or set the default value inside the parentheses
    const tax = 0.16;
    return total + (tax * total);
}
console.log(getPrice()); // 232




/*----------------------------------*/
/*----------------------------------*/
// multiple-PARAMETERS = (additional default parameter)
// use comma (,) to separate different default parameters
// arrow functions let us have more compact and concise code. 
// How we write them depends on the parameters we use and the code block size
// these functions will be essential later on when we'll use them in more complex code, like REACT

//-------- (2 parameters)
const getPrice = (total=200, discount=3) => total - (discount / 100 * total);
console.log(getPrice()); // 194


//-------- (1 parameter)
const getPrice = (total) => {
    const discount = 0.10;
    return total - (discount * total);
}
console.log(getPrice(1000)); // 900

//-------- (2 parameters)
const getPrice = (total=1000, discount=10) => total - (discount / 100 * total);
console.log(getPrice()); // 900



/*----------------------------------*/
/*----------------------------------*/
//-------- (le produit)
const getSquare = (number, multiplier) => number * multiplier;
console.log(getSquare(4,5)); // 20

//-------- (le quotient)
const getRatio = (nom, denom) => {
    return nom / denom;
}
console.log(getRatio(20,2)); // 10 

//--------
const getRatio = (nom, denom = 2) => {
    return nom / denom;
}
console.log(getRatio(40)); // 20

//--------
const getRatio = (nom, denom = 2) => {
    return nom / denom;
}
console.log(getRatio(40,4)); // 10



/*----------------------------------*/
/*----------------------------------*/
//--------
const getTitle = (movie) => { //! check
    return "20th Century Movie: " + movie;
}
console.log(getTitle("Coming Home")); // 20th Century Movie: Coming Home

//--------
const getMultiple = (number) => number * 2; 
console.log(getMultiple(4)); // 8

//--------
const getSquare = (number = 0) => number * number; //! BE CAREFUL
console.log(getSquare(5)); // 25
console.log(getSquare(10)); // 100

//--------
const getArea = (length, width = 3) => length * width;  //  ATTENTION, in console.log  5=length, by default
console.log(getArea(5)); // 15

//--------
const getArea = (length, width = 3) => { //  ATTENTION, in console.log  10=length, by default
    return length * width;
}
console.log(getArea(10)); // 30


