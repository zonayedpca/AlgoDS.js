const Tree = require('./Tree');

const t1 = new Tree(20);
console.log(t1);
t1.add(0);
t1.add(40);
t1.add(-15);
console.log(t1);
t1.children[0].add(12);
t1.children[0].add(-2);
t1.children[0].add(1);
console.log(t1);
t1.children[2].add(-2);
console.log(JSON.stringify(t1, null, 3));
