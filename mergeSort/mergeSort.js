const merge = require('./merge');

const mergeSort = arr => {
  if(arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length/2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

module.exports = mergeSort;
