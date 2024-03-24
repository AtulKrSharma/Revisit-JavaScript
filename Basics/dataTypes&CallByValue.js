// //prmitive data types:
// Number
// String
// Boolean
//Undefined

// //reference data types:
// Object
// Array
// Functions

//Pass by value

//Primitive types in JavaScript include Undefined, Null, Boolean, Number, String, and Symbol.
// When you assign a variable with a primitive data type to another variable,
// JavaScript stores the value directly and any changes to one variable do not affect the other
// please note that primitive are stored in stack
let myNumber = 10;
let myConstNumber = myNumber;
myConstNumber = myConstNumber + 20;
console.log(`myOrginalNumber - ${myNumber}`);
console.log(`myNewNumber - ${myConstNumber}`);

//Pass by reference

// Reference types, on the other hand, include Object, Array, and Function.
// When you assign a variable with a reference data type to another variable,
// JavaScript don't stores the value itself, but a reference to that value.
// Any changes made through this reference will affect the original value
// because they both refer to the same place in memory.

//please note that reference types are stored in heap

const myArray = new Array('1', '2', '3');
const myConstArray = myArray;

myConstArray.push('4');
myConstArray.push('5');
myConstArray.pop();

console.log(`myOriginalArray - ${myArray}`);
console.log(`myNewArray - ${myConstArray}`);

//statically typed vs dynamically typed

//JS is dynamically typed
//TS is statically typed
