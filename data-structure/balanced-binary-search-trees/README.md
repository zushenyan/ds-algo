# Balanced Binary Search Trees (BBST)

## Definition

BBST is a self balancing binary search tree which helps to maintain `O(log(n))` time complexity when performs operations.

### Tree Rotations

To help maintain the performance, we can use tree rotations. It still holds the invariant because for every node `n`, `n.left < n` and `n.right > n`.

```
    A                     B
   / \     Right rot.    / \
  B   C      ----->     D   A
 / \         <-----        / \
D   E      Left rot.      E   C
```

## Application Scenarios

- When you want to keep the best performance all the time.

## Complexity

| Operation | Average   | Worst     |
| --------- | --------- | --------- |
| Insert    | O(log(n)) | O(log(n)) |
| Delete    | O(log(n)) | O(log(n)) |
| Remove    | O(log(n)) | O(log(n)) |
| Search    | O(log(n)) | O(log(n)) |
