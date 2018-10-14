const vowels2 = str => {
  const match = str.toLowerCase().match(/[aeiou]/ig);
  return match ? match.length : 0;
}

module.exports = vowels2;
