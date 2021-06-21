# Backtracking

This is an algorithm for finding all the feasible solutions for a problem,
with the help of DFS.

The algorithm is commonly used in the following problems:

- subset
- sudoku
- N queens problem

The process of finding all solutions can be drawn as a State Space Tree.

For example, assuming we have A,B and C characters, and we want to find the all possible arrangements (permutations), the diagram will look like this:

```
              .
            / |   \
          A   B     C
        / |   | \   \ \
      B   C   A   C  B  A
    /     |   |   |   |  |
    C     B   C   A   A  B
```

The number of permutations will be `3! = 6`, which is `["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]`.

The time complexity of backtracking differs case by case, as it is trying to find all solutions under different constraints.

- Hamiltonian cycle : O(N!) in the worst case
- WordBreak and StringSegment : O(2^N)
- NQueens : O(N!)

[source](https://stackoverflow.com/questions/20049829/how-to-calculate-time-complexity-of-backtracking-algorithm)

# Branch and Bound

The purpose of this algorithm is the same to the Backtracking, the only difference is that it is using BFS for searching the answer.
