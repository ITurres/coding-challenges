module.exports = function (num) {
  /*
   * initialize two integer variables and one array:
   *
   * since the first two numbers of all fibonacci numbers are 1 and 1 => initialize current number to one of the 1;
   * previous number to 0 and the 'all odds' (the array that will be return);
   *
   * start a loop that runs until the current number is less or equal to the input number;
   * within it, check for the 'oddnes' of the current number by the result return by the modulus operator,
   * if it is odd then push the current odd number to the 'all odds' array;
   * else
   * add to current number the value of the previous number (to move forward) and,
   * set previous number to be the current number minus the actual previous number;
   *
   * finish by returning the sum of all odds numbers within the array by adding the next
   * with the previous;
   *
   * Why an array? so if one day it is required to return not the sum of all but every odd number of the entire list,
   * then it is done by returning the array itself.
   */

  let currNum = 1;
  let prevNum = 0;
  const allOdds = [];

  while (currNum <= num) {
    if (currNum % 2 !== 0) {
      allOdds.push(currNum);
    }
    currNum += prevNum;
    prevNum = currNum - prevNum;
  }

  return allOdds.reduce((a, b) => a + b);
};

// console.log(
//   sumFibs(1000),
//   "\n", //? ^ === 1785;
//   sumFibs(4000000),
//   "\n", //? ^ === 4613732;
//   sumFibs(4),
//   "\n", //? ^ === 5;
//   sumFibs(75024),
//   "\n", //? ^ === 60696;
//   sumFibs(75025),
//   "\n" //? ^ === 135721)
// );
