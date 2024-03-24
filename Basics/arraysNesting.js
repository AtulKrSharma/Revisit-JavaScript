//Nesting of arrays
const fruits = ['apple', 'pear', 'oranges'];
const berries = ['strawberry', 'mulberry', 'soanperry'];

console.log(fruits);
console.log(berries);

//nesting of arrays
fruits.push(berries);
console.log(fruits);

//access the elements of the nested array
console.log(fruits[3][0]);

//create a new array with 2 arrays
const fruitBasket = [fruits, berries];
console.log(`fruitBasket: ${fruitBasket}`);
console.log(typeof fruitBasket);

//accessing element
console.log(fruitBasket[0][2]); //fruits array is of index 0
console.log(fruitBasket[1][2]); //berries array is of index 1
