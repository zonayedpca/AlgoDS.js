class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];
    let count = 0;
    while(arr.length) {
      const node = arr.shift();
      arr.push(...node.children);
      fn(node, count, this);
      count++;
    }
  }

  traverseDF(fn) {
    const arr = [this.root];
    let count = 0;
    while(arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node, count, this);
      count++;
    }
  }
}

module.exports = Tree;
