//challengeB => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //please no dupes of 5

const myArr1 = [1, 2, 3, 4, 5];
const myArr2 = [5, 6, 7, 8, 9, 10];

//Solution-1
const finalArrayConcat = myArr1.concat(myArr2);
console.log(`finalArrayConcat: ${finalArrayConcat}`);
const finalArrayConcat11 = finalArrayConcat.slice(0, 5);
const finalArrayConcat22 = finalArrayConcat.slice(6);
console.log(`finalArrayConcat11: ${finalArrayConcat11}`);
console.log(`finalArrayConcat22: ${finalArrayConcat22}`);
console.log(finalArrayConcat11.concat(finalArrayConcat22));

//Solution-2
const finalArraySpreader11 = [...myArr1, ...myArr2];
finalArraySpreader11.splice(4, 1);
console.log(`finalArraySpreader1: ${finalArraySpreader11}`);

//Solution-3
myArr1.pop();
console.log(`finalArraySpreader2: ${myArr1.concat(myArr2)}`);
//finalArraySpreader22.splice(4, 1);

//Solution-4
const arr3 = myArr1.slice(0, 4).concat(myArr2);
console.log(`arr3: ${arr3}`);
//finalArraySpreader22.splice(4, 1);
