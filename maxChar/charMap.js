function charMap(str) {
  const map = {};
  const string = str.toLowerCase().replace(/\s/g, '');
  for(let char of string) {
    map[char] = map[char]+1 || 1;
  }
  return map;
}

module.exports= charMap;
