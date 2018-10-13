function reverse(number) {
  return parseInt(number.toString().split('').reverse().join('')) * Math.sign(number);
}

module.exports = reverse;
