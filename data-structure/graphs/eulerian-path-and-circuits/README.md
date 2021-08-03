# Existence of Eulerian Path/Circuit

### Eulerian Path

An Eulerian Path (or Eulerian Trail) is a path of edges that visits all the edges in a graph exactly once.

![eulerian-path-1](eulerian-path-1.png)
![eulerian-path-2](eulerian-path-2.png)

### Eulerian Circuit

An Eulerian Circuit (or Eulerian cycle) is an Eulerian path which starts and ends on the same vertex.

![eulerian-circuit-1](eulerian-circuit-1.png)
![eulerian-circuit-2](eulerian-circuit-2.png)

### Node Degrees

![node-degrees](node-degrees.png)

### The Requried Conditions For A Valid Eulerian Path Circuit

![eulerian-conditions](eulerian-conditions.png)

Caveats

- A graph with an Eulerian Circuit will also have an Eulerian Path.
  ![example-3](example-3.png)
- All vertices with non-zero degree need to belong to a single connected component.
  ![example-4](example-4.png)

### Other Examples

![example-1](example-1.png)
![example-2](example-2.png)
![example-5](example-5.png)
![example-6](example-6.png)
![example-7](example-7.png)

### Procedure

In this algorithm, we will only cover Eulerian circuit. Remember that - if a graph has an Eurlerian circuit then it must also have an Eulerian path.

The time complexity is `O(E)`

[The animation for the procedure](https://youtu.be/09_LlHjoEiY?t=14550)

1. Count all the in/out degrees for a graph.
   ![eulerian-step-1](eulerian-step-1.png)
2. Find and choose the start node.
   ![eulerian-step-2](eulerian-step-2.png)
3. Use DFS and callback for backtracking the path. Keep tracking the out-degree and reduce the count of out-degree once we have a node visited.
   ![eulerian-step-3](eulerian-step-3.png)
