//create a new array called Capitalized words from the current array

const words = ['developer', 'tester', 'manager'];

//sub problem#1 => ['Developer', 'Tester', 'Manager'];
//Solution#1
const capitalizedWords = words.map((word) => {
  return word.charAt(0).toUpperCase().concat(word.slice(1));
});
console.log(`capitalizedWords: ${capitalizedWords}`);

//Solution#2:
const capitalwords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1);
});
console.log(`capitalwords: ${capitalwords}`);

//high order array functions:
// foreach: return nothing and iterate over all elements with what you want
// filter: return sub array and iterate over all element with the condition that you want
// map: return sub array and iterate over all elements with what you want
// reduce: return a single value and iterate over all element with the condition that you want

//sub problem#2 => ['DEVELOPER', 'TESTER', 'MANAGER'];

const upperWords = words.map((word) => {
  return word.toUpperCase();
});
console.log(`upperWords: ${upperWords}`);
