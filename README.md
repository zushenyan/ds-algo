# Introduction

This repo is my note to these resources I found online for learning `data structure` & `algorithm`

- [Data Structures an Introduction (by William Fiset)](https://www.youtube.com/watch?v=RBSGKlAvoiM&ab_channel=freeCodeCamp.org)
- [Graph Theory Intro & Overview (by William Fiset)](https://www.youtube.com/watch?v=09_LlHjoEiY&t=23108s&ab_channel=freeCodeCamp.org)
- [Dynamic Programming Course (by Alvin Zablan from Coderbyte)](https://www.youtube.com/watch?v=oBt53YbR9Kk&ab_channel=freeCodeCamp.org)
- [Github repo to Williamfiset's Algorithms](https://github.com/williamfiset/algorithms)
- [BigO Cheatsheet](https://www.bigocheatsheet.com/)

# Basic Knowledge

### ADT(Abstract Data Structure)

Interfaces for data structures.

| Abstract Data Structure | Data Structure                                                |
| ----------------------- | ------------------------------------------------------------- |
| List                    | Dynamic Array, Linked List                                    |
| Queue                   | Linked List based Queue, Array based Queue, Stack based Queue |
| Map                     | Tree Map, Hash Map                                            |

### Big-O Notation

Big-O notation respresents the upper bound (**the worst case**) of the time or space complexity.

The calculation of `time complexity`:

1. Break operations down in a function.
2. Calculate Big-O for each operation.
3. Add them up.
4. Remove the constants.
5. Find the highest order term.

For example we have this function:

```js
function sum(array) {
  let sum = 0; // O(1)
  for (let v in array) {
    sum += v;
  } // O(n)
  return sum; // O(1)
}
```

The time complexity would be `O(n + 1 + 1)`, but since we only want the highest order term, the time complexity should be `O(n)`. Another example would be `O(n^2 + n + 1)`, the result should be `O(n^2)` since the highest order term is `n^2`.

For `space complexity`, the following function will be `O(1)` since only the `sum` takes space.

```js
function sum(array) {
  let sum = 0;
  for (let v in array) {
    sum += v;
  }
  return sum;
}
```

For the following example, the `space complexity` will be `O(n)` as we make another array declaration in the function scope.

```js
function makeArrayWithValue(size, value) {
  return new Array(size).fill(value);
}
```

Complexity table, complexity ordered **from the best to the worst**:

| Name         | Notation   |
| ------------ | ---------- |
| Constant     | O(1)       |
| Logarithmic  | O(log(n))  |
| Linear       | O(n)       |
| Linearithmic | O(nlog(n)) |
| Quadric      | O(n^2)     |
| Cubic        | O(n^3)     |
| Exponential  | O(m^n)     |
| Factorial    | O(n!)      |

Other common notation examples:

- `O(2^n)` finding all subsets of a set.
- `O(n!)` finding all permutations of a string.
- `O(nlog(n))` mergesort.
- `O(nm)` Iterating over all the cells in a matrix of size n by m.

For more info about Big-O complexity please check [bigocheatsheet.com](https://www.bigocheatsheet.com/).
