const palindrome1 = require('./palindrome1'),
      palindrome2 = require('./palindrome2');

const str1 = 'racecar';
const str2 = 'abcdef';

//Call palindrome1
console.log(`'${str1}' is a palindrome: ${palindrome1(str1)}`);
console.log(`'${str2}' is a palindrome: ${palindrome1(str2)}`);

//Call palindrome2
console.log(`'${str1}' is a palindrome: ${palindrome2(str1)}`);
console.log(`'${str2}' is a palindrome: ${palindrome2(str2)}`);
