const steps2 = (n, row = 0, step='') => {
  if(n === row) {
    return;
  }

  if(step.length === n) {
    console.log(step);
    return steps2(n, row + 1);
  }

  if(step.length <= row) {
    step += '*';
  } else {
    step += ' ';
  }

  return steps2(n, row, step);
}

module.exports = steps2;
