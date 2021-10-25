// 2021.10.22 FROM (MIMO) 
/*----------------------------------*/
// CLASSES
// classes are TEMPLATES FOR OBJECTS
// to code complex programs, need to create many similar but distinct objects
// to make the process less error-prone and more efficient, we use data structures called classes as templates
// once we create a template with the properties we want for all similar objects
// we can use it to create new objects faster

var book100 = {
    author: "William Shakespear",
    title: "The Da Vinci Code"
};
console.log(book100); // {author: 'William Shakespear', title: 'The Da Vinci Code'}


/*----------------------------------*/
// to START
// to create a new class, we start with "class" keyword, a name, and curly braces
class Book {

}


/*----------------------------------*/
// CONSTRUCTOR()
//! the class name starts with an "UPPERCASE letter"
//! inside a class we need a special METHOD called the "constructor()"
class Book {
    constructor(){

    }
}


/*----------------------------------*/
// PARAMETERS
// need a way of specifying the unique values a new object will have
// we send "parameters" to the CONSTRUCTOR METHOD
class Book {
    constructor(author, title){

    }
}


/*----------------------------------*/
// THIS
// to create a new object property, we use the keyword "THIS" followed by (.) and the property name
class Book {
    constructor(author, title){
        this.author
    }
}


/*----------------------------------*/
// to FINISH
// to finish creating the NEW OBJECT PROPERTY, we assign the "author" parameter as a value to "this.author"
class Book {
    constructor(author, title){
        this.author = author;
        this.title = title;
    }
}



/*----------------------------------*/
// to USE the CLASS
// start the same way we would create a variable but add the "new" keyword followed by "Book()"
class Book {
    constructor(author, title){
        this.author = author;
        this.title = title;
    }
}

var book1 = new Book();



/*----------------------------------*/
// to ADD VALUES
class Book {
    constructor(author, title){
        this.author = author;
        this.title = title;
    }
}

var book1 = new Book("Virginia Woolf", "A Room of One's Own");
console.log(book1);
/*
Book {author: 'Virginia Woolf', title: "A Room of One's Own"}
author: "Virginia Woolf"
title: "A Room of One's Own"
[[Prototype]]: Object
*/



/*----------------------------------*/
// to ADD other books
class Book {
    constructor(author, title){
        this.author = author;
        this.title = title;
    }
}

var book1 = new Book("Virginia Woolf", "A Room of One's Own");
var book2 = new Book("Gösta Öman", "Risundret");
console.log(book1);
console.log(book2);
/*
Book {author: 'Virginia Woolf', title: "A Room of One's Own"}
author: "Virginia Woolf"
title: "A Room of One's Own"
[[Prototype]]: Object

Book {author: 'Gösta Öman', title: 'Risundret'}
author: "Gösta Öman"
title: "Risundret"
[[Prototype]]: Object
*/
