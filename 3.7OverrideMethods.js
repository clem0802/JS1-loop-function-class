// 2021.10.22 FROM (MM) 
/*----------------------------------*/
// OVERRIDING METHODS
// overriding a METHOD replaces the code of the METHOD in the SUPERCLASS with that of the SUBCLASS
// here CALL the receiveDamage() METHOD from the "class Wizard" and see what happens to "health" PROPERTY
// to "override" a METHODE, we write the same "NAME" and "PARAMETERS" as the METHOD in the SUPERCLASS
// likewise, we have the same METHOD in the SUBCLASS but "customize" its behavior for what is needed in the SUBCLASS

class Human {
    constructor (weapon) {
        this.weapon = weapon;
        this.health = 100;
    }
    receiveDamage(health = 100) {
        this.health = this.health - 10;
    }
}

class Wizard extends Human {
    receiveDamage(health = 100) {
        this.health = this.health - 5;
    }
}

var human = new Human("ax");
human.receiveDamage();
console.log(human.health); // 90

var wizard = new Wizard("staff");
wizard.receiveDamage();
console.log(wizard.health); // 95




/*----------------------------------*/
//! SUPER
// super.attack()
// if we need the behavior from the SUPERCLASS METHOD, we can call it with the "SUPER" keyword
// here CALL the attack() METHOD from "class Human"
class Human {
    constructor(weapon) {
        this.weapon = weapon;
        this.human = 100;
    }
}
attack() {
    console.log("Swing " + this.weapon);
}

class Wizard extends Human {
    attack() {
        super.attack(); //
    }
}

var wizard = new Wizard("staff");
wizard.attack(); // Swing staff




/*----------------------------------*/
// ADD wizard-specific behavior to the "Wizard" class's "attack()" METHOD
class Human {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
    }
}
attack() {
    console.log("Swing " + this.weapon);
}

class Wizard extends Human {
    attack() {
        super.attack(); //
        console.log("ZiziZaza!");
    }
}

var wizard = new Wizard("staff");
wizard.attack();
// Swing staff
// ZiziZaza!




/*----------------------------------*/
// same NAME in the SUBCLASS METHOD to "override" the SUPERCLASS METHOD
class Mamal {
    eat(food) {
        console.log(food + " nom nom");
    }
}

class Rabbit extends Mammal {
    eat(food) { //!
        if(food === "lettuce") {
            console.log(food + " nom nom");
        }
    }
}




/*----------------------------------*/
class ToothBrush {
    brush() {
        console.log("Cleaning teeth");
    }
}
class ElectricBrush extends ToothBrush {
    brush() {
        console.log("Bzzzzzz");
    }
}
var myBrush = new ElectricBrush();
myBrush.brush(); 
// Bzzzzzz




/*----------------------------------*/ (I)
// "same NAME" and "same PARAMETERS" in the SUBCLASS METHOD to "override" the SUPERCLASS METHOD
class Rodent {
    eat(food) {
        console.log(food + " Yummy Yummy");
    }
}

class Hamster extends Rodent {
    eat(food) {
        if(food === "carrots") {
            super.eat(food); //
         // console.log("carrots");
        }
    }
}
var sherrif = new Hamster();
sherrif.eat();



/*----------------------------------*/ (II)
// "same NAME" and "same PARAMETERS" in the SUBCLASS METHOD to "override" the SUPERCLASS METHOD
// the following example doesn't override !!
class Mammal {
   eat(food) {
       console.log(food + " Yummy Yummy");
   }
}

class Rabbit extends Mammal {
    eatVeggies(food) {
        if(food === "lettuce") {
        // console.log(food + " Yummy Yummy");
        }
    }
} 
var lapin = new Rabbit();
lapin.eatVeggies();
// undefined


