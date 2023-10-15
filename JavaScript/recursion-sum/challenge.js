module.exports = function sum(number, total = 0) {
  if (number <= 0) {
    return total;
  }

  // *Accumulating implicitly
  return sum(number - 1) + number;
};

// console.log(sum(4));
// console.log(sum(10));
