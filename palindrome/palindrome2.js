function palindrome2(str) {
  return str.split('').every((char, index) => char === str[str.length - 1 - index]);
}

module.exports = palindrome2;
