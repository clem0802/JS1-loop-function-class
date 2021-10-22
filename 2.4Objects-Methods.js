// 2021.10.20 FROM (MIMO) 
/*----------------------------------*/
// OBJECTS' METHODS (=> function inside an object)
// we can group related functions into objects
// functions inside an object are called the object's "methods"

var dog = {
    name: "Bo",
    bark: function(){}
};


//! the dog object runs the bark method
var dog = {
    name: "Bo",
    bark: function(){
        console.log("woof woof!"); 
    }
};
dog.bark(); // woof woof



var dog = {
    name: "Bo",
    bark: function(word){
        return "woof woof, " + word;
    }
};
console.log(dog.bark("hungry")); // woof woof, hungry



//! the cat object runs the meow method
var cat = {
    name: "Mittens",
    meow: function (){
        console.log("meow");
    }
};
cat.meow(); // meow



var phone = {
    brand: "Apple",
    number: "555-555-5555",
    ring: function(){
        console.log("ding ding ding");
    }
};
phone.ring(); // ding ding ding



var phone = {
    brand: "Apple",
    number: "555-555-5555",
    call: function(number){
        console.log("Calling " + "555-555-5555");
    }
};
phone.call(); // Calling 555-555-5555
