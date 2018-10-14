const fibonacci = n => {
  const series = [0, 1];
  for(let index = 2; index <= n; index++) {
    const a = series[index - 1];
    const b = series[index - 2];
    series.push(a + b);
  }
  return series[n];
}

module.exports = fibonacci;
