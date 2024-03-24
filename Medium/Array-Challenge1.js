//Challenge is to take young ppl form people array and display their
//name(club fname and lname property) and member properties

const people = [
  { fname: 'Angelina', lname: 'Jolie', member: 11, age: 24 },
  { fname: 'Eric', lname: 'Jones', member: 99, age: 77 },
  { fname: 'Paris', lname: 'Hilton', member: 22, age: 48 },
  { fname: 'Kayne', lname: 'West', member: 33, age: 23 },
  { fname: 'Bob', lname: ' Ziroll', member: 66, age: 25 },
];

//Solution#1
// const youngPeople = people.filter((element) => element.age <= 25);
// console.log(youngPeople);

// const fnlName = youngPeople.map((element) => {
//   return {
//     name: `${element.fname}-${element.lname}`,
//     member: element.member,
//   };
// });
// console.log(fnlName);

//Soution#2 with function chaining

const youngPeople = people
  .filter((element) => element.age <= 25)
  .map((element) => {
    return {
      name: `${element.fname}-${element.lname}`,
      member: element.member,
    };
  });
console.log(`youngPeople: ${youngPeople}`);

//soulution3:
const youngPeople11 = people
  .filter((element) => element.age <= 25)
  .map((element) => ({
    name: `${element.fname}-${element.lname}`,
    member: element.member,
  }));
console.log(`youngPeople11: ${youngPeople11}`);
