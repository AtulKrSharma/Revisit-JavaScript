//Lesson of Array Manipulation:-

//create array via literal
const myNumberArray = [1, 6, 8, 9, 45];
//create array viamyStringArray constructor
const myStringArray = new Array('12', '23', '16', '34');

//add value at the end of array
myNumberArray.push(99);
console.log(myNumberArray);
myNumberArray.pop();
console.log(myNumberArray);

//add value at the start of array
myNumberArray.unshift(11);
console.log(myNumberArray);
myNumberArray.shift();
console.log(myNumberArray);

//reverse the array
const reversedArray = myNumberArray.reverse();
console.log(reversedArray);
