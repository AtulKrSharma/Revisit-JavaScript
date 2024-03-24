// 3 scopes are there in js
//global scope
const globalVariable = 100;
//function scope

function myFunction(param1) {
  const functionVariable = 10;
  console.log(param1 + functionVariable + globalVariable);
}

myFunction(20);

function myblockFunction(param1) {
  //block scope
  if (param1 % 2 === 0) {
    const nowVariable = 20;
    return param1 + 20;
  } else {
    const thenVariable = 30;
    return param1 + thenVariable;
  }
}

// const finalAValue = thenVariable + 10;
// console.log(finalAValue);

// const finalFunctionValue = functionVariable + 30;
// console.log(finalFunctionValue);
