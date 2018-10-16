## The Problem
Implement 'weave' function. weave receives two queues as arguments and combines the contents of each into a new, third queue. The third queue should contain the *altering* content of the two queues. The function should handle queues of different lengths without inserting 'undefined' into the new one.

## Output
```
const q1 = new Queue();
q1.add(1);
q1.add(2);
const q2 = new Queue();
q2.add('Hi');
q2.add('There');
const q = weave(q1, q2);
console.log(q.data) => ['There', 2, Hi', 1]
```
