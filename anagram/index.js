const anagram1 = require('./anagram1'),
      anagram2 = require('./anagram2');

// Strings
const str1 = 'funeral';
const str2 = 'real fun';
const str3 = 'FUNERAL';
const str4 = 'ReAl! Fun';
const str5 = 'Hello';
const str6 = 'World';


// anagram1
console.log(`'${str1}' is anagram of '${str2}': ${anagram1(str1, str2)}`);
console.log(`'${str3}' is anagram of '${str4}': ${anagram1(str3, str4)}`);
console.log(`'${str5}' is anagram of '${str6}': ${anagram1(str5, str6)}`);

// anagram2
console.log(`'${str1}' is anagram of '${str2}': ${anagram2(str1, str2)}`);
console.log(`'${str3}' is anagram of '${str4}': ${anagram2(str3, str4)}`);
console.log(`'${str5}' is anagram of '${str6}': ${anagram2(str5, str6)}`);
