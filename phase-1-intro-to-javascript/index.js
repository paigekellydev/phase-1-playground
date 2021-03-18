
// // Declare variables
// // always make const before using let, const should be first 
// // var is always declared in one scope outside of where you declare it
// //scoping things on the outsiede we can use inside a function, but inside cannot be used outside

// // var  redeclaredAndReset = 'var' --- never use
// let onlyBeReset = 'let'
// const cantChange = 'const'
// // cantChange = 'trytochange' ..... throws out TypeError:

// console.log(onlyBeReset, cantChange, cantChange)
// // Declare VS Setting
// // declaration is like intitializing
// // setting is giving it a value

// let something // declaring
// something = "stuff" // setting

// function someFunt() {
    
// }

// console.log(cantChange)

//  == (double) is loose equals. Same value, different types
// === (triple) is strict. Same value, same type
// DON'T USE == ------> funky things
// always use strict ==

// else if has to be chained to if 
// else has to be chained to if - no other conditions work
// sometimes we need else, sometimes not, no requirement for else on if statement

//cyclomatic complexity or code complexity nested if within if, 


// else is chained to, not inside of if statement

//Truthy or falsy

// true is 1 && 0 is falsy

// if (!{}) {
//     console.log('truthy')
// } else {
//     console.log('falsy')
// }

// DATA TYPES ----> LEGO BLOCKS ----> everything in java is one of these data types
// methods will vary depending on data type

const number = 1;
const string = "yes" // in Ruby strings are :symbol
const object = {key: 'value'};
const boolean = true || false;
const array = [1, 2, 3, 4, 5];
const nothing1 = null || undefined || NaN
const someFunction = function () { // first class functions

}

// everything in js is an object
// object definition  is different than description of objects in other languages
// objects in js === hashes in ruby === dictionary in python

// FUNCTIONS - 3 WAYS TO WRITE FUNCTIONS

//explicit return --- usually use this for
function yesOpt1() { //function declaration
    return 'yes'
}

// const yesOpt1ish = () { //function declaration
// return 'yes'
// }

//implicit return ----> arro 
const yesOpt2 = () => 'yes' // one line arrow function

//explicit return
const yesOpt3 = () => { // multi line arow function
    return 'yes' 
}

console.log(yesOpt1());
console.log(yesOpt2());
console.log(yesOpt3());

fetch(someUrl)
    .then(response => response.json()) // anonymous in line function(no name), 
                                       // usually use arrow function