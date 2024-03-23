const myNumber = 1682.99999;

console.log(typeof myNumber, myNumber.toString().length);

//tofixed makes it a String
console.log(typeof myNumber.toFixed(1), myNumber.toFixed(1));

//cast into number
console.log(
  typeof parseInt(myNumber.toFixed(1)),
  parseInt(myNumber.toFixed(1))
);
