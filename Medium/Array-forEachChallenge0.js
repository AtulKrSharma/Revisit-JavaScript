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

library.forEach((element) => console.log(`${element.title}`));
// how to get all the values of the object
