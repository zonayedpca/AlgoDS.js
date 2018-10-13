const charMap = require('./charMap');

function maxChar(str) {
  const map = charMap(str);
  let max = 0;
  let result;

  for(let char in map) {
    if(map[char] > max) {
      max = map[char];
      result = char;
    }
  }

  return result;
}

module.exports = maxChar;
