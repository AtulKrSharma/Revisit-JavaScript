// function declaration= regular way
function inrTocadConvertor(inrCurrency) {
  return `cad $ ${(inrCurrency / 50).toFixed(2)}`;
}
console.log(inrTocadConvertor(651));

// function expression as in expression as with variable
const usdTocadConverter1 = function (usdCurrency) {
  return `cad $ ${(usdCurrency / 0.75).toFixed(2)}`;
};
console.log(`usdTocadConverter1: ${usdTocadConverter1(100)}`);

//arrow function expression as in expression as with variable
const usdTocadConverter = (usdCurrency) =>
  `cad $ ${(usdCurrency / 0.75).toFixed(2)}`;
console.log(`usdTocadConverter: ${usdTocadConverter(100)}`);

//return objects

const createObject = (param1, param2) => {
  return {
    fname: param1,
    lname: param2,
  };
};

console.log(createObject('Vami', 'Sharma'));
