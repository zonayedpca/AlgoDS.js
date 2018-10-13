const arrayChunk1 = require('./arrayChunk1'),
      arrayChunk2 = require('./arrayChunk2');

// Arrays
const arr11 = [1, 2 , 3, 4];
const arr12 = [1, 2 , 3, 4, 5];
const arr21 = [1, 2 , 3, 4];
const arr22 = [1, 2 , 3, 4, 5];

// arrayChunk1
console.log(`[${arr11}] is chunked by '${2}': [${arrayChunk1(arr11, 2)}]`);
console.log(`[${arr12}] is chunked by '${4}': [${arrayChunk1(arr12, 4)}]`);

// arrayChunk2
console.log(`[${arr21}] is chunked by '${2}': [${arrayChunk2(arr21, 2)}]`);
console.log(`[${arr22}] is chunked by '${4}': [${arrayChunk2(arr22, 4)}]`);