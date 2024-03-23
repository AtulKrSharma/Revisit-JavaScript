const fruits = ['apple', 'pear', 'oranges'];
const berries = ['strawberry', 'mulberry', 'soanperry', 'periperi', 'laundry'];

console.log(
  '//with different variables on both sides and sequence matters, no colon needed”'
);
const [appy, perry, orry] = fruits;

console.log(appy);
console.log(perry);
console.log(orry);

console.log('//with same variable on both sides but and sequence matters,');
const [apple, pear, oranges] = fruits;

console.log(apple);
console.log(pear);
console.log(oranges);

//rest operator ...
const [strawberry, mulberry, ...rest] = berries;
console.log(strawberry);
console.log(mulberry);
console.log(rest); //[ 'soanperry', 'periperi', 'laundry' ]
