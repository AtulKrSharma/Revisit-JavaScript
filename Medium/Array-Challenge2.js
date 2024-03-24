//add all the positive numbers in the array

const myNumberArray = [1, -6, -8, -9, 45];

const finalArr = myNumberArray
  .filter((num) => num > 0)
  .reduce((accu, posNum) => accu + posNum, 0);

console.log(`finalArr: ${finalArr}`);
