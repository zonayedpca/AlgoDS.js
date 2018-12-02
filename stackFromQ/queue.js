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

  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Queue;
