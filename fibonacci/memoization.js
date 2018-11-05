const memoization = fn => {
  const cache = {};
  return function(n) {
    if (cache[n]) {
      return cache[n];
    }
    const result = fn(n);
    cache[n] = result;

    return result;
  }
}

module.exports = memoization;
