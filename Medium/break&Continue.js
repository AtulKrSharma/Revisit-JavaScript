//break

const arr1 = ['apple', 'pear', 'oranges', 'strawbrry', 'mulbery', 'soanpery'];

for (let index = 0; index <= arr1.length - 1; index++) {
  if (arr1[index] == 'oranges') {
    console.log(`Oranges are the best`);
    break;
  }
  console.log(`value of ${index} is ${arr1[index]}`);
}

console.log(`~~~~~~~~~~~~~~~~~~`);
//continue
const arr2 = ['apple', 'pear', 'oranges', 'strawbrry', 'mulbery', 'soanpery'];

for (let index = 0; index <= arr2.length - 1; index++) {
  if (arr2[index] == 'oranges') {
    console.log(`Oranges are the best`);
    continue;
  }
  console.log(`value of ${index} is ${arr2[index]}`);
}
