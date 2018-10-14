const fibonacciRecursion = n => {
  if(n < 2) {
    return n;
  }

  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}

module.exports = fibonacciRecursion;
