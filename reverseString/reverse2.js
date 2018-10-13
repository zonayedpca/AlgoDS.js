function reverse2(str) {
  let reversed = '';
  for(let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

module.exports = reverse2;
