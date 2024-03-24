// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

//filter odd and create array with even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = numbers.filter((element) => element % 2 === 0);
console.log(`evens: ${evens}`);
console.log(`typeof evens: ${typeof evens}`);

const odds = numbers.filter((element) => element % 2 !== 0);
console.log(`odds: ${odds}`);
console.log(`typeof odds: ${typeof odds}`);

//same problem with forEach
console.log(`//same problem with forEach`);
const evensArray = [];
numbers.forEach((element) => {
  if (element % 2 === 0) {
    console.log(element);
    evensArray.push(element);
  }
});
console.log(`evensArray: ${evensArray}`);
console.log(`typeof evensArray: ${typeof evensArray}`);
