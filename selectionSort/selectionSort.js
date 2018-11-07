const selectionSort = arr => {
  for(let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for(let j = i; j < arr.length; j++) {
      if(arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if(arr[indexOfMin] !== arr[i]) {
      let temp = arr[i];
      arr[i] = arr[indexOfMin];
      arr[indexOfMin] = temp;
    }
  }
  return arr;
}

module.exports = selectionSort;
