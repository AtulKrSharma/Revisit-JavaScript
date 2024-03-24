const myArr = [1, 2, 3, 4, , 5, 7, 8, 9, 10];

const outputArr = [];

myArr.forEach((element) => {
  outputArr.push(element * 2);
});

console.log(`outputArr: ${outputArr}`);

///better way with array map function

const doubledArr = myArr.map((element) => element * 2);
console.log(`doubledArr: ${doubledArr}`);

//Usage#2
console.log(`//Usage#2`);
const inputArray = [
  { id: 1, start: 1955, end: 2001, category: 'Retail' },
  { id: 2, start: 1985, end: 1990, category: 'Oil' },
  { id: 3, start: 1990, end: 2001, category: 'Retail' },
  { id: 4, start: 1947, end: 2005, category: 'IT' },
  { id: 5, start: 1900, end: 2007, category: 'Detail' },
];

//an array with company names:

const companyNamesArray = inputArray.map((element) => element.category);
console.log(`companyNamesArray: ${companyNamesArray}`);

//an array with object with company names and it's category
const companyNamesCatArray = inputArray.map((element) => {
  return { id: element.id, category: element.category };
});
console.log(`companyNamesCatArray: ${companyNamesCatArray}`);

//an array with length of each company in years
const lengthCompany = inputArray.map((element) => element.end - element.start);
console.log(`lengthCompany: ${lengthCompany}`);

//an array of objects with name and length of each company in years

const nameLengthArr = inputArray.map((element) => {
  return { ID: element.id, length: element.end - element.start };
});

console.log(`nameLengthArr: ${nameLengthArr}`);
