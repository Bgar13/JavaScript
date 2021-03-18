
//1.Given
console.log("first code")
console.log(hello);
var hello ="world";
//After Hoising
console.log("After hoisting");
var hello;
console.log(hello); //logs undefined 
hello= "world"

//Outcome
//[Running] node "/Users/brendadelatorre/Desktop/JavaScript/hoisting.js"
//undefined

//2. Given
console.log("second code");
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//After Hoisting
console.log("After Hoisting");
function test(){
        var needle = 'magnet';  //Funtions go before any variable is declared
        console.log(needle);
    }
var needle ; //'needle' is a declaration, it's global and gets hoisted to just under the hoisted functions
needle = 'haystack';  //we assign a value to the global needle
test();  //test is called , the fuction will run

//Outcome
// [Running] node "/Users/brendadelatorre/Desktop/JavaScript/hoisting.js"
// magnet
// After Hoisting
// magnet




//3. Given
console.log("3rd code");


var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//After Hoisting
console.log("After Hoisting");

function print(){
        brendan = 'only okay'; // functions get hoisted to the top, this function never runs because i never gets called on. 
        console.log(brendan);
    }
var brendan;
brendan = 'super cool';
console.log(brendan);

//outcome
// 3rd code
// super cool
// After Hoisting
// super cool


//4. Given
console.log("4th code");

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}


// //After Hoisting
console.log("After Hoisting");


function eat(){
        var food;
        food = 'gone';
        food = 'half-chicken';
        console.log(food);
    }
var food;
food = 'chicken';
console.log(food);
eat();

//Outcome
// 4th code
// chicken
// half-chicken
// After Hoisting
// chicken
// half-chicken

// //5. Given
console.log("5th code");

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// //After Hoisting
console.log("After Hoisting");
var mean;
mean();
console.log(food);
mean = function() {
        var food;
        food = "chicken";
        console.log(food);
        food = "fish";
        console.log(food);
    }
console.log(food);

//outcome
// TypeError: mean is not a function




// //6. Given
console.log("6th code");

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// //After Hoisting
console.log("After Hoisting");


function rewind() {
        var genre;
        genre = "rock";
        console.log(genre);
        genre = "r&b";
        console.log(genre);
    }
var genre;
console.log(genre);
genre = "disco";
rewind();
console.log(genre);


//Outcome
// 6th code
// undefined
// rock
// r&b
// disco
// After Hoisting
// disco
// rock
// r&b
// disco

// //7. Given
console.log("7th code");

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// //After Hoisting
console.log("After Hoisting");

function learn() {
        var dojo;
        console.log(dojo);
        dojo = "seattle";
        console.log(dojo);
        dojo = "burbank";
        console.log(dojo);
    }
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);

//Outcome
// 7th code
// san jose
// undefined
// seattle
// burbank
// san jose
// After Hoisting
// san jose
// undefined
// seattle
// burbank
// san jose

// //8. Bonus Given

console.log("Bonus code");

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// //After Hoisting
console.log("After Hoisting");

function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
    }
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

//Outcome
//TypeError: Assignment to constant variable.
