const inputArray = [
  { id: 1, start: 1955, end: 2001, category: 'Retail' },
  { id: 2, start: 1985, end: 1990, category: 'Oil' },
  { id: 3, start: 1990, end: 2001, category: 'Retail' },
  { id: 4, start: 1947, end: 2005, category: 'IT' },
  { id: 5, start: 1900, end: 2007, category: 'Detail' },
];

//companies which have category as Retail
const retailCompanies = inputArray.filter((element) => {
  return element.category === 'Retail';
});

console.log(`Retail: ${retailCompanies}`);

// companies started in or after 1980 and ended in or before 2005
const Companies = inputArray.filter((element) => {
  return element.start >= 1980 && element.end <= 2005;
});

console.log(`Companies: ${Companies}`);

//companies that lasted for 10 years or more
const decadeCompanies = inputArray.filter((element) => {
  return element.end - element.start >= 10;
});

console.log(`decadeCompanies: ${decadeCompanies}`);
