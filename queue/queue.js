class Queue {
  constructor(data = []) {
    this.data = data;
  }

  add(item) {
    return this.data.unshift(item);
  }

  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;
