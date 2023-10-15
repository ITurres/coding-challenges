function hashTable(arr) {
  const hashTableMap = new Map();

  function hashFunction(n) {
    return Math.abs(n) % 11;
  }

  for (const num of arr) {
    const hashBucket = hashFunction(num);
    if (!hashTableMap.has(hashBucket)) {
      hashTableMap.set(hashBucket, []);
    }
    hashTableMap.get(hashBucket).push(num);
  }

  const result = [];
  for (let i = 0; i < 11; i++) {
    if (hashTableMap.has(i)) {
      result.push(...hashTableMap.get(i));
    }
  }

  // *console.log(result);
  return result;
}

console.log(
  hashTable([
    2367, -65325, 134, -185007, 3291, 7832, -65326, 789, 980, -3289, 3,
  ]),
); // ?[7832, -3289, 980, 2367, 134, 3291, 3, -65325, -65326, 789, -185007]

console.log(
  hashTable([
    4376, -345, -342, 4376, -345, 84945, 4376, -347, -26509, 4376, 84945, 84944,
    -26509, 896341, 4376,
  ]),
); // ?[-342, 84944, 84945, 84945, -345, -345, -347, 896341, 4376, 4376, 4376, 4376, 4376, -26509, -26509]

console.log(
  hashTable([
    10935, 12732, -3058, 1673, 14971, 5701, 18342, 4590, -10248, -11243, -5848,
    14836, 7648, -3772, -8700, 19165, -16397, -13192, -18946, 14203,
  ]),
); // ?[-3058, 14971, 10935, 1673, -11243, 14203, 5701, 4590, 7648, 19165, -13192, -18946, 12732, 18342, -10248, -5848, -16397, 14836, -3772, -8700]

module.exports = hashTable;

// // ! Solution 2:
// function hashTable2(arr) {
//   const hashArray = Array.from({length:11}, () => []);
//   // Iterate the arr
//   arr.forEach((num) => {
//     // Get the index
//     const index = Math.abs(num) % hashArray.length;
//     hashArray[index].push(num);
//   });
//   return res.flat();
// }
// console.log(hashTable([12, 24, 125, 5, 91, 1106, 2, 1021, 29, 3536, 10]))
// // => [12, 24, 2, 91, 125, 5, 3536, 1106, 29, 1021, 10]
// console.log(hashTable([2, 341, 73, 8265, 234004, 602, 7400000, 200000000]))
// // => [341, 234004, 2, 200000000, 7400000, 8265, 73, 602]
// module.exports = hashTable

// // ! Solution 3:

// function hashTable(arr) {
//   // Iterate the arr
//   const map = new Map();
  
//   for (let i=0;i<11; i++) {
//     map.set(i, []);
//   }
  
//   arr.forEach((num) => {
//     // Get the index
//     const index = Math.abs(num) % map.size;
//     const array = map.get(index)
//     array.push(num);
//     map.set(index, array)
//   });
//   const result = [...map.values()]
//   return result.flat();
// }
// console.log(hashTable([12, 24, 125, 5, 91, 1106, 2, 1021, 29, 3536, 10]))
// // => [12, 24, 2, 91, 125, 5, 3536, 1106, 29, 1021, 10]
// console.log(hashTable([2, 341, 73, 8265, 234004, 602, 7400000, 200000000]))
// // => [341, 234004, 2, 200000000, 7400000, 8265, 73, 602]
// module.exports = hashTable
