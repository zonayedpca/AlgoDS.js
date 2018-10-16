const fibonacci = require('./fibonacci'),
      fibonacciRecursion = require('./fibonacciRecursion'),
      fibonacciRecursionMemoize =  require('./fibonacciRecursionMemoize');

// fibonacci():
console.log(`fibonacci(3) => ${fibonacci(3)}`);
console.log(`fibonacci(9) => ${fibonacci(9)}`);

// fibonacciRecursion():
console.log(`fibonacci(3) => ${fibonacciRecursion(3)}`);
console.log(`fibonacci(9) => ${fibonacciRecursion(9)}`);

// memoization fibonacciRecursion
console.log(`fibonacci(9) => ${fibonacciRecursionMemoize(9)}`);
console.log(`fibonacci(3) => ${fibonacciRecursionMemoize(3)}`);
