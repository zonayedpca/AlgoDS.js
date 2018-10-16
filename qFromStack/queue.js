const Stack = require('./stack');

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  add(item) {
    this.s1.push(item);
  }

  remove() {
    while(this.s1.peek()) {
      this.s2.push(this.s1.pop());
    }

    const item = this.s2.pop();

    while(this.s2.peek()) {
      this.s1.push(this.s2.pop());
    }

    return item;
  }

  peek() {
    while(this.s1.peek()) {
      this.s2.push(this.s1.pop());
    }

    const item = this.s2.peek();

    while(this.s2.peek()) {
      this.s1.push(this.s2.pop());
    }

    return item;
  }
}

module.exports = Queue;
