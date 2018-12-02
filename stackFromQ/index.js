const Stack = require('./stack');

const s = new Stack();
const pushed1 = s.push(5);
console.log('Pushed Data:', pushed1);
const pushed2 = s.push(4);
console.log('Pushed Data:', pushed2);
const pushed3 = s.push(3);
console.log('Pushed Data:', pushed3);
console.log('Popped Data:', s.pop());
console.log('Popped Data:', s.pop());
