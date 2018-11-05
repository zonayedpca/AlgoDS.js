## The Problem
Create the functionality of Linked List. But before that we need Node

### Node
Create a class instance to represent a node with two properties 'data' and 'next'. if 'next' is not provided, the default value will be 'null'

### Output
```
const n = new Node(10);
console.log(n.data); // should return 10
console.log(n.next); // should return null
```

### Linked List
- insertFirst(data)
Create a new Node from argument 'data' and assign the resulting node to the head property. Make sure to handle the case in which the linked ;ist already has a node assigned to the 'head' property

- size()
Returns the number of nodes in the linked list

- getFirst()
Returns the first node of the linked list

- getLast()
Returns the last node of the linked list

- clear()
Empties the linked list of any node

- removeFirst()
Removes only the first node of the linked list. The list's head should now be the second element

- removeLast()
Removes the last Node of the chain

- insertLast(data)
Insert a new node with provided data at the end of the chain

- getAt(integer)
Returns the node at the provided index

- removeAt(integer)
Removes the node at the provided index

- insertAt(data, integer)
Create and insert a new Node at provided index. If index is out of bound, add the node to the end of the list.

- forEach
Calls the provided function with every node of the chain and the index of the node
```
list.forEach((node, index) => {
  ...
})
```

- for...of loops
Linked list should be compatible as the subject of a 'for...of' loop
```
for(node of list) {
  ...
}
```
