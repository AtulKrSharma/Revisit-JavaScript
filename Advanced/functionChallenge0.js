const myArray = [3, 4, 5, 6, 7];

function randomPicker1(dumbArray) {
  console.log(dumbArray.length);
  const index = Math.floor(Math.random() * dumbArray.length);
  console.log(index);
  return dumbArray[index];
}

console.log(randomPicker1(myArray));

console.log(`//alternate solution with rest parameters//`);

function randomPicker11(...restArray) {
  console.log(restArray.length);
  const index = Math.floor(Math.random() * restArray.length);
  console.log(index);
  return restArray[index];
}

console.log(randomPicker11(4, 5, 6, 7, 1, 2, 3));
