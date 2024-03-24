////high order array methods:
// Higher order functions are functions that operate on other functions, either by receiving them as arguments or by returning them. It is a function that accepts a function as a parameter or returns a function as the output

//Situation#1 = simply loging the values on console by passing function into the callback function
const socials = ['twitter', 'linkedin', 'facebook', 'whatsapp'];
//socials.forEach((item, index) => console.log(`index: ${index},item: ${item}`));

// function paramValue(param) {
//   console.log(`Value is ${param}`);
// }
// socials.forEach(paramValue);

//Situation#2 = each element in the array needs to be passed in the multiplier function to be multiplied by 3

console.log(`//Situation#2`);
const myNumberArray = [1, 6, 8, 9, 45];

myNumberArray.forEach((item, index) => {
  console.log(`index: ${index}, item: ${item * 2}`);
});

function multiplier(paramMultiplier) {
  const result = paramMultiplier * 3;
  console.log(result);
  return result;
}

myNumberArray.forEach((item) => {
  multiplier(item);
});
