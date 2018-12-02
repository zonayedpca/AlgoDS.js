# JavaScript Algorithm And Data Structure
This is a attempt to implement all kind of widely used **Algorithms** and **Data Structures** in the programming world using JavaScript. Thus the term *AlgoDS* is used as a name of this repository. Anyone can use it as a reference to implement those problems. If you have any suggestion, then please make an issue or contact me, I will be greatful to you.

# The Solutions
Most of the implementations are done using pure functions so that anyone can use them as well if they want. ```index.js``` files are made for testing purpose. Besides, you will find **README** file in every problem that will illustrate the problem so that you can understand them easily.

# Basic Terms
## Big O
It allows us to calculate how the runtime of an Algorithm grows as the inputs grow
### Some Mostly Used Big O
- Arithmetic operations are  always constant
- Assignment of a variable is also constant
- Accessing elements in an object by its key is constant
- Accessing elements in an array by its index number is constant
- The complexity of a loop is the amount of iteration it takes to complete the loop. How many time the loop runs again and again is the total complexity.

## Run Time Complexity
Describe the performance of an algorithm. How much processing power or time is required to run an algorithm if we double the amount of input
- Constant Time => ```O(1)```
The algorithms will always take the same amount of time no matter how large our input data is or small. It is always the same. Thus it is called as constant time.
- Logarithm Time => ```log(n)```
Doubling the inputs will not double the amount of work required
- Linear Time => ```n```
Iterating over all the elements in a collection once. Usually if any program has one ```for``` loop, it can have linear time complexity
- Quasilinear Time => ```n * log(n)```
Doubling the elements will double the amount of work required
- Quadratic Time => ```n^2```
Every element in a collection has to be compared to every other element
- Exponential Time => ```2^n```
Adding a single element will double the work required. 
```
       O(n^2)
|       / / O(nlogn)/ O(n)
|      / /        /
|     / /       /
|    / /      /
|   / /     /
|  / /    /
| / /   /
|/ /  /----------------------- log(n)
| / /_________________________ O(1)
|//___________________________
```

### Identifying Runtime Complexity
- Iterating through a collection using a single for loop => ```O(n)```
- Iterating through half of a collection using a single for loop => ```O(n)```
- Iterating through two different collection using separate for loop => ```O(n + m)```
- Two nested loop iterating over same collection => ```O(n^2)```
- Two nested loop iterating over different collection => ```O(n * m)```
- Most of the Sorting Algorithm => ```O(n * log(n))```
- Searching on a Sorted Collection => ```O(logn)```

## Space Complexity
The amount of space in the memory required by that particular Algorithm. How much more memory is required by doubling the problem set.
```
123 => 321 => n times
123456 => 654321 n times
```

### Some Mostly Used Space Complexity
- Boolean, Numbers, undefined, null including most of the primitives are constant
- String takes the amount of character, means the length is its required space. Thus it is O(n)
- Objects takes the number of keys it has. Thus it is O(n)
- Arrays are also same. It takes the total number of elements it has(its own length). This it is also O(n)

### Logarithm
Logarithmic values often can be very confusing. But there also very easy to understand. Like if we explain what does ```log2(8) = 3``` means:
```javascript
log2(8) = 3
=> 2^3 = 8
log(2)(value) = exponent => 2^exponent = value
```

And also ```log2``` and ```log``` is same. We can omit 2 in this case

## Performance of Objects
We can analyze the JavaScript's built-in objects to find out its various complexity to accomplish various task
```javascript
const anObj = {
  name: 'Zonayed Ahmed',
  age: 22,
  gender: 'Male'
}
```
### Complexity
- Insertion will take O(1)
- Removal will also take O(1)
- Accessing anything will also take 0(1)
- Searching anything will take 0(n)

## Performance of Arrays
We can analyze the performance of JavaScript's built-in array
```javascript
const anArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ..., 1000]
```
### Complexity
- Accessing an element by its index number will take O(1)
- ```push()``` and ```pop()``` methods also take O(1)
- But ```shift()``` and ```unshift()``` will take O(n) as all the element's index number has to be changed in order to remove or add any element from the front
- Searching will take O(n)

## Problem Solving
- Understand the main problem very clearly at First
- Try to find out some example, what type and amount of data it will take and also what it will return. Try to understand them.
- Now breaks them down. How this type of input can give that type of output. Break them out one by one
- Now solve those problem one by one, simply
- Now take a look at the solution and try to refactor it maintaining DRY Principal

## Problem Solving Pattern
Some problem solving patterns are widely used to simplify the solution like:
- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking
...and more to come

### Frequency Counter
This pattern uses objects or sets to collect values/frequency of values. Thus most of time nested loops or O(n^2) time complexity can be avoided

### Multiple Pointers
Creating pointers or values that correspond to an ndex or position and move towards beginning, end or middle based on a certain condition
