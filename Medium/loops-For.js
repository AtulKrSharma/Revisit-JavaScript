//for loop
console.log(`//Smiple for loop`);
for (let index = 0; index <= 10; index++) {
  if (index == 7) {
    console.log(`7 is my lucky number`);
    continue;
  }
  console.log(`my index is: ${index}`);
}

//nested loops
console.log(`//nest loops`);
// for (let i = 1; i <= 3; i++) {
//   console.log(`my i is: ${i}`);
//   for (let j = 1; j <= 3; j++) {
//     console.log(`my j is: ${j}`);
//   }
// }

//loop through an array
const arr = ['apple', 'pear', 'oranges', 'strawbrry', 'mulbery', 'soanpery'];

for (let index = 0; index <= arr.length - 1; index++) {
  if (arr[index] == 'oranges') {
    console.log(`Oranges are the best`);
    continue;
  }
  console.log(`value of ${index} is ${arr[index]}`);
}
