const val = 25;
if (val >= 10 && val <= 30) console.log(`&&: value is under range`);
if (val >= 10 || val <= 30) console.log(`||: value is under range`);
if (val !== undefined) console.log(`!: value is ${val}`);

const tempArray = [1, 2, 3];

if (tempArray.length > 0 && tempArray[0]) console.log('array is not empty');
else console.log('array is empty');

//nullish coalescing operator ??

//returns the right side operand when the left is null or undefined
//otherwise returns its left-hand side operand.

const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0

let dummy = (null || undefined) ?? 'foo'; // returns "foo"

///******Logical Assignment- shorthand*******/

//OR
x ||= 20;
//x=x||20

// And
y &&= 40;
//y= y && 40

//nullish coalescing operator
z ??= 'foo';
//z=z?? 'foo'
