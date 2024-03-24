//  There are 2 methods for extracting a part of a string:
//slice and //substring
const myString = 'Thequickbrownfoxjumpsoverthelazydog';

// slice(start, end) and end position, which isn't included
//  case-1: both Arguments

console.log(myString.slice(0, 3));
console.log(myString.slice(10, 11));
console.log(myString.slice(2, 10));
console.log(myString.slice(12, 13));
//never going to bring any output as end index is equal to or smaller than start index

//  case-2: both negative Arguments
console.log(myString.slice(-9, -1));
console.log(myString.slice(-10, -8));
// console.log(myString.slice(2, 10));

// //If you omit 2nd parameter, method will slice out the rest of the string
//  case-3: only 1 Arguments
console.log(myString.slice(0));
console.log(myString.slice(3));

//  case-4:  only 1 negative Arguments
console.log(myString.slice(-3));
