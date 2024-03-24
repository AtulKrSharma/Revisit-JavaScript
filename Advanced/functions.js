//functions
function clgLogger(param1, param2) {
  console.log(`hello, we've ${param1} & ${param2}`);
}
clgLogger('rakesh', 'rajesh');

//function with default params
function registerUser(user = 'BOT') {
  return user + ' is registered';
}

console.log(registerUser('Atul'));
console.log(registerUser());

//Rest params
function funAdd(param1, param2, ...param3) {
  console.log(param3);
  return param1 + param2;
}

console.log(funAdd(1, 2, 3, 4));

//object as params
function objEater(user) {
  return `I've eaten ${user.fname} ${user.lname}`;
}

console.log(objEater({ fname: 'Atul', lname: 'Sharma' }));

//array as params

function arrayEater(myArray) {
  return `This time I've eaten ${myArray[0]} ${myArray[1]}`;
}

console.log(arrayEater(['Dhani', 'Sharma']));
