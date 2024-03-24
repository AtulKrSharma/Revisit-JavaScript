// //Solution1 with for loop
for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(`FizzBuzz`);
    continue;
  }
  if (i % 3 === 0) {
    console.log(`Fizz`);
    continue;
  }

  if (i % 5 === 0) {
    console.log(`Buzz`);
    continue;
  }

  console.log(`${i}`);
}

//if else
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizbuzzy');
  }
  if (i % 3 === 0) {
    console.log('fizzy');
  } else if (i % 5 === 0) {
    console.log('buzzy');
  } else {
    console.log(`${i}`);
  }
}
