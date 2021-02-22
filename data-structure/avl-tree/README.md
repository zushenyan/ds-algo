# AVL Tree

## Definition

AVL tree has a **Balanced Factor (BF)** which uses `H(x)` to represent **the number of edges between x and the furthest leaf**. This forces the tree to remain balanced. The BF should always be either -1, 0 or +1.

```math
BF(node) = H(node.right) - H(node.left)
```

In an AVL tree, each node has to at least store the following information:

- value
- pointers to the left/right child nodes.
- the balance factor of this node
- the height of this node

Upon every insertion, removal and update, we use **tree rotations** to maintain its invariant (BF should be in range of -1, 0, +1)

```
  Unbalanced           Balanced
    5 (-2)                4 (0)
   /                     / \
  4 (-1)   right rot.   3   5
 /           ---->
3
```

## Complexity

It is basically the same as BBST.
