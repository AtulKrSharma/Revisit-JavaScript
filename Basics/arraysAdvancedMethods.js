//Array Extraction:-
//create array via literal
const myNumberArray = [1, 6, 8, 9, 45];
//create array via Array constructor
const myStringArray = new Array('12', '23', '16', '34');

console.log(myStringArray.includes('12'));
console.log(myStringArray.includes('DD'));
console.log(myStringArray.indexOf('16'));
console.log(myStringArray.indexOf('atulsharma'));

console.log(myNumberArray.slice(0, 3)); //[ 1, 6, 8 ]
//slice(start index, end index) but end index is not included

console.log(myNumberArray.splice(2, 2)); //[8,9]
//splice(start index, how many indexes to traverse)

const fruitsX = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const slicedFruits = fruitsX.slice(1, 4);
console.log(slicedFruits); // Output: ['banana', 'orange', 'grape']
console.log(fruitsX); // Output: ['apple', 'banana', 'orange', 'grape', 'kiwi']

const fruitsY = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const removedFruits = fruitsY.splice(1, 2, 'pear', 'melon');
console.log(removedFruits); // Output: ['banana', 'orange']
console.log(fruitsY); // Output: ['apple', 'pear', 'melon', 'grape', 'kiwi']

// In summary, `slice()` is used to create a new array containing a subset of elements from the original array without modifying it, while `splice()` is used to modify the original array by removing, replacing, or adding elements to it.
