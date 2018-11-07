const selectionSort = require('./selectionSort');

const arrOne = [97, 5, 10, 0, -30];
console.log('Given Array:', arrOne);
const sortedArrOne = selectionSort(arrOne);
console.log('Sorted Array:', sortedArrOne);

const arrTwo = ['Bmw', 'Audi', 'Toyota', 'Ferrari', 'Lada'];
console.log('Given Array:', arrTwo);
const sortedArrTwo = selectionSort(arrTwo);
console.log('Sorted Array:', sortedArrTwo);
