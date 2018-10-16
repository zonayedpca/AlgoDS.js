const Queue = require('./queue');

const q = new Queue();
q.add(5);
q.add(4);
q.add(3);
console.log(q.remove());
console.log(q.remove());
console.log(q.peek());
