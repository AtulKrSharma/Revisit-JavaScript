const obj2 = { Fname: 'Atul', Lname: 'Sharma', age: 40, location: 'Canada' };

const obj1 = {
  Fname1: 'Atul1',
  Lname1: 'Sharma1',
  age1: 401,
  location1: 'India',
};

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const arrayOfObj = [
  {
    Fname1: 'Atul1',
    Lname1: 'Sharma1',
  },

  {
    Fname3: 'Atul3',
    Lname3: 'Sharma3',
  },
];

console.log(arrayOfObj[0].Fname1);
console.log(arrayOfObj[1].Lname3);
console.log('^^^');

//Method of objects
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
//keys and values methods return array
console.log(Object.keys(obj1).length);
//above can help in finding the length of the object
console.log(Object.entries(obj1));
