const myarr1 = [1, 2, 3];
const myarr2 = [4, 5, 6];

// nested array with 2 arrays
const myNewArr1 = [myarr1, myarr2];
console.log(`myNewArr1: ${myNewArr1}`);
console.log(myNewArr1[0]);
console.log(myNewArr1[1]);
console.log(myNewArr1[0][1]);
console.log(myNewArr1[1][0]);

//spread operator in arrys to be a single flattened array
const myNewArr2 = [...myarr1, ...myarr2];
console.log(`myNewArr2: ${myNewArr2}`);
console.log(myNewArr2[0]);
console.log(myNewArr2[4]);
console.log(myNewArr2[0][1]);
console.log(myNewArr2[1][0]);
