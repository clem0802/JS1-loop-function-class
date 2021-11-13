//-------------------------- (ARRAYS) stored in SQUARE BRACKETS []


//--------------------------
var cats = ["Garfield", "Tom"];
console.log(cats); // ["Garfield", "Tom"] // (2 elements)



//--------------------------
var isaac = 13;
var enes = 45;
var lucia = 24;
var candidates = [isaac, enes, lucia]; // NO DOUBLE-QUOTES !!



//-------------------------- (CHANGE VALUE inside an ARRAY)
var flavors = ["vanilla", "chocolate", "pistachio", "lemon"];
flavors[2] = "strawberry";
console.log(flavors); 
// ['vanilla', 'chocolate', 'strawberry', 'lemon']
// => "pistachior" indexed 2 is replaced by "strawberry"



//-------------------------- (to ACCESS a value in an ARRAY)
var first = "Enes";
var second = "Isaac";
var third = "Lucia";
var winners = [first, second, third];
console.log(winners[2]); // Lucia
