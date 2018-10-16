const Queue = require('./queue'),
      weave = require('./weave');

const q1 = new Queue();
q1.add(1);
q1.add(2);
const q2 = new Queue();
q2.add('Hi');
q2.add('There');
const q = weave(q1, q2);
console.log(q.data);
