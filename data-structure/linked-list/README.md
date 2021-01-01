# Linked List

### Definition

A sequential nodes that contains value and the reference to another node.

**Singly** linked list only holds the reference to the next node:

`node -> node -> node -> null`

**Doubly** linked list holds both the references to the previous and the next nodes:

`node <-> node <-> node <-> null`

|        | Pros                          | Cons                          |
| ------ | ----------------------------- | ----------------------------- |
| Singly | Easy to implement             | Hard to access previous nodes |
| Doubly | Easy to access previous nodes | Takes 2x space                |

### Usage

- As queue or stack implementation.
- Circular lists.
- Used in separate chaining as a solution to Hashtable collision issue.
- The implementation of adjacency lists for graphs.

### Complexity

| Operation        | Singly | Doubly |
| ---------------- | ------ | ------ |
| Search           | O(n)   | O(n)   |
| Insert at head   | O(1)   | O(1)   |
| Insert at last   | O(1)   | O(1)   |
| Remove at head   | O(1)   | O(1)   |
| Remove at last   | O(n)   | O(1)   |
| Remove in middle | O(n)   | O(n)   |
