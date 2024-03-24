//array map function can be chained

const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(`arr1: ${arr1}`);

const mappedArr = arr1
  .map((element) => element * 2)
  .map((resultElement) => resultElement / 2 + 1);
console.log(`mappedArr: ${mappedArr}`);
