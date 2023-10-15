module.exports = function sqrt(number) {
  return sqrt_recursive(number, 0, number);
};

function sqrt_recursive(number, min_interval, max_interval) {
  if (min_interval > max_interval) {
    return max_interval;
  }

  const middle = Math.floor((min_interval + max_interval) / 2);
  const target = middle * middle;

  if (target === number) {
    return middle;
  }

  if (target > number) {
    return sqrt_recursive(number, min_interval, middle - 1);
  }
  return sqrt_recursive(number, middle + 1, max_interval);
}
