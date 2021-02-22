# Indexed Priority Queue (IPQ)

## Definition

Besides as an normal priority queue, it also supports **quick updates and deletions of key-value pairs**.

Suppose you have a constantly changing line, for example a hospital line, somebody drops the line when it takes to long, or we have to change a patient's priority to higher when all a sudden his body is in serious condition.

To form an IPQ, we will have to map **key index (ki)** and **key** with a bidirectional hashtable.

| Key   | Key Index |
| ----- | --------- |
| Mary  | 0         |
| John  | 1         |
| Bob   | 2         |
| Bella | 3         |
| Kelly | 4         |

For example, we have an IPQ like below:

```
                0
               ki=4
                v=2
              /    \
            1       2
          ki=2      ki=0
           v=1       v=9
          /   \
         3     4
       ki=3    ki=1
        v=6     v=7
```

Besides `position index` to `value`, we will also maintain a `position map` and a `inverse map` for tracking the relationship between indexes and positions.

|                                        | 0   | 1   | 2   | 3   | 4   |
| -------------------------------------- | --- | --- | --- | --- | --- |
| Values                                 | 9   | 7   | 1   | 6   | 2   |
| PM (the index of a node to a key)      | 2   | 4   | 1   | 3   | 0   |
| IM (the position of a node to its key) | 4   | 2   | 0   | 3   | 1   |

What value does Mary have in the IPQ? The answer is `9` because Mary's `key index` is `0`.

Where is Bob in the IPQ? The answer is `1` because we can tell from the PM since Bob's `key index` is `2`.

Which key is represented in the node at index `2`? The answer is `0 (Mary)` because we can tell from the IM.

### The Insertion and Removal

It is just like how we do to a normal heap. The difference is, we have to update its PM and IM to make it sync with our tree.

- Insertion
  1. Append it to the latest position index that is empty.
  2. Maintain its invariant with bubbling/sinking.
- Removal
  1. Find the node.
  2. If it is found, swap the position with the latest position index that is occupied.
  3. Remove the node with the latest position index that we just swapped.
  4. Maintain its invariant with bubbling/sinking.

## Complexity

IPQ as a binary heap

| Operation              | Indexed Binary Heap PQ |
| ---------------------- | ---------------------- |
| delete(ki)             | O(log(n))              |
| valueOf(ki)            | O(1)                   |
| contains(ki)           | O(1)                   |
| peekMinKeyIndex()      | O(1)                   |
| pollMinKeyIndex()      | O(1)                   |
| peekMinValue()         | O(1)                   |
| pollMinValue()         | O(log(n))              |
| insert(ki, value)      | O(log(n))              |
| update(ki, value)      | O(log(n))              |
| decreaseKey(ki, value) | O(log(n))              |
| increaseKey(ki, value) | O(log(n))              |
