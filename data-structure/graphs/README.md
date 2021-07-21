# Graph

# Definition

### Undirected Graph

An undirected graph is an graph in which **edges** have no orientation. The edge `(u,v)` is identical to the edge `(v,u)`.

![undirected graph](ug.png)

### Directed Graph (Digraph)

This type of graph in which **edges** have orientations. For example `(u,v)` means from node `u` to node `v`.

![directed graph](dg.png)

### Weighted Graph

The edge in a graph can contain different weight to represent values like cost, distance... etc.

![weighted graph](wg.png)

### Tree

A tree is a **undirected graph with no cycle**. This is a connected graph with n nodes and n-1 edges.

![tree](tree.png)

### Rooted Tree

A rooted tree is a graph with **a designated root** where every **edeg** either points away or towards to it. Edges point away from the root is called **out-tree**, and **in-tree** otherwise.

![in-tree](it.png)

### Directed Acyclic Graph (DAG)

It means **a directed graph without cycles**. All out-trees are DAG but not all DAG are out-trees. This kind of graph is usually used in dealing with dependencies.

![directed acyclic graph](dag.png)

### Bipartite Graph

A graph is one whose vertices can be split into two groups U, V such that every edge connects between U and V.

Other definitions are "The graph is two colourable" or "no odd length cycle"

![bipartite graph](bg.gif)

### Complete Graph

A complete graph is one where there is a edeg between every pair of nodes. A complete graph can be denoted as the graph kth.

![complete graph](cg.gif)

# Graph Representation

### Adjacency Matrix

The cell `m[i][j]` represents the edge weight of going from node `i` to node `j`.

The edge going from a node to itself has cost of 0.

Pros

- space efficient for dense graphs.
- it takes `O(1)` time complexity to look up weights.
- simple to represent.

Cons

- the space complexity is `O(v^2)`
- it takes `O(v^2)` time complexity to traverse all edges.

![adjacency matrix](am.png)

### Adjacency List

A way to represent a graph as a map from nodes to lists of nodes.

Pros

- space efficient for sprase graphs.
- more efficient to traverse all edge comparing to `adjaceny matrix`

Cons

- it takes `O(E)` time complexity to look up weights.
- a bit more complex to represent.

![adjacency list](al.png)

### Edge List

A way to represent a graph with an unordered list of edges. Assume that a notation of triplet `(u,v,w)` means **the cost from node `u` to node `v` is `w`**

Pros

- space efficient for dense graphs.
- more efficient to traverse all edge comparing to `adjaceny matrix`
- simple to represent

Const

- it takes `O(E)` time complexity to look up weights.

![edge list](el.png)
