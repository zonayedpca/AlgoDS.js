const vowels1 = str => {
  const vowelSet = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for(let char of str.toLowerCase()) {
    if(vowelSet.includes(char)) {
      count++;
    }
  }

  return count;
}

module.exports = vowels1;
