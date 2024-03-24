const myObject = {
  Fname: 'Atul',
  education: { Grad: 'BTech', PostGrad: 'MBA' },
  location: 'Canada',
  address: {
    Street: 1713,
    isCircle: true,
  },
  phoneNumbers: ['4376886240', '4376886241'],
  profession: 'IT',
  canDrive: (carName) => `I can drive ${carName}`,
  whatProfession: function () {
    console.log(`${this.Fname} works in ${this.profession}`);
  },
};

logDetails(myObject);

//rest parameters ...
function logDetails({ Fname, location, education, ...rest }) {
  console.log('In log Details');
  console.log(Fname);
  console.log(education.Grad);
  //console.log(education.PostGrad);
  console.log(location);
  console.log(rest);
  console.log('Exiting log Details');
}

//Object Destructuring:
console.log('//with same variable on both sides');
const {
  Fname,
  education: { Grad, PostGrad },
  location,
  address: { Street, isCircle },
  phoneNumbers: [index0, index1],
} = myObject;

console.log(Fname);
console.log(Grad);
console.log(PostGrad);
console.log(location);
console.log(Street);
console.log(isCircle);
console.log(index0);
console.log(index1);

console.log(
  '//with different variables on both sides and colon shows “what : goes where”'
);
const {
  Fname: fn,
  education: { Grad: G, PostGrad: PG },
  location: loc,
  address: { Street: strt, isCircle: iCir },
  phoneNumbers: [phone1, phone2],
} = myObject;

console.log(fn);
console.log(G);
console.log(PG);
console.log(loc);
console.log(strt);
console.log(iCir);
console.log(phone1);
console.log(phone2);
