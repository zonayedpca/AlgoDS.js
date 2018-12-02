const Queue = require('./queue');

class Stack {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
  }

  push(item) {
    this.q1.add(item);
    return this.q1.data[0];
  }

  pop() {
    return this.q1.remove();
  }

  peek() {
    return this.data[0];
  }
}

module.exports = Stack;
