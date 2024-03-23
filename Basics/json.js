//JSON: data interchange format  and programming language agnostic.
//JS object: is the collection of proprties and methods and it's in JS
//structure of the both is almost same except Keys has double quotes in JSON and can't have methods in it.

//Please note the once stringfied, dot operator can't get the vaulues
//it needs to parsed and then, it will act as js object

import jsonData from './jsonObject.json' assert { type: 'json' };

const jsObject = {
  name: 'Atul',
  address: { Street: 1713, isCircle: true },
  phoneNumbers: ['4376886240', '4376886241'],
  profession: 'IT',
  whatProfession: function (profession) {
    console.log(`${this.Fname} ${this.Lname} works in ${profession}`);
  },
};

const arrayOfJSObject = [
  { key1: 'val1' },
  { key11: 'val11' },
  { key1111: 'val1111' },
];

console.log(`//convert js object to json`);
const convertedJSON = JSON.stringify(jsObject);
console.log(`convertedJSON: ${convertedJSON}`);

console.log(`//convert json to js object`);
const validJSON = convertedJSON;
console.log(JSON.parse(validJSON));

console.log(`//convert array of js object to json`);
const convertedarrayofJSON = JSON.stringify(arrayOfJSObject);
console.log(`convertedarrayofJSON: ${convertedarrayofJSON}`);

/// how to get valid json via import??
// console.log(`//convert json to js object`);
// console.log(jsonData);
// console.log(typeof jsonData);
// //const convertedJSObject = JSON.parse(jsonData);
// //console.log(`convertedJSObject: ${convertedJSObject}`);
