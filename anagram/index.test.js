const anagram1 = require('./anagram1'),
      anagram2 = require('./anagram2');

// Strings
const str1 = 'funeral';
const str2 = 'real fun';
const str3 = 'FUNERAL';
const str4 = 'ReAl! Fun';
const str5 = 'Hello';
const str6 = 'World';

test(`Anagram of ${str1} is ${str2}`, () => {
  expect(anagram1(str1, str2)).toBe(true);
  expect(anagram2(str1, str2)).toBe(true);
});

test(`Anagram of ${str3} is ${str4}`, () => {
  expect(anagram1(str3, str4)).toBe(true);
  expect(anagram2(str3, str4)).toBe(true);
});

test(`Anagram of ${str5} is not ${str6}`, () => {
  expect(anagram1(str5, str6)).toBe(false);
  expect(anagram2(str5, str6)).toBe(false);
});
