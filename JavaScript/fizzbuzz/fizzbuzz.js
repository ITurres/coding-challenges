module.exports = function () {
  /*
    * initialize an object with the 2 fizzBuzz string and its required divisible values
    * initialize and empty results array

    ? run a for loop from 1 to the number itself
        * initialize an empty string variable for the 'fizz' and 'buzz' strings
        * initialize an empty integer variable for the numbers (not divisible by the index num) 
      ? run an inner loop for every key in the object

     ! check if the first for loop value (aka index = i) it is divisible by the object key
       !if it is then assign the object key value to a variable

    ! check if the string variable is empty
      ! assign the first loop index number
      ! push this to the results array
    ! else
      ! push the string results to the results array 
  */

  const fizzBuzzDivisibleValuesObj = { 3: "Fizz", 5: "Buzz" };
  const results = [];

  for (let i = 1; i <= 100; i++) {
    let preStringResult = "";
    let preIntResult = 0;

    for (let key in fizzBuzzDivisibleValuesObj) {
      if (i % key === 0) {
        preStringResult += fizzBuzzDivisibleValuesObj[key];
      }
    }

    if (!preStringResult) {
      preIntResult = i;
      results.push(preIntResult);
    } else {
      results.push(preStringResult);
    }
  }

  return results;
};
