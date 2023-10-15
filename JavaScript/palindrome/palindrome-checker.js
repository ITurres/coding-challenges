module.exports = function (str) {
  /*
   * initialize a variable with the input string and convert it into lowercase,
   * using the 'replace' method, replace all non alphanumeric characs with an empty string.
   *
   * return the boolean result given by the condition => if the new string after being splitted, reversed
   * and joined by the methods 'split, reverse, join', it is equal to the variable string, then >>true<< else >>false<<.
   */

  const newStr = str.toLowerCase().replace(/[^a-z\d]/g, "");
  return newStr.split("").reverse().join("") === newStr;
};

// console.log(
//   palindrome("eye"),
//   "\n", //? ^ true
//   palindrome("_eye"),
//   "\n", //? ^ true
//   palindrome("race car"),
//   "\n", //? ^ true
//   palindrome("not a palindrome"),
//   "\n", //? ^ false
//   palindrome("A man, a plan, a canal. Panama"),
//   "\n", //? ^ true
//   palindrome("never odd or even"),
//   "\n", //? ^  true
//   palindrome("nope"),
//   "\n", //? ^ false
//   palindrome("almostomia"),
//   "\n", //? ^ false
//   palindrome("My age is 0, 0 si ega ym."),
//   "\n", //? ^ true
//   palindrome("1 eye for of 1 eye"),
//   "\n", //? ^ false
//   palindrome("0_0 (: /- :) 0-0"),
//   "\n", //? ^ true
//   palindrome("five|_/|four"),
//   "\n" //? ^ false
// );
