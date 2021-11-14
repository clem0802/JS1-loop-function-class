// 2021.11.14 FROM (MM) 
/*----------------------------------*/
// FUNCTIONS => RETURN with PARAMETER


/*----------------------------------*/
function displayTheNumber(number) {
  return "The number is " + number;
}
console.log(displayTheNumber(50)); // The number is 50


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
function timesTwenty(number) {
  return number * 20;
}
var result = timesTwenty(54);
console.log(result); // 1080



/*----------------------------------*/
/*----------------------------------*/
/*----------------------------------*/ (SAME OUTPUT) !!!!
function displayAirDate(year) {
  return "TV show aired in: " + year;
}
var text = displayAirDate(1900);
console.log(text); // TV show aired in: 1900
//---------
function displayAirDate(year) {
  var text = "TV show aired in: " + year;
  return text;
}
console.log(displayAirDate(1900)); // TV show aired in: 1900



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


/*----------------------------------*/
function getArea(height) {
  var width = 26;
  return width * height;
}
console.log(getArea(100)); // 2600


/*----------------------------------*/
function signUp(user) {
    var status = user + " signed up";
    return status;
}
console.log(signUp("Megan")); // Megan signed up


/*----------------------------------*/
function rejectCookies(user) {
    var status = user + ": No Cookies";
    return status;
}
console.log(rejectCookies("Erica")); // Erica: No Cookies


/*----------------------------------*/
function makeAdverb(word) {
    var result = word + "ly";
    return result;
}
console.log(makeAdverb("slow")); // slowly


/*----------------------------------*/
function weatherReport(day) {
    var conditions = day + ": sunny";
    return conditions;
}
console.log(weatherReport("Tuesday")); // Tuesday: sunny


/*----------------------------------*/
/*----------------------------------*/
function addTen(number) {
    var ajouterTen = 10 + number;
    return ajouterTen;
}
console.log(addTen(20)); // 30

//---------
function addTen(number) {
    var ajouterTen = 10 + number;
    return ajouterTen * number;
}
console.log(addTen(20)); // 600 => (10+20)x20 = 30x20 = 600


/*----------------------------------*/
function displayCash(amount) {
    return amount + " Dollars";
}
console.log(displayCash(100)); // 100 Dollars

