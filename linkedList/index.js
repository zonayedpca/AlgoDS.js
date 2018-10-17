const Node = require('./node'),
      LinkedList = require('./linkedList');

// Checking Node
const n = new Node(10);
console.log(n.data);
console.log(n.next);

// Checking Link List
const l1 = new LinkedList();
console.log('Link List:', l1);
l1.insertAtFirst(10);
console.log('Link List', l1);
l1.insertAtFirst(11);
console.log('Link List', l1);
l1.insertAtFirst(12);
console.log('Link List', l1);

// Get the size
console.log(l1.getSize());

// Get the First Node
console.log(l1.getFirst());