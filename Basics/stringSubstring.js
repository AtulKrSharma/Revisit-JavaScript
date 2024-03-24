//  There are 2 methods for extracting a part of a string:
//substring and //substring

// Any argument value that is less than 0 or greater than str.length is treated as if it were 0 and str.length, respectively.

const myString = 'Thequickbrownfoxjumpsoverthelazydog';

// substring(start, end) and end position, which isn't included
//  case-1: both Arguments
console.log(myString.substring(0, 3));
console.log(myString.substring(10, 11));
console.log(myString.substring(2, 10));
//never going to bring any output as end index is equal to or smaller than start index

//  case-2: both negative Arguments
console.log(myString.substring(-9, -1));
console.log(myString.substring(-10, -8));
// Any argument value that is less than 0 or greater than str.length is treated as if it were 0 and str.length, respectively.

// // //If you omit 2nd parameter, method will substring out the rest of the string
// //  case-3: only 1 Arguments
console.log(myString.substring(0));
console.log(myString.substring(3));

// //  case-4:  only 1 negative Arguments
console.log(myString.substring(-3));
