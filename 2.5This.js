// 2021.10.20 FROM (MIMO) 
/*----------------------------------*/
// THIS
// the keyword "this" refers to the object that contains the method, below "myCereal"
var myCereal = {
    name: "Trix",
    display: function(){
        console.log(this);
    }
};
myCereal.display();


// we can use (this.) to get the object's properties from inside its methods
var myCereal = {
    name: "Trix",
    display: function(){
        console.log(this.name);
    }
};
myCereal.display(); // Trix


// (this) allows to get or to update the property value
// the same, we can use (this.) to update the object's properties fom inside its methods
//! the (this) keyword can only be used to access an object's properties "INSIDE" the object's method
var myCereal = {
    name: "Trix",
    changeAndDisplay: function(){
        this.name = "Chocapic";
        console.log(this.name);
    }
};
myCereal.changeAndDisplay(); // Chocapic
