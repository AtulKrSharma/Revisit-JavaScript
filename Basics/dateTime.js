const date = new Date();

const formattedDateTimeENCA = Intl.DateTimeFormat('en-CA').format(date);
const formattedDateTimeENIN = Intl.DateTimeFormat('en-IN').format(date);
const formattedDateTimeENGB = Intl.DateTimeFormat('en-GB').format(date);
const formattedDateTimeENGBlong = Intl.DateTimeFormat('en-GB', {
  month: 'long',
}).format(date);
console.log(date);
console.log(formattedDateTimeENCA);
console.log(formattedDateTimeENIN);
console.log(formattedDateTimeENGB);
console.log(formattedDateTimeENGBlong);

console.log('$$$$$$$$$$$$$$$$$$$$$$$');

const formattedDateTimeENCA1 = date.toLocaleString();
const formattedDateTimeENIN1 = Intl.DateTimeFormat('en-IN').format(date);
const formattedDateTimeENGB1 = Intl.DateTimeFormat('en-GB').format(date);
console.log(date);
console.log(formattedDateTimeENCA1);
console.log(formattedDateTimeENIN1);
console.log(formattedDateTimeENGB1);
