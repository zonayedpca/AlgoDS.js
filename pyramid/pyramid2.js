const pyramid2 = (n, row = 0, level = '') => {
  if(n === row) {
    return;
  }

  if(level.length === (n * 2 - 1)) {
    console.log(level);
    return pyramid2(n, row + 1);
  }

  const mid = Math.floor((n * 2 - 1)/2);
  let add;
  if(mid - row <= level.length && mid + row >= level.length) {
    add = '*';
  } else {
    add = ' ';
  }

  return pyramid2(n, row, level + add);
}

module.exports = pyramid2;
