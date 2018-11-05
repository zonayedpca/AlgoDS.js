const fibonacci = require('./fibonacci'),
      fibonacciRecursion = require('./fibonacciRecursion'),
      fibonacciRecursionMemoize =  require('./fibonacciRecursionMemoize');

// fibonacci():
console.log(`fibonacci(40) => ${fibonacci(40)}`);
console.log(`fibonacci(9) => ${fibonacci(9)}`);

// fibonacciRecursion():
console.log(`fibonacci(40) => ${fibonacciRecursion(40)}`);
console.log(`fibonacci(9) => ${fibonacciRecursion(9)}`);

console.time();
// memoization fibonacciRecursion
console.log(`fibonacci(40) => ${fibonacciRecursionMemoize(40)}`);
console.log(`fibonacci(3) => ${fibonacciRecursionMemoize(3)}`);
console.timeEnd();
