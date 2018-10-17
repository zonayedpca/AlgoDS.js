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

// Get the Last Node
console.log(l1.getLast());

// Remove the First node
l1.removeFirst();
console.log('Link List', l1);

// Remove Last Node
l1.removeLast();
console.log('After Removing the Last Node', l1);

// Insert Last
l1.insertLast(15);
console.log('After inserting a new Node at Last', l1);

// Get Node from a given index
console.log('getAt', l1.getAt(1));

// Remove a Node from by given index
l1.removeAt(1);
console.log('After Removing the Last Node', l1);

// Insert a Node at a given index
l1.insertAt(20, 10);
console.log('After Inserting the Node', l1);

// Clear the list
l1.clear();
console.log('Link List', l1);
