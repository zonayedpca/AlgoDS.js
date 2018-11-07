## The Problem
Sort an array using Bubble Sort

## Example
- The array: **[97, 5, 10, 0, -30]**
- [5, 10, 0, -30, 97]
- [5, 0, -30, 10, 97]
- [0, -30, 5, 10, 97]
- [-30, 0, 5, 10, 97]
- Sorted: **[-30, 0, 5, 10, 97]**

```
From i = 0 to < array.length
  From j = 0 to (array.length - i)
    If the element at j is greater than j + 1
      Swap elements at j and j + 1
```

## Complexity
The worst case Complexity of Bubble Sort is: ```n^2```
