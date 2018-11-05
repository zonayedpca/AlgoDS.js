const Node = require('./node'),
      LinkedList = require('./linkedList'),
      circular = require('./circular'),
      fromLast = require('./fromLast');

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

// Find out the midpoint
l1.insertAtFirst(60);
l1.insertAtFirst(120);
l1.insertAtFirst(240);
console.log('Midpoint:', l1.midpoint());

// Clear the list
l1.clear();
console.log('Link List', l1);

// Find the list is circular or not
const cl = new LinkedList();
const a = new Node('a');
const b = new Node('a');
const c = new Node('a');
const d = new Node('a');

cl.head = a;
a.next = b;
b.next = c;
c.next = d;
d.next = a;

console.log('Is this list circular:', circular(cl));

// Fint the tail
const l2 = new LinkedList('a');
l2.insertLast('a');
l2.insertLast('b');
l2.insertLast('c');
l2.insertLast('d');
l2.insertLast('e');
l2.insertLast('f');
l2.insertLast('g');
l2.insertLast('h');
console.log('The Node:', fromLast(l2, 2));

// forEach
console.log('forEach');
l2.forEach((node, index, list) => {
  console.log('Data:', node.data, 'Index:', index, 'List:', list);
})

// for...of loops
console.log('For of loops');
for(let [node, index] of l2) {
  console.log('Data:', node.data, 'Index:', index);
}
