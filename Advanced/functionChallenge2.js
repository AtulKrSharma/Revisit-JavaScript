//create a minMax function which accepts an array and return the object with min
//max values from the array

const minMax = (array) => {
  //remember that Math.max takes values are arguments, not array so need to
  //spread those using Spread operator to be used
  const max = Math.max(...array);
  const min = Math.min(...array);
  // if your variable name is same as of keys, then just don't add it.
  return {
    min,
    max,
  };
};

console.log(minMax([2, 45, 77, 99, 100]));

// When we see "..." in the code, it is either rest parameters or the spread syntax.

// There’s an easy way to distinguish between them:

// When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
// When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.
// Use patterns:

// Rest parameters are used to create functions that accept any number of arguments.
// The spread syntax is used to pass an array to functions that normally require a list of many arguments.
