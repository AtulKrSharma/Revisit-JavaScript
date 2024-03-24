// You are given a variable, . Your task is to print:

// - ONE, if  is equal to .
// - TWO, if  is equal to .
// - THREE, if  is equal to .
// - FOUR, if  is equal to .
// - FIVE, if  is equal to .
// - SIX, if  is equal to .
// - SEVEN, if  is equal to .
// - EIGHT, if  is equal to .
// - NINE, if  is equal to .
// - PLEASE TRY AGAIN, if  is none of the above.
const num = 8;
switch (num * 2 + 1) {
  case 16 + 1:
    console.log(`ONE`);
    break;
  case 23:
    console.log(`TWO`);
    break;
  case 8:
    console.log(`THREE`);
    break;
  default:
    console.log(`PLEASE TRY AGAIN!!`);
}

const hour = 24;

switch (true) {
  case hour <= 21 && hour > 10:
    console.log(`shops are open`);
    break;
  case hour < 10:
    console.log(`shops are closed`);
    break;
  default:
    console.log(`sorry, I'm new to the town`);
}
