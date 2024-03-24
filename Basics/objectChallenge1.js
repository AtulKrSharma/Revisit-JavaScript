//Step:1
const library = [
  {
    title: 'book1',
    author: 'author1',
    status: { own: true, reading: false, read: false },
  },
  {
    title: 'book2',
    author: 'author2',
    status: { own: true, reading: false, read: false },
  },
  {
    title: 'book3',
    author: 'author3',
    status: { own: true, reading: false, read: false },
  },
];

//Step:2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
//Step:3
const { title: firstBook } = library[0];
console.log(firstBook);
//step:4
console.log(JSON.stringify(library));
