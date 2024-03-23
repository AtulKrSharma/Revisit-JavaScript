//string functions and properties

const myString = 'ABCDEFGAaa'; //'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(myString.length);
console.log(myString.charAt(2));
console.log(myString[myString.length - 1]);
console.log(myString.charAt(myString.length - 1));

console.log(myString.toLowerCase());
console.log(myString.toUpperCase());
console.log(myString.trim());

//  There are 3 methods for extracting a part of a string:
// slice(start, end) and end position not included
console.log(myString.slice(0, 3));
console.log(myString.slice(1, 3));
console.log(myString.slice(2, 3));
console.log(myString.slice(-4, -1));
//If you omit the second parameter, the method will slice out the rest of the string
console.log(myString.slice(0));
console.log(myString.slice(1));
console.log(myString.slice(-1));

console.log('******');
// substring(start, end)=> similar to slice except negative arg part
console.log(myString.substring(0, 3));
console.log(myString.substring(1, 3));
console.log(myString.substring(0));
console.log(myString.substring(1));
console.log(myString.substring(-1));
console.log(myString.substring(-4, -1)); //treated as 0,0

// substr(start, length)=> similar to slice except arg2 defines the length of the str to be extracted
console.log('******');
console.log(myString.substr(0, 3));
console.log(myString.substr(1, 3));
console.log(myString.substr(0));
console.log(myString.substr(1));
console.log(myString.substr(-1));
console.log(myString.substr(-4, -1)); //treated as 0,0

console.log('**********');
//includes=> to check whether substring is included in the main string or not , returns boolean and is case sensitive
console.log(myString.includes('ABC'));

const myString111 = 'my name is atulsharma';

console.log(myString111.toUpperCase().includes('sharma'.toUpperCase()));

// //replace
console.log('***');
console.log(myString.replace(/A/g, 'X')); ///g flag to replace all occurrances
console.log(myString.replace(/A/gi, 'X')); ///i flag to make it case in-sensitive
//replaceAll

console.log('***');
console.log(myString.replaceAll('A', 'X')); ///g flag to replace all occurrances
//but it can't be case in-sensitive

//split=> a string can be converted into array with this method
const str11 = 'Hello';
const chars = str11.split('');
console.log(chars); // Output: ['H', 'e', 'l', 'l', 'o']

const str = 'Hello World';
const parts = str.split(' '); //space separator
console.log(parts); // Output: ['Hello', 'World']

const str1 = 'apple,banana,orange';
const fruits = str1.split(',');
console.log(fruits); // Output: ['apple', 'banana', 'orange']

const str3 = 'apple,banana;orange+kiwi';
const parts1 = str3.split(/[;,+]/);
console.log(parts1); // Output: ['apple', 'banana', 'orange']
