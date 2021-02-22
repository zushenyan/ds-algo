# Binary Tree & Binary Search Tree

## Definition

A tree is an undirected graph that satisfies any following creteria:

- No closed loop.
- N nodes and N-1 edges.
- Two nodes are only connected by one path.

### Terminologies

- `root` every nodes could be a `root`. A `root` is a node without a parent.
- `child` a node extends from another node.
- `leaf` a node without any children.

### Binary Tree

A binary tree is a tree that every node has at most two child nodes.

### Binary Search Tree

A binary search tree is subset of binary tree, and the left node's value is alway smaller than its parent's, and the right node value is always greather than its parent's.

The nodes in BST has to be **comparable**.

Adding elements to a BST:

```
# Insert(3)
3

# Insert(1)
  3
 /
1

# Insert(6)
  3
 / \
1   6

# Insert(2)
  3
 / \
1   6
 \
  2

# Insert(4)
   3
 /   \
1     6
 \   /
  2 4

# Insert(8)
   3
 /   \
1     6
 \   / \
  2 4   8
```

Removing elements from a BST:

- `Find` the element we want to remove.
- `Replace`the node we want to remove with its child to maintain the BST invariant.

```
Example:
   3
 /   \
1     6
 \   / \
  2 4   8
 /     / \
0     7   9

Case I: A leaf node
# Remove 4
   3
 /   \
1     6
 \     \
  2     8
 /     / \
0     7   9

Case II & III: Either the left/right node is a subtree. It could be the root.
# Remove 1
     3
   /   \
  2     6
 /     / \
0     4   8
         / \
        7   9

Case IV: The node to remove has both left & right subtrees.
The successor could be either
"the largest node in the left subtree" OR
"the smallest node in the right subtree"
# Remove 3 (by replacing with the largest node in the left subtree)
   2
 /   \
1     6
 \   / \
  0 4   8
       / \
      7   9
# Remove 3 (by replacing with the smallest node in the right subtree)
   4
 /   \
1     6
 \     \
  2     8
 /     / \
0     7   9
```

###### Traversal Order

```
Example
     3
   /   \
  1     6
 / \   / \
0   2 4   8
         / \
        7   9
```

Preorder

```js
function preorder(n) {
  if (n === null) return;
  doSomething(n.value);
  preorder(n.left);
  preorder(n.right);
}
// 3 1 0 2 6 4 8 7 9
```

Inorder

```js
function inorder(n) {
  if (n === null) return;
  inorder(n.left);
  doSomething(n.value);
  inorder(n.right);
}
// 0 2 1 3 4 6 7 8 9
```

Postorder

```js
function postorder(n) {
  if (n === null) return;
  postorder(n.left);
  postorder(n.right);
  doSomething(n.value);
}
// 0 2 1 4 7 9 8 6 3
```

Level order

Use a queue to enqueue all the children waiting to be traversed and dequeue the next one for traversal.

```js
// 3 1 6 0 2 4 8 7 9
```

## Application Scenarios

- Implementation of binary heaps.
- Implementation of some map and set ADTs.
- Red black trees.
- AVL tress.
- Syntax tress (for compilers).
- Treap - a probabilistic data structure.

## Complexity

The complexity of BST:

| Operation | Average   | Worst |
| --------- | --------- | ----- |
| Insert    | O(log(n)) | O(n)  |
| Delete    | O(log(n)) | O(n)  |
| Remove    | O(log(n)) | O(n)  |
| Search    | O(log(n)) | O(n)  |
