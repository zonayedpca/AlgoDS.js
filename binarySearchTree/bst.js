class BST {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if(data < this.data && this.left) {
      this.left.insert(data);
    } else if(data < this.data) {
      this.left = new BST(data);
    } else if(data > this.data && this.right) {
      this.right.insert(data);
    } else if(data > this.data) {
      this.right = new BST(data);
    }
  }

  contains(data) {
    if(data === this.data) {
      return this;
    }

    if(data < this.data && this.left) {
      return this.left.contains(data);
    } else if(data > this.data && this.right) {
      return this.right.contains(data);
    }

    return null;
  }
}

module.exports = BST;
