## The Problem
Sort an array using merge Sort

## Example
```
                    [97, 0, 22, -30]
         __________________|__________________
        |                                     |
     [97, 0]                              [22, -30]
  ______|______                         ______|______
 |             |                       |             |
[97]          [0]                     [22]         [-30]
 |_____________|                       |_____________|
        |                                     |
     [0, 97]                              [-30, 22]  
        |_____________________________________|
                           |
                    [-30, 0, 22, 97]
```

## Approach
We usually need two function in case of merge sort. One function is used to sort two array and another one will merge them. We also use Recursion to simplify the process

### Sort Two array
```
Create a 'result' Array
While there is are still elements in both arrays
  If the first element of the left half is less than first in right half
    'shift' the element from left into the 'result' Array
  Else
    'Shift' tge element from right unto the 'result' Array
Take everything from the array that still has stuff in it and put it in 'result'
```

## Complexity
The worst case Complexity is ```nlog(n)```
