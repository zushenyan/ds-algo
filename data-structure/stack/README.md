# Stack

## Definition

A container that only allows `push` and `pop` operations for its data.

- `push` append the data to the last position.
- `pop` get and remove the data at the last position.

```
# push 1
stack: 1

# push 2
stack: 1 2

# push 3
stack: 1 2 3

# pop
stack: 1 2

# pop
stack: 1
```

The operation order is **First-In-Last-Out (FILO)**.

## Application Scenarios

- History machanism for data (undo & redo).
- Syntax checking for matching brackets and braces.
- Tracking recursion of previous function calls.
- Used in depth first search (DFS).

## Complexity

| Operation | Complexity |
| --------- | ---------- |
| Pushing   | O(1)       |
| Popping   | O(1)       |
| Peeking   | O(1)       |
| Searching | O(n)       |
| Size      | O(1)       |
