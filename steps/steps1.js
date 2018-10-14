const steps = n => {
  for(let row = 0; row < n; row++) {
    let line = '';
    for(let col = 0; col < n; col++) {
      if(col <= row) {
        line += '*';
      } else {
        line += ' ';
      }
    }
    console.log(line);
  }
}

module.exports = steps;
