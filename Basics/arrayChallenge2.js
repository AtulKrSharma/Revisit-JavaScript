//challengeA => //result=> [6,5,4,3,2,1]

// solution-1
const arr1 = [1, 2, 3, 4, 5];
const reversedArray = arr1.reverse();
console.log(`reversedArray: ${reversedArray}`);
console.log(`Solution 1: ${[6, ...reversedArray, 0]}`);

//solution-2
const arr2 = [1, 2, 3, 4, 5];
arr2.push(6);
arr2.unshift(0);

console.log(`Solution 2: ${arr2.reverse()}`);
