const Node = require('./node');

const n1 = new Node(10);
console.log('Node now:', n1);
n1.add(20);
n1.add(30);
n1.add(40);
console.log('Node now:', n1);
n1.remove(30);
console.log('Node now:', n1);
