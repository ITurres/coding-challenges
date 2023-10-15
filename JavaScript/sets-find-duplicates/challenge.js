function findDuplicates(array) {
  const set = new Set();
  // const duplicates = [];

  // for (const num of array) {
  //   set.has(num) ? duplicates.push(num) : set.add(num);
  // }

  const duplicates = array.filter((num) => {
    if (set.has(num)) {
      return num;
    } else {
      set.add(num);
      return false;
    }
  });

  return duplicates;
}

console.log(findDuplicates([1, 2, 3, 1, 5, 6, 7, 8, 5, 2]));
// => [1, 5, 2]

console.log(
  findDuplicates([
    3, 501, 17, 23, -43, 67, 5, 888, -402, 235, 77, 99, 311, 1, -43,
  ]),
);
// => [-43]

module.exports = findDuplicates;
