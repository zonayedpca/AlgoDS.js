const capitalize1 = require('./capitalize1'),
      capitalize2 = require('./capitalize2');

// Sentences
const sen1 = 'a lazy dog';
const sen2 = 'look it\'s working';

// capitalize1
console.log(`'${sen1}': ${capitalize1(sen1)}`);
console.log(`'${sen2}': ${capitalize1(sen2)}`);

// capitalize2
console.log(`'${sen1}': ${capitalize2(sen1)}`);
console.log(`'${sen2}': ${capitalize2(sen2)}`);
