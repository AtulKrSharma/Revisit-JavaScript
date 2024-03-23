const arr = [9, 7, 5, 3, 2, 0, 10];

console.log(
  arr
    .splice(0, arr.length - 1)
    .reverse()
    .toString()
    .charAt(1)
);
