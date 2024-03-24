//for in works for objects
const myObject = {
  Fname: 'Atul',
  address: {
    street: 1713,
    isCircle: true,
  },
  phoneNumbers: ['4376886240', '4376886241'],
};

for (const iterator in myObject) {
  console.log(`key:${iterator}`);
  console.log(`value:${myObject[iterator]}`);
  console.log(`~~~~`);
}

//if index and values are both needed= use for in loop in case of ARRAYs
//[array is a type of object in js]

//for of works fine but without index/keys
const myStringArray = ['12', '23', '16', '34'];
console.log(typeof myStringArray);
for (const iterator of myStringArray) {
  console.log(`iterator: ${iterator}`);
}

console.log(`~~~~`);

//for in works with index/keys
const myStringArray11 = ['12', '23', '16', '34'];
console.log(typeof myStringArray11);
for (const key in myStringArray11) {
  console.log(`key: ${key} value: ${myStringArray11[key]}`);
}
