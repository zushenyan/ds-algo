# Heap (Priority Queue)

### Definition

Priority Queue is an Abstract Data Type (ADT). It is similar to a normal queue. The difference is that each element has a priority. The removal order is based on the priority of elements. The element inside PQ has to be **comparable**.

```
Suppose the removal order is from the highest priority to the lowest priority data, and the value of data implies the priority.

# add 3
PQ: 3

# add 1
PQ: 3 1

# add 2
PQ: 3 1 2

# poll
PQ: 1 2
Because 3 has the highest priority.

# poll
PQ: 1
Because 2 has the highest priority.
```

A PQ is often implemented with Heap, hence heaps is not the only way to implement PQ.

A heap is a tree based data structure that has to obey **heap invariant**.

```
  Max Heap          Min Heap
      8               0
     / \             /  \
    7   6           2    3
   / \   \         / \  / \
  3   2   5       4  5  6  4
```

There are many types of heaps:

- Binary Heap
- Fibonacci Heap
- Binomial Heap
- Paring Heap
- ...

Take Binary Heap as an example. The definition of binary heap is - every node has exactly 2 children, and a **complete binary heap** is a tree in which at every level, except the last, is completely filled, and all the nodes in the last level are as far left as possible.

```
A Complete Binary Heap
        5
       / \
      6   12
     / \
    8   7
```

A Binary Heap can be represented as array, for example the heap above can be represented as `[5,6,12,8,7]`. We can use the following formula to access the value:

- `2i + 1` left child index (zero based index)
- `2i + 2` right child index (zero based index)

### Application Scenarios

- Dynamically fetch the "next best" or the "next worst".
- Huffman coding (Lossless data compression).
- Best First Search (For example A-star algorithm).
- Minimum Spanning Tree.

### Complexity

It's the complexity when a PQ is implemented with binary heap.

| Operation                | Complexity |
| ------------------------ | ---------- |
| Binary Heap Construction | O(n)       |
| Polling                  | O(log(n))  |
| Peeking                  | O(1)       |
| Adding                   | O(log(n))  |
| Removing                 | O(n)       |
| Advanced Removing\*      | O(log(n))  |
| Contains                 | O(n)       |
| Advanced Contains\*      | O(1)       |

\* With help from a hash table, however it takes up linear space and some overhead.

###
