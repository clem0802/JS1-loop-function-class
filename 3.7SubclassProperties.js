// 2021.10.22 FROM (MIMO) 
/*----------------------------------*/
// SUBCLASS PROPERTIES

// SUBCLASSes can have their own PROPERTIES
// first, create a SUCLASS that has the same PROPERTIES as its SUPERCLASS
// we do it by CALLing the "super()" METHOD

class Human {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
    }
    ...
}

class Warrior extends Human {
    constructor(weapon) {
        super(weapon); //!
    }
    ...
}

var warrior = new Warrior("sword");
console.log(warrior.weapon); // sword




/*----------------------------------*/
// now make the Warrior SUBCLASS more specific by adding PROPERTIES to it
// we can add any extra PROPERTIES, ONLY FATER super(), so here //! warCry
class Human {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
    }
    ...
}

class Warrior extends Human {
    constructor(weapon, warCry) { //!
        super(weapon); 
        this.warCry = warCry; //!
    }
    ...
}

var warrior = new Warrior("sword", "A-HA!");
console.log(warrior.weapon); // sword
console.log(warrior.warCry); //! A-HA!




/*----------------------------------*/
// now we have different PROPERTITES, we can add METHODS that use these PROPERTIES //! check UNDERSTANDING
// add "this.warCry" PROPERTY in the SUBLCASS's attack() METHOD 
class Human {
    ...
    attack() {
        console.log("Swings " + this.weapon);
    }
}

class Warrior extends Human {
    ...
    super.attack() {
        console.log(this.warCry); //!
    }
}

var human = new Human("axe");
human.attack(); //!
var warrior = new Warrior("sword", "A-HA!");
warrior.attack(); //!
// Swings axe
// Swings sword
// A-HA!




/*----------------------------------*/
// with the customized attack() METHOD, every new Warrior INSTANCE we create can have their own "warCry"
// add "this.warCry" PROPERTY in the SUBLCASS's attack() METHOD 
class Human {
    ...
    attack() {
        console.log("Swings " + this.weapon);
    }
}

class Warrior extends Human {
    ...
    super.attack() {
        console.log(this.warCry); 
    }
}

var alexander = new Warrior("sword", "Alala!"); //!  a new Warrior INSTANCE
var leonidas = new Warrior("spear", "Molon labe!"); //!  a new Warrior INSTANCE
alexander.attack(); //!
leonidas.attack(); //!
// Swing sword
// Alala!
// Swing spear
// Molon labe!




/*----------------------------------*/
// the INSTANCE will then have //!  3 properties
class Car {
    constructor(horsepower) {
        this.horsepower = horsepower;
        this.doorts = 4;
    }
}

class SportsCar extends Car {
    constructor(horsepower, turbo) {
        super(horsepower);
        this.turbo = "Yes";
    }
}

var SportsCar= new SportsCar(500);
console.log(SportsCar);
// SportsCar { horsepower: 500, doors: 4, turbo: "Yes" }
