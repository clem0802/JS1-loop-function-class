// 2021.11.14 FROM (MM) 
/*----------------------------------*/ METHOD
/*----------------------------------*/ THIS.
// Object's METHOD
// an object's METHOD is defined INSIDE the OBJECT
// METHODs are similar to FUNCTIONs, both can return values
// keyword THIS.


//--------------------- (I)
var microwave = {
  brand: "Samsung",
  heat: function(){} // => "heat" is the METHOD of the OBJECT "microwave"
};


//--------------------- (II)
var microwave = {
  brand: "Samsung",
  heat: function() { // METHOD
  console.log("Now heating your food.");
    } 
};
console.log(microwave.heat()); // Now heating your food.


//--------------------- (III)
var employee = {
  name: "Jimmy",
  title: "salesman",
  displayTitle: function(){ // => "sellPaper" is the METHOD of the OBJECT "employee"
    console.log(this.title); // salesman
  }
};
employee.displayTitle();


// we use THIS keyword to refer to an object from within an object's METHOD
// => depuis l'intérieur de la METHODE d'un OBJET
// here, refer to the property "on"
//--------------------- (IV)
var microwave = {
  brand: "Samsung",
  on: true,
  isOn: function() { // METHOD
    return this.on;
    } 
};


// here, display the "brand" of the "microwave" object
//--------------------- (V)
var microwave = {
  brand: "Samsung",
  on: true,
  isOn: function() { // METHOD
    return this.on;
    } 
};
console.log(microwave.brand); // Samsung


//--------------------- (VIa)
var apartment = {
  number: 404,
  location: "unknown",
  display: function(){
  }
};
apartment.display(); // here calls the "apartment" object's METHOD "display"

//--------------------- (VIb)
var apartment = {
  number: 404,
  location: "unknown",
  display: function(){
    this.number = 200; // here upadates the apart N° to 200 !!
    console.log(this.number); // 200
  }
};
apartment.display(); 
console.log("apartment location: " + apartment.location); // apartment location: unknown

//--------------------- (VIc)
var apartment = {
  number: 404,
  location: "unknown",
  display: function(){
    console.log(this); // this line DISPLAYs the OBJECT
  }
};
apartment.display(); 

