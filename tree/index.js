const Node = require('./Node'),
      Tree = require('./Tree');

const t1 = new Tree();
t1.root = new Node(20);
console.log(t1);
t1.root.add(0);
t1.root.add(40);
t1.root.add(-15);
console.log(t1);
t1.root.children[0].add(12);
t1.root.children[0].add(-2);
t1.root.children[0].add(1);
console.log(t1);
t1.root.children[2].add(-2);
console.log(JSON.stringify(t1, null, 3));

// Breadth First Traversal
t1.traverseBF((node, index, tree) => {
  console.log('Node:', node, 'Index:', index, 'Tree:', tree);
});
