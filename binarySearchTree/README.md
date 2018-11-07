## The Problem
Implement Binary Search Tree

### What is Binary Search Tree?
- Each node can have at most 2 child (Left Node and Right Node)
- Every left element is less than the parent
- Every right element is greater than the parent

```
                    (10)
              _______|_______
             |               |
            (0)             (12)
        _____|_____     _____|_____
       |           |   |           |
      (-1)        (4) (11)        (20)
  _____|                      _____|_____
 |                           |           |
(-20)                       (17)        (99)
```

### What is Binary Tree?
- Every node has at most two children
- But right node shouldn't be greater than parent
- Same as left node shouldn't be less then parent

### Direction
- Implement the Node class to create a binary search tree. The constructor should initialize values 'data', 'left' and 'right'
- Implement the 'insert' method for the Node class. Insert should accept an argument 'data' then create and insert a new node at the appropriate location in the tree.
- Implement the 'contains' method for the Node class. 'contains' should accept a 'data' argument and return the Node in the tree with the same value. If the value isn't in the tree, return null

### Validating a Binary Search Tree
- Given a node, validate the binary search tree, ensuring that every node's left hand child is less than the parent node's value and that every node's right hand child is greater than the parent
