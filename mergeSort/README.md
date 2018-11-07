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

## Complexity
The worst case Complexity is ```nlog(n)```
