# Types of Graphs

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

# Graph Representations

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

# Common Problems

### The Shortest Path

Given a weighted graph, find the shortest path from node A to node B.

Algorithms

- BFS (unwieghted graph)
- Dijkstra
- Bellman-Ford
- Floyd-Warshall
- A-Star
- and many more...

![the shortest path](shortest-path.png)
![sp comparison](sp-comparison.png)

### Connectivity

Does there exist a path from node A to node B?

Algorithms

- union find
- DFS
- or any search algorithms

![connectivity](connectivity.png)

### Negative cycles

A negative cycle is a infinite cycle in a weighted graph, which keeps producing negative cost, and hence it becomes an infinite cycle that cannot be escaped.

Negative cycles is not necessary bad. It can be used in trading currencies in a cycle `A -> B -> C -> A` to caculate the risk.

Algorithms

- Bellman-Ford
- Floyd-Warshall

![negative cycle](negative-cycle.png)

### Strongly Connected Components (SCCs)

This means self-contained cycles within a directed graph where every vertex in a cycle can reach every other vertex in the same cycle.

Algorithms

- Tarjans
- Kosaraju

![sccs](sccs.png)

### Traveling Salesman Problem

Given a weighted graph, what is the shortest route that visits each node exactly once and returns to the origin node?

It's an NP-hard problem.

Algorithms

- Held-Karp
- branch and bound
- an many algorithms...

![tsp](tsp.png)

### Bridges

A bridge/cut edge is any edge in a graph whose removal increases the number of connected components.

Bridges can hint at weak points, bottlenecks and vulnerabilities in a graph.

![bridge](bridge.png)

### Articulation Points

Very similar to bridges but works on vertex instead of edges.

![articulation points](articulation-points.png)

### Minimum Spanning Tree (MST)

A subset of the edges of a connected, weighted graph that connects all the vertices without any cycles and with the minimum possible total edge weight.

MSTs on a graph are not always unique.

It is useful in designing minimum cost network, transportation networks and so on.

Algorithms

- Kruskal
- Prim
- Boruvka

![mst before](mst-before.png)
![mst after](mst-after.png)

### Flow Network

With an infinite input source, how much flow can we push through the network? For example, assuming that edges represent how many cars the roads can sustain in traffic.

Algorithms

- Ford-fulkerson
- Edmonds-Karp
- Dinic

![flow-network](flow-network.png)
