const myObject = {
  Fname: 'Atul',
  address: {
    street: 1713,
    isCircle: true,
  },
  phoneNumbers: ['4376886240', '4376886241'],
};

for (let key in myObject) {
  // Check if the property is an object or array
  if (typeof myObject[key] === 'object' && !Array.isArray(myObject[key])) {
    console.log(`Nested object ${key}:`);
    for (let nestedKey in myObject[key]) {
      console.log(`${nestedKey}: ${myObject[key][nestedKey]}`);
    }
  } else if (Array.isArray(myObject[key])) {
    console.log(`Array ${key}:`);
    for (let i = 0; i < myObject[key].length; i++) {
      console.log(myObject[key][i]);
    }
  } else {
    console.log(`${key}: ${myObject[key]}`);
  }
}
