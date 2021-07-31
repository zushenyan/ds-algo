# Dijkstra

A Single Source Shortest Path (SSSP) algorithm for graphs with **non-negative edge weights** (It is important for choosing the next promising node.)

The time complexity is usually `O(E*log(V))`, depending on the data structure used.

### Procedure

1. Maintain a dist array where the distance to every node is postive infinity. Mark the first node to be 0.
2. Maintain a minimum priority queue of key-value pairs of `(node index, distance)` paris.
3. Insert `(s,0)` into the minimum priority queue and loop while the PQ is not empty finding the next node.
4. Interate over all edges outwards from the current node and relax each edge appending a new `(node index, distance)` key-value pair to the PQ for every relaxation.

[The animation of lazy Dijkstra on Youtube](https://youtu.be/09_LlHjoEiY?t=4996)

The downside of lazy Dijkstra is that it inserts duplicated key-value pairs to the PQ which is inefficient for dense graphs because there will be outdated key-value pairs.

To make it more efficient, we can use Eager Dijkstra with an indexed priority queue instead.

[The animation of eager Dijkstra on Youtube](https://youtu.be/09_LlHjoEiY?t=5748)

This can be further optimized by using a D-ary heap. Update happens more often than removal when the graph is dense. To optimize that, we can use a D-ary heap which has better performance on update at the expense of more costly removals (dequeue/poll operations.)

(D-ary heap is a heap variant in which each node has D children.)

The current state of the art for implementing the Dijkstra is to use the Fibonacci Heap which furthers the time complexity to `O(E + Vlog(V))`, however, due to some difficulties, it is generaly impractical unless you have a very large graph.
