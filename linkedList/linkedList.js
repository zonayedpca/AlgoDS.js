const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtFirst(item) {
        this.head = new Node(item, this.head);
    }

    getSize() {
        let counter = 0;
        let node = this.head;

        while(node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
      if(!this.head) {
        return null;
      }

      let node = this.head;
      while(node) {
        if(!node.next) {
          return node;
        }
        node = node.next;
      }
    }

    removeFirst() {
      if(!this.head) {
        return;
      }

      this.head = this.head.next;
    }

    removeLast() {
      if(!this.head) {
        return;
      }

      if(!this.head.next) {
        this.head = null;
      }

      let previous = this.head;
      let node =this.head.next;

      while(node.next) {
        previous = node;
        node = node.next;
      }

      previous.next = null;
    }

    insertLast(item) {
      const last = this.getLast();
      const newNode = new Node(item);
      if(last) {
        last.next = newNode;
      } else {
        this.head = newNode;
      }
    }

    getAt(index) {
      let count = 0;
      let node = this.head;

      while(node) {
        if(count === index) {
          return node;
        }
        count++;
        node = node.next;
      }

      return null;
    }

    removeAt(index) {
      if(!this.head) {
        return;
      }

      if(index === 0) {
        this.head = this.head.next;
        return;
      }

      const previous = this.getAt(index - 1);
      if(!previous || !previous.next) {
        return;
      }
      previous.next = previous.next.next;
    }

    insertAt(data, index) {
      if(!this.head) {
        this.head = new Node(data);
        return;
      }

      if(index === 0) {
        this.head = new Node(data, this.head);
        return;
      }

      const previous = this.getAt(index - 1) || this.getLast();
      previous.next = new Node(data, previous.next);
    }

    midpoint() {
      let fast = this.getFirst();
      let slow = this.getFirst();

      while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
      }

      return slow;
    }

    forEach(fn) {
      let node = this.head;
      let count = 0;
      while(node) {
        fn(node, count, this.head);
        node = node.next;
        count++;
      }
    }

    *[Symbol.iterator]() {
      let node = this.head;
      let count = 0;
      while(node) {
        yield [node, count];
        node = node.next;
        count++;
      }
    }

    clear() {
      this.head = null;
    }
}

module.exports = LinkedList;
