const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 18];

const shadowArray = array.filter((element) => element % 3 === 0);

console.log(shadowArray);

function fiveAndGreaterOnly(arr) {
  const fiverArr = arr.filter((element) => element >= 5);
  return fiverArr;
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 10, 16, 2])); /// [6, 8];

//navigation
//array.forEach((element, index) => console.log(`${index},${element}`));

//function passed to call back

//array.forEach(valuePrinter);

// function valuePrinter(value) {
//   console.log(`Entering valuePrinter`);
//   console.log(`${value}`);
//   console.log(`Exiting valuePrinter`);
// }

//function with return to call back

// function valueReturn(value) {
//   return value * 10;
// }

// array.forEach((element) => {
//   console.log(valueReturn(element));
// });
