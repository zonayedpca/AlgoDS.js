const Queue = require('./queue');

const q1 = new Queue([10, 20, 30, 40]);
console.log(q1.data);

// Add a new Item
q1.add(50);
console.log(q1.data);

// Remove a item
q1.remove();
console.log(q1.data);

console.log(q1.peek());
console.log(q1.data);
