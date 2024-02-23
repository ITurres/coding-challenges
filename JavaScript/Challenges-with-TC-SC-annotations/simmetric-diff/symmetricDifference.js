function symmetricDifference(ary1, ary2) {
  let resultAry = [];

  // ! v BRUTE FORCE SOLUTION ------- O(n^2)
  for (let ary1Elem of ary1) {
    if (!ary2.includes(ary1Elem)) {
      resultAry.push(ary1Elem);
    }
  }

  for (let ary2Elem of ary2) {
    if (!ary1.includes(ary2Elem)) {
      resultAry.push(ary2Elem);
    }
  }
  // ! ^ BRUTE FORCE SOLUTION ------- O(n^2)

  // ! v MID OPTIMIZED SOLUTION ------- O(n)
  // ? Both arrays could potentially have duplicates
  // * so it will be less efficient due to the constant duplicate checking.
  resultAry = [
    ...ary1.filter((ary1Elem) => !ary2.includes(ary1Elem)),
    ...ary2.filter((ary2Elem) => !ary1.includes(ary2Elem)),
  ];
  // ! ^ MID OPTIMIZED SOLUTION ------- O(n)

  // ! v OPTIMIZED SOLUTION ------- O(n)
  // ? Using Set to avoid duplicates
  // * but with the trade off of using more memory for the two new sets.
  const ary1Set = new Set(ary1);
  const ary2Set = new Set(ary2);

  resultAry = [
    ...new Set([
      ...ary1.filter((ary1Elem) => !ary2Set.has(ary1Elem)),
      ...ary2.filter((ary2Elem) => !ary1Set.has(ary2Elem)),
    ]),
  ];
  // ! ^ OPTIMIZED SOLUTION ------- O(n)

  return resultAry;
}

console.log(symmetricDifference([1, 2, 3, 4], [1, 2, 4])); // * = [3]

console.log(symmetricDifference(['f', 'k', 'l', 'n'], ['f', 'm', 'n'])); // * = ['k', 'l', 'm' ]

console.log(symmetricDifference(['g', 'y', 'z'], ['g', 'y', 'z'])); // * = []

console.log(
  symmetricDifference(['x', 'y', 'z', 'm', 'n'], ['a', 'b', 'm', 'y', 'o']),
); // * = ['x', 'z', 'n','a', 'b', 'o']
