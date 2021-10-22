// 2021.10.22 FROM (MIMO) 
/*----------------------------------*/
// CLASSES with MOTHODS-2 (exos)
// to call a class METHOD, it returns a value
//! if we want to create multiple objects that use the same method
//! we create a CLASS containing the METHOD and create OBJECTS from it

class Device {
    constructor(type) {
        this.type = type;
    }

    batteryLevel() {
        // 
    }
}



/*----------------------------------*/
class Inventory {
    constructor(size) {
        this.size = size;
    }

    increase(size) {
        this.size = size + 1;
    }
}

var bag = new Inventory(10);
bag.increase(5);



/*----------------------------------*/
class VirtualPet { //! check
    constructor(name) {
        this.name = name;
    }

    drink(liquid) {
        if (liquid === "juice") {
            console.log("slurp slurp");
        } else {
            console.log("discard");
        }
    }
}

var vDog = new VirtualPet("Bella");
vDog.drink("water");
// discard

