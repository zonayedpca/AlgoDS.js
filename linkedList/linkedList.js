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
}

module.exports = LinkedList;