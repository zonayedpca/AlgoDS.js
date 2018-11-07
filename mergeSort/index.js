const mergeSort = require('./mergeSort');

// Example One
const arrOne = [97, 0, 22, -30];
const sortedArrOne = mergeSort(arrOne);
console.log('The Array:', arrOne);
console.log('Sorted Array:', sortedArrOne);

// Example two
const arrTwo = [23, 15, 13, 52, -11, -1, 42, -12, -35, -211, 145, 554];
const sortedArrTwo = mergeSort(arrTwo);
console.log('The Array:', arrTwo);
console.log('Sorted Array:', sortedArrTwo);

// Example three
const arrThree = ['Bmw', 'Audi', 'Toyota', 'Ferrari', 'Lada'];
const sortedArrThree = mergeSort(arrThree);
console.log('The Array:', arrThree);
console.log('Sorted Array:', sortedArrThree);
