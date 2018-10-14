const steps = n => {
  const mid = Math.floor((n * 2 - 1)/2);
  for(let row = 0; row < n; row++) {
    let level = '';
    for(let col = 0; col < (n * 2 - 1); col++) {
      if(mid - row <= col && mid + row >= col) {
        level += '*';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
}

module.exports = steps;
