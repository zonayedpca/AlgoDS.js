const Queue = require('./queue');

const weave = (q1, q2) => {
  const q = new Queue();
  while(q1.peek() || q2.peek()) {
    q1.peek() && q.add(q1.remove());
    q2.peek() && q.add(q2.remove());
  }
  return q;
}

module.exports = weave;
