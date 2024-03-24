function titleCase(str) {
  let arr = str
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1).toLowerCase());
  console.log('arr1', arr);

  let arr2 = str.split(' ');

  arr2.map((s) => s.charAt(0).toUpperCase() + s.substring(1).toLowerCase());
  console.log('arr2', arr2);
}

titleCase("I'm a little tea pot");
