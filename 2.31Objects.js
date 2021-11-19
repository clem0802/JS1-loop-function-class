// 2021.10.20 FROM (MM) 
/*----------------------------------*/
// OBJECTS
// a group of related content grouped into one VARIABLE
// an object can have as many properties as we want, as long as each property is separated by a comma (,)
// object properties can be numbers, strings, booleans, array, or even OTHER OBJECTS

var name = "Garfield";
var favoriteFood = "Lasagna";

//! instead of using two separate variables to describe the CAT, we group these into one variable known as an OBJECT
// var cat = {}; 
var cat = { 
    // PROPERTY
    // name : value
    name: "Garfield",
    favoriteFood: "Lasagna"
};




var person = {
    name: "Isaac TAN",
    nickname: "sson-sson",
    occupation: "student",
    age: 13
}
console.log(person); // {name: 'Isaac TAN', nickname: 'sson-sson', occupation: 'student', age: 13}
console.log(person.nickname); // sson-sson // to access an object's property, we use (.)

person.nickname = "cisson-chou"; //! after accessing a property value, we can update/change it using an equal sign (=)
console.log(person.nickname); //!  cisson-chou
