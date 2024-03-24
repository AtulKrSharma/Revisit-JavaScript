//create array via literal
const myNumberArray = [1, 6, 8, 9, 45];
//create array via constructor
const myStringArray = new Array('12', '23', '34');

//access array or with specific element in an array
console.log(myNumberArray);
console.log(myNumberArray[1]);
console.log(myStringArray);
console.log(myStringArray[2]);

//accessing the length of array
console.log(myNumberArray.length);
console.log(myStringArray.length);

//adding element at index
myStringArray[3] = 'strawberry';
console.log(myNumberArray.length);
console.log(myStringArray.length);
console.log(myStringArray);

//adding element at the end of the array

myNumberArray[myNumberArray.length] = 'lastly'; //array length=array index+1
