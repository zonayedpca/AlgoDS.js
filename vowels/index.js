const vowels1 = require('./vowels1'),
      vowels2 = require('./vowels2');

// Strings
const str1 = 'Hello There!';
const str2 = 'How are you?';
const str3 = 'My name is Akkas';

// vowels1
console.log(`'${str1} has ${vowels1(str1)} vowels'`);
console.log(`'${str2} has ${vowels1(str2)} vowels'`);
console.log(`'${str3} has ${vowels1(str3)} vowels'`);

// vowels2
console.log(`'${str1} has ${vowels1(str1)} vowels'`);
console.log(`'${str2} has ${vowels2(str2)} vowels'`);
console.log(`'${str3} has ${vowels2(str3)} vowels'`);
