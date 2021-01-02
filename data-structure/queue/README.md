# Queue

### Definition

A container that only allows `enqueue` and `dequeue` for its data.

- `enqueue` append the data to the last position. Also known as `adding` or `offering`.
- `dequeue` get and remove the data from the first position. Also known as `polling`.

```
# enqueue 1
queue: 1

# enqueue 2
queue: 1 2

# enqueue 3
queue: 1 2 3

# dequeue
queue: 2 3

# dequeue
queue: 3
```

The operation order is **First-In-First-Out (FIFO)**

### Usage

- Any waiting line model.
- Breadth first search (BFS).

### Complexity

| Operation | Complexity |
| --------- | ---------- |
| Enqueue   | O(1)       |
| Dequeue   | O(1)       |
| Peeking   | O(1)       |
| Contains  | O(n)       |
| Removal   | O(n)       |
| Is Empty  | O(1)       |
