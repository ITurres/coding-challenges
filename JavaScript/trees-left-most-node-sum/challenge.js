//! solution #1 using recursion

function leftmostNodesSum(array, index = 0) {
  if (index >= array.length || array[index] === 0) {
    return 0; //? Return 0 when out of bounds or if encounter num is zero
  }

  const currentNum = array[index];
  const leftChildIndex = 2 * index + 1;

  return currentNum + leftmostNodesSum(array, leftChildIndex);
}

//! solution #2 using a for loop
//? returns correct outputs for the 1st two arrays, however on the third it returns 44,
//? when 29 should be the correct output. I'm not sure why this is happening, need to
//? find why and how to fix it
//* -- commented for now

// function leftmostNodesSum(array) {
//   const [rootNum, ...rest] = array;
//   let arrayLength = rest.length - 1;
//   let result = 0;

//   for (let i = 0; i < arrayLength; i++) {
//     const leftChildIndex = 2 * i + 1;
//     const leftChildNum = array[leftChildIndex];

//     if (leftChildNum === 0) {
//       continue;
//     } else if (leftChildNum === undefined) {
//       break;
//     }

//     result += leftChildNum;

//     if (leftChildIndex >= arrayLength / 2) {
//       break;
//     }
//   }

//   return rootNum + result;
// }

console.log(leftmostNodesSum([2, 7, 5, 2, 6, 0, 9]));
//* => 11
console.log(leftmostNodesSum([1, 7, 5, 2, 6, 0, 9, 3, 7, 5, 11, 0, 0, 4, 0]));
//* => 13
console.log(
  leftmostNodesSum([5, 3, 4, 11, 13, 15, 21, 10, 4, 7, 2, 8, 0, 9, 0])
);
//* => 29

module.exports = leftmostNodesSum;
