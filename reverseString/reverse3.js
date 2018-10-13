function reverse3(str) {
  return str.split('').reduce((reversed, char) => char + reversed,'');
}

module.exports = reverse3;
