function peopleWhoBelongToTheIlluminati(arr) {
  const resultArr = arr.filter((element) => element.member == true);
  return resultArr;
}
// test
console.log(
  peopleWhoBelongToTheIlluminati([
    { name: 'Angelina Jolie', member: true },
    { name: 'Eric Jones', member: false },
    { name: 'Paris Hilton', member: true },
    { name: 'Kayne West', member: false },
    { name: 'Bob Ziroll', member: true },
  ])
);
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]

//foreach
const students = [
  { name: 'Alice', grade: 95 },
  { name: 'Bob', grade: 80 },
  { name: 'Charlie', grade: 75 },
];

// students.forEach(captureFullName);

// function captureFullName(student) {
//   console.log(student.name + ' - ' + student.grade);
// }

students.forEach((student) =>
  console.log(student.name + ' - ' + student.grade)
);
