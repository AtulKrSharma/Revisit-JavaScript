// for of loops through the values of an iterable object and can loop over iterable data structures such as Arrays, Strings, Maps.

//Arrays
const myStringArray = ['12', '23', '16', '34'];
for (const iterator of myStringArray) {
  console.log(`iterator: ${iterator}`);
}

//Strings
const str = 'Hello World';
for (const letter of str) {
  console.log(`letter: ${letter}`);
}

//Map
const maps = new Map();
maps.set('name', 'Atul');
maps.set('age', 40);
maps.set('nickName', 'Lucky');

for (const [key, value] of maps) {
  console.log(`[key,value]: ${key}, ${value}`);
}
