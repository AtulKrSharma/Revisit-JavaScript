//array reduce function reduces the complete array to a single value
//can be used where sum up the array, find an average of the array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const initialValue = 0;
const avg =
  numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  ) / numbers.length;

console.log(`avg: ${avg}`);

//for loop
let sum = 0;
for (let index = 0; index <= numbers.length - 1; index++) {
  console.log(`Current value: ${numbers[index]}`);
  sum = sum + numbers[index];
}
console.log(`Final Sum= ${sum}`);
console.log(`Final Avg= ${sum / numbers.length}`);

//for of loop
let sum1 = 0;
for (const iterator of numbers) {
  sum1 = sum1 + iterator;
}
console.log(`Final Sum= ${sum1}`);
console.log(`Final Avg= ${sum1 / numbers.length}`);

//for each loop
let accumulator = 0;
numbers.forEach((element) => {
  accumulator = accumulator + element;
  return accumulator;
});
console.log(`accumulator: ${accumulator}`);
