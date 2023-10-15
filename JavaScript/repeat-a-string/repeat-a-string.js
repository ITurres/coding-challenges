function repeatStringNumTimes(str, num) {
  /*
   * first check if the given 'num' parameter is a positive integer, if not
   * return and empty string;
   *
   * initialize an array variable
   *
   * start a loop that pushes the string to the array variable while the length of said array is less than the input 'num';
   *
   * return the final string by joining every element of the array with the 'join' method;
   */
  if (num < 1) return "";

  const newStrArray = [];

  while (newStrArray.length < num) {
    newStrArray.push(str);
  }

  return newStrArray.join("");
}

// console.log(
//   repeatStringNumTimes("*", 3),
//   "\n", //? ^ === '***')
//   repeatStringNumTimes("abc", 3),
//   "\n", //? ^ === 'abcabcabc')
//   repeatStringNumTimes("abc", 4),
//   "\n", //? ^ === 'abcabcabcabc')
//   repeatStringNumTimes("abc", 1),
//   "\n", //? ^ === 'abc')
//   repeatStringNumTimes("*", 8),
//   "\n", //? ^ === '********')
//   repeatStringNumTimes("abc", -2),
//   "\n", //? ^ === '')
//   repeatStringNumTimes("abc", 0),
//   "\n" //? ^ === '')
// );
module.exports = repeatStringNumTimes;
