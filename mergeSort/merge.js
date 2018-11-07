const merge = (arrOne, arrTwo) => {
  const result = [];
  while(arrOne.length && arrTwo.length) {
    if(arrOne[0] > arrTwo[0]) {
      result.push(arrTwo.shift());
    } else {
      result.push(arrOne.shift());
    }
  }
  return [...result, ...arrOne, ...arrTwo];
}

module.exports = merge;
