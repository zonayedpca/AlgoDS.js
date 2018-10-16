class Stack {
  constructor(data = []) {
    this.data = data;
  }

  push(item) {
    return this.data.push(item);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[0];
  }
}

module.exports = Stack;
