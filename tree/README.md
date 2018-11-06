## The Problem
Make a Tree Data Structure

### Node Implementation
Create a node class. The constructor should accept an argument that gets assigned to the data property and initialize an empty array for storing children. The node class should have methods 'add' and 'remove'

### Tree Implementation
Create a tree class. The tree constructor should initialize a 'root' property to null

## Output
```
const t1 = new Tree();
t1.root = new Node(20);

(20)


t1.root.add(0);
t1.root.add(40);
t1.root.add(-15);

      (20)
       ||
(0)---(40)---(-15)


t1.root.children[0].add(12);
t1.root.children[0].add(-2);
t1.root.children[0].add(1);

              (20)
               ||
        (0)---(40)---(-15)
        ||           
(12)---(-2)---(1)


t1.root.children[2].add(-2);

              (20)
               ||
        (0)---(40)---(-15)
        ||             ||
(12)---(-2)---(1)     (-2)
```

### Breadth First Traversal
Implement Breadth First Traversal in the Tree Class

### Depth First Traversal
Implement Depth First Traversal in the Tree Class

### Level Width
Given the root node of a tree, return an array where each element is the width of the tree at each level.

```
              (20) => 1
               ||
        (0)---(40)---(-15) => 3
        ||             ||
(12)---(-2)---(1)     (-2) => 4

Output Array: [1, 3, 4]
```
