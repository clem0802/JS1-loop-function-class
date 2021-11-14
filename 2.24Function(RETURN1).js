// 2021.11.14 FROM (MM) 
/*----------------------------------*/
// FUNCTIONS => RETURN with PARAMETER


/*----------------------------------*/
function getName(fullName){
    return fullName;
}
var fullName = "Isaac TAN";
console.log(fullName); // Isaac TAN


/*----------------------------------*/
// BOOLEAN values

function isFreezing(temperature){
    return temperature < 0;
}
var freezing = isFreezing(-3);
console.log(freezing); // true


/*----------------------------------*/
// CALCULATE
// function names should be consistent, similar functions should have the same verb prefix
function calculateSum(a,b){
    return a + b;
}
function calculateDifference(a,b){
    return a - b;
}

var sum = calculateSum(30,11);
var difference = calculateDifference(30,11);
console.log(sum); // 41
console.log(difference); // 19


//---------
function displayUserID(user){
    console.log(user[1]);
}
var user = ["Don Quixote", 992, true];
displayUserID(user); // 992



/*----------------------------------*/
function isEqual(number){
    return number === 10;
}
var number = 10;
console.log(number); // 10

function isEqual(number){
    return number === 10;
}
var number = 19;
console.log(number); //! 19



/*----------------------------------*/
function snooze(time, snooze){
    return time + snooze;
}
var newAlarmTime = snooze(1300,15);
console.log(newAlarmTime); // 1315



/*----------------------------------*/
function getAverage(grades){
    return(grades[0] + grades[1] + grades[2])/3
}
var grades = [10, 5 ,8];
var average = getAverage(grades);
console.log(average); // 7.666666666666667



/*----------------------------------*/
// create a "result" VARIABLE and store the result of calling the function with a value inside it
function moreThanTen(number) {
  return number > 10;
}
var result = moreThanTen(14);
console.log(result); // true



/*----------------------------------*/
/*----------------------------------*/
function getFirstName(names){
    return names[0];
}
var students = ["Isaac", "David", "Joel"];
var firstMember = getFirstName(students);
console.log(firstMember); // Isaac
console.log(students); // (3) ['Isaac', 'David', 'Joel']


//---------
function getListOfNames(names){
    return names[0] + ", " + names[1] + ", " + names[2] + ", " + names[3];
}
var pupils = ["Isaac", "David", "Joel", "John"];
var list = getListOfNames(pupils);

console.log(list); // Isaac, David, Joel, John
console.log(pupils); // (4) ['Isaac', 'David', 'Joel', 'John']

console.table(list); // Isaac, David, Joel, John
console.table(pupils); //! a chart really comes out as output

console.log(list.length); //!  24    
console.log(pupils.length); //!  4



