// 2021.10.12 FROM  (MM) https://
/*----------------------------------*/
// LOOP (while)

while (true){
    console.log("and again"); // so we don't need to repeat again and again the same code....
}



var counter1=0;
while(counter1<5){
    console.log("**********---------");
    counter1++;
}

var counter2=0;
while(counter2<4){
    console.log("-------------------");
    counter2++;
}


/*----------------------------------*/
// LOOP (for)
for (var i=0; i<4; i++){
    console.log("**********---------");
}

for (var i=0; i<4; i++){
    console.log("-------------------");
}

for (){
    qdkfjdqlfjljjlj...
}



for (var counter = 0; counter < 4; counter++){
    console.log("We will win!!");
}
console.log("We will talk about all this."); 
// We will win!!
// We will win!!
// We will win!!
// We will win!!
// We will talk about all this.



console.log("We all want to do that.");
for(var i=0; i<3; i++){
    console.log("I will get there!"); 
}
// We all want to do that.
// I will get there!
// I will get there!
// I will get there!



for(var i=1; i<5; i++){
    console.log("Round "+i);
}
// Round 1
// Round 2
// Round 3
// Round 4



for(var i=50; i<56; i++){
    console.log(i);
}
// 50  
// 51
// 52
// 53
// 54
// 55



for(var i=7; i>0; i--){
    console.log(i);
}
// 7
// 6
// 5
// 4
// 3
// 2
// 1



for (var i=5; i>=0; i--){ //! use >= when wanna include 0 for the count-down
    console.log(i);
}
// 5
// 4
// 3
// 2
// 1
// 0



for (var i=6; i>-4; i--){ //! the count-down stops before -4
    console.log(i);
}
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// -1
// -2
// -3



/*----------------------------------*/
var wallet = 3;
wallet = wallet;
console.log(wallet); // 3

var wallet = 3;
wallet = wallet+1;
console.log(wallet); // 4

var wallet = 3;
wallet = wallet +2;
wallet = wallet -1;
console.log(wallet); // 3+2-1=4

var name = "Account name: ";
name = name + "Isaac";
name = name + " TAN";
console.log(name); // Account name: Isaac TAN

var likes = 5;
likes += 1;
console.log(likes); // 6

var likes = 102;
likes++;
console.log(likes); // 103

var likes = 215;
likes--;
console.log(likes); // 214

var account = 1000;
account -= 200
console.log(account); // 800


/*----------------------------------*/
var keepGoing = true;
while(keepGoing === true){
    console.log("and again");
    keepGoing = false; // and again => false (juste une seule fois "and again")
}

var keepGoing = true;
while(keepGoing === true){
    console.log("keepGoing: "+keepGoing); // keepGoing: true
    keepGoing = false;
    console.log("keepGoing: "+keepGoing); // keepGoing: false
}

var isLoading = false;
while(isLoading === true){ // set to "false"
    console.log("Loading Game");
}

var keepPlaying = true;
while(keepPlaying === true){
    console.log("Now Playing: Dolce Vita");
    keepPlaying = false; // Now Playing: Dolce Vita
}
