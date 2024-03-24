const myString = 'developer'; //result1=>Developer

//console.log(myString.charAt(0).toUpperCase());
//console.log(myString.charAt(myString.length - 1).toUpperCase());
console.log(myString.charAt(0).toUpperCase().concat(myString.slice(1)));
console.log(myString.charAt(0).toUpperCase().concat(myString.substring(1)));

//result1=>Developer

console.log(myString.charAt(0).toUpperCase());
console.log(myString.charAt(myString.length - 1).toUpperCase());
console.log(myString.charAt(0).toUpperCase().concat(myString.slice(1)));
console.log(
  myString
    .charAt(0)
    .toUpperCase()
    .concat(myString.substring(1))
    .substring(0, myString.length - 1)
    .concat(myString.charAt(myString.length - 1).toUpperCase())
);
