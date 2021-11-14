// 2021.11.14 FROM (MM) 
/*----------------------------------*/
// FUNCTIONS with (PARAMETER)
// (parameters) are there to PASS SPECIFIC INFORMATIONS to FUNCTIONS


//------------------------
function makeGerund(word) {
  var result = word + "ing";
  console.log(result);
}
makeGerund("Jump"); // Jumping


//------------------------
function displayTriple(number) {
  var triple = number * 3;
  console.log(triple);
}
displayTriple(100000); // 300000



//------------------------
//------------------------ (ISAAC)/(with VARIABLE)
function greeting(name) {
  var phrase = name + "is very smart";
  console.log(phrase);
}
greeting("Isaac "); // Isaac is very smart

//------------------------ 
//------------------------ (ISAAC)/(without VARIABLE)
function greeting(name) {
  console.log(name + " is very smart");
}
greeting("Isaac"); // Isaac is very smart



