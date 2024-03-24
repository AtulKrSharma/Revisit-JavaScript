//ternary operator => condittion? if true: if false
const randomNumberAdd = Math.floor(Math.random() * 10);
const todayDate = new Date().getDate() + randomNumberAdd;
console.log(todayDate);
todayDate % 2 === 0 ? console.log(`even date`) : console.log(`odd date`);

//ternary assignment

const age = todayDate;
console.log(`driver age: ${age}`);
const canDrive = age >= 18 ? true : false;
console.log(`canDrive: ${canDrive}`);

//multiple statements in a ternary operator

const auth = Math.floor(Math.random() * 100) % 2 === 1;
let redirect;

redirect = auth
  ? (console.log(true), console.log('/dashboard'))
  : (console.log(false), console.log('/login'));

//ternary with if but no else
const authorize = Math.floor(Math.random() * 100) % 2 === 1;
let isAuthorize = authorize ? true : null;

console.log(`isAuthorize: ${isAuthorize}`);
