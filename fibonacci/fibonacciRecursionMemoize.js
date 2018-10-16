const memoization = require('./memoization');

const fibonacciRecursion = n => {
  if(n < 2) {
    return n;
  }

  return fibonacciRecursionMemoize(n - 1) + fibonacciRecursionMemoize(n - 2);
}

const fibonacciRecursionMemoize = memoization(fibonacciRecursion);

module.exports = fibonacciRecursionMemoize;
