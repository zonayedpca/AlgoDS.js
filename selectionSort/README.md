## The Problem
Sort an array using Selection Sort

## Example
- The array: **[97, 5, 10, 0, -30]**
- Select Min: [97, 5, 10, 0 ```-30```]
- Swap: [```-30```, 5, 10, 0, ```97```]
- Select Min: [**-30,** 5, 10, ```0```, 97]
- Swap: [**-30,** ```0```, 10, ```5```, 97]
- Select Min: [**-30, 0,** 10, ```5```, 97]
- Swap: [**-30, 0,** ```5```, ```10```, 97]
- Select Min: [**-30, 0, 5,** ```10```, 97]
- Swap: [**-30, 0, 5,** ```10```, 97]
- Select Min: [**-30, 0, 5, 10,** ```97```]
- Swap: [**-30, 0, 5, 10,** ```97```]
- Sorted: **[-30, 0, 5, 10, 97]**

```
From i = 0 to array length
  Assume the element at 'i' is the least in the array, assign 'i' to indexOfMin
  For j from (i + 1) to end of the Array  
    See if there is an element with lower value
      if there is, record its index
  If the index of current element and index of the lowest element s not same, swap them
```

## Complexity
The worst case Complexity is ```n^2```
