class Tree {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(item) {
    this.children.push(new Tree(item));
  }

  remove(item) {
    this.children = this.children.filter(oneChild => oneChild.data !== item);
  }
}

module.exports = Tree;
