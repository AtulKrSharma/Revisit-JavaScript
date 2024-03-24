function calculator(paramNum1, paramNum2, paramOperator) {
  switch (paramOperator) {
    case '+':
      console.log(paramNum1 + paramNum2);
      break;
    case '-':
      console.log(paramNum1 - paramNum2);
      break;
    case '*':
      console.log(paramNum1 * paramNum2);
      break;
    case '/':
      console.log(paramNum1 / paramNum2);
      break;
    default:
      console.log(`error message`);
  }
}

calculator(5, 2, '+'); // 7
calculator(5, 2, '-'); // 3
calculator(5, 2, '*'); // 10
calculator(5, 2, '/'); // 2.5
calculator(5, 2, '&'); // error message
