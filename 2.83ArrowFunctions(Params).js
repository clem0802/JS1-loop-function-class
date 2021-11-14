// 2021.10.22 FROM (MM) 
/*----------------------------------*/
// ES6 (JavaScript) - ARROW FUNCTIONS => (PARAMETERS)


/*----------------------------------*/
// what is wrong with the code below?
// we need to set a default value to avoid displaying "NaN"
const getSquare = (number) => number * 2;
console.log(getSquare()); // NaN
//---------

const getRatio = (first, second) => first / second;
console.log(getRatio(20, 2)); // 10
//---------



/*----------------------------------*/
/*----------------------------------*/ (PARAMETER)
const getConvertedHours = (seconds) => seconds / 3600;
console.log(getConvertedHours(7200)); // 2
//---------

//!! if take off the parenthesis () of parameter "seconds", the result is the SAME
const getConvertedHours = seconds => seconds / 3600;   
console.log(getConvertedHours(7200)); // 2
//---------

// add the DEFAULT PARAMETER value "0" to the ARROW FUNCTION
const getConvertedHours = (seconds=14400) => seconds / 3600;   
console.log(getConvertedHours()); // 4



/*----------------------------------*/
/*----------------------------------*/ (PARAMETERS)
const getRectangleArea = (length, width) => length * width;
console.log(getRectangleArea(10, 5)); // 50




