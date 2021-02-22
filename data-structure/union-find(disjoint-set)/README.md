# Union Find (Disjoint Set)

## Definition

A data structure that keeps track of elements that are split into one or more disjoint sets.

- `find` to find which root our node belongs to. The root is a node pointing to itself (who's root is itself).
- `union` to unify two nodes, we find the roots of two nodes. If the roots are differnt, we make one point to the other.

The construction of Union Find:

To construct an union find, we can randomly map numbers to our element. Here I use the ascending number instead.

```
A B C D E
0 1 2 3 4
[0,1,2,3,4]

Union(A,B)
A B C D E
0 1 2 3 4
[0,0,2,3,4]
A C D E
^
B

Union(C,D)
A B C D E
0 1 2 3 4
[0,0,2,2,4]
A C E
^ ^
B D

Union (E,A)
A B C D E
0 1 2 3 4
[0,0,2,2,0]
A < E C
^     ^
B     D

Union (C,B)
A B C D E
0 1 2 3 4
[0,0,0,2,0]
C > A < E
^   ^
D   B
```

However the approach above is not optimized. To make it optimal, we use path compression:

```
Not optimal:
A > B > C > D > E

Optimal:
    D
    v
A > E < B
    ^
    C
```

Kruskal's Minimum Spanning Tree is an algorithm for finding a Minimum Spanning Tree. A minimum spanning tree is a subset of the edges which connect all vertices in the graph with the minimal total edge cost. The steps is like below:

1. Sort edges by ascending edge weight.
2. Walk through all the edges and find the two nodes the edge belongs to, if the nodes are already unified we don't include edge, otherwise we include it and unify the nodes.
3. The process terminates when every edge has been processed or all nodes(vertices) have been unified.

![UnionFindKruskalDemo](https://upload.wikimedia.org/wikipedia/commons/a/a3/UnionFindKruskalDemo.gif)

## Application Scenarios

- Kruskal's minium spanning tree algorithm.
- Grid percolation.
- Network connectivity.
- Least common ancestor in trees.
- Image processing.

## Complexity

| Operation          | Complexity |
| ------------------ | ---------- |
| Construction       | O(n)       |
| Union              | O(n)\*     |
| Find               | O(n)\*     |
| Get Component Size | O(n)\*     |
| Check If Connected | O(n)\*     |
| Count Components   | O(1)       |

\* Amortized constant time, which means in average, the time complexity should be.
