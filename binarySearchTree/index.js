const BST = require('./bst'),
      validate = require('./validate');

const bst1 = new BST(10);
console.log('BST:', bst1);

// Insertion
bst1.insert(0);
bst1.insert(12);
console.log('After Insertion:', bst1);
bst1.insert(-1);
bst1.insert(4);
bst1.insert(11);
bst1.insert(20);
console.log('After Insertion:', bst1);
bst1.insert(-20);
bst1.insert(17);
bst1.insert(99);
console.log('After Insertion:', bst1);

// Contains
const minTwenty = bst1.contains(-20);
console.log('Is it here:', minTwenty);
const hundred = bst1.contains(100);
console.log('Is it here:', hundred);

// Validate
const validated = validate(bst1);
console.log('Is it valid:', validated);
