//array with spread operator
//fyip: it can be used with objects

const fruits = ['apple', 'pear', 'oranges'];
const berries = ['strawberry', 'mulberry', 'soanperry'];

console.log(fruits);
console.log(berries);
// spread operator [3 dots operator] ...
//items of fruits and berries are taken and created into a new array
const fullFruits = [...fruits, ...berries];
//fullFruits will be new array
console.log(`fullFruits: ${fullFruits}`);
//acessing element like a normal array
console.log(`fullFruits[1]: ${fullFruits[1]}`);
