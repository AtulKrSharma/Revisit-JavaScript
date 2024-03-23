const myObject = {
  Fname: 'Atul',
  Lname: 'Sharma',
  age: 40,
  eduction: { Grad: 'BTech', PostGrad: 'MBA' },
  location: 'Canada',
  address: {
    Street: 1713,
    isCircle: true,
  },
  phoneNumbers: ['4376886240', '4376886241'],
  canDrive: (carName) => `I can drive ${carName}`,
  whatProfession: function (profession) {
    console.log(`${this.Fname} ${this.Lname} works in ${profession}`);
  },
};

//access obj and it's values
console.log(myObject);
console.log(myObject.age);
console.log(myObject['location']);
console.log(myObject.eduction.PostGrad);
console.log(myObject.phoneNumbers[1]);
console.log(myObject.address.isCircle);
console.log(myObject.canDrive('Maruti'));
myObject.whatProfession('IT');
