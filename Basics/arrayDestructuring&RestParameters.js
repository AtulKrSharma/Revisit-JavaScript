let fruits = ['apple', 'pear', 'oranges', 'grapes', 'tomato'];

let [apple, pear, ...oranges] = fruits;
//...rest parameter to collect all values except apple, pear

console.log(apple);
console.log(pear);
console.log(oranges);

let [appy, peppy, ...ory] = fruits;

console.log(appy);
console.log(peppy);
console.log(ory);

////complext nested object
const myObject = {
  Fname: 'Atul',
  address: {
    Street: 1713,
    isCircle: true,
  },
  phoneNumbers: ['4376886240', '4376886241'],
};

const {
  Fname,
  address: { Street },
  address: { isCircle },
  phoneNumbers: [no1, item2],
} = myObject;

console.log(Fname);
console.log(Street);
console.log(isCircle);
console.log(no1);
console.log(item2);
