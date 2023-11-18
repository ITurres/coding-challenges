import { measurePerformance } from '../../measurePerformance.js';

function fibonacciRecursive(n) {
  if (n <= 1) return n;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(measurePerformance(fibonacciRecursive, 35));

// * ---------------------------
// * Function: fibonacciRecursive
// * -------------
// * Result: 9227465
// * -------------
// ! Time taken: 209.46606300026178 milliseconds
// * ---------------------------
// * 0

// * TC: O(2^n) ------ due to the recursive calls.
// * TC: theta ---
// * TC: omega(1) --- when 'n' <= 1.
// * SC: O(1) ------- since we're not storing anything.

// ! ----------------------------------------------------------------------

function fibonacciRecursiveMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] =
    fibonacciRecursiveMemo(n - 1, memo) + fibonacciRecursiveMemo(n - 2, memo);

  return memo[n];
}

console.log(measurePerformance(fibonacciRecursiveMemo, 35));

// * ---------------------------
// * Function: fibonacciRecursiveMemo
// * -------------
// * Result: 9227465
// * -------------
// * Time taken for fibonacciRecursiveMemo: 0.09908800199627876 milliseconds
// * ---------------------------
// * 0

// * TC: O(2^n) ------ prior to memoization due to the recursive calls.
// *** TC: O(1) ------ after memoization.
// * TC: theta ---
// * TC: omega(1) --- when 'n' <= 1 or when 'n' is in the memo object.
// * SC: O(n) ------- due to the dynamic memory allocation of the memo object.

// ! ----------------------------------------------------------------------

function fibonacciIterative(n) {
  if (n <= 1) return n;

  let prevNum = 0;
  let nextNum = 1;
  let current = 0;

  for (let i = 2; i <= n; i++) {
    current = prevNum + nextNum;
    prevNum = nextNum;
    nextNum = current;
  }

  return current;
}

console.log(measurePerformance(fibonacciIterative, 35));

// * ---------------------------
// * Function: fibonacciIterative
// * -------------
// * Result: 9227465
// * -------------
// * Time taken: 0.06234100088477135 milliseconds
// * ---------------------------
// * 0

// * TC: O(n) ------ because it will be executed 'n' times.
// * TC: theta ---
// * TC: omega(1) --- when 'n' <= 1.
// * SC: O(1) ------- all three variables are constant.

// ! ----------------------------------------------------------------------