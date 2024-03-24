if (true) console.log(`this is true`);

if (false) console.log(`this is not true`);

if (3 === 3) console.log(`this is 3 true`);

if (3 * 4 === 12) console.log(`this is 12 true`);

function callbackNum(paramNum) {
  if (typeof paramNum === 'number') return paramNum + 100;
  else return `param was empty`;
}

console.log(callbackNum());
console.log(callbackNum(10));

///if else with nested if
const currentTemp = 28;

if (currentTemp <= 10) {
  console.log(`please carry quilt`);
} else {
  console.log(`please carry sweat-shirt`);
  if (currentTemp > 25) console.log(`Enjoy the weather outside`);
}
