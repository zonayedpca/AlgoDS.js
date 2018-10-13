function palindrome1(str) {
  const reversedStr = str.split('').reverse().join('');
  return reversedStr === str;
}

module.exports = palindrome1;
