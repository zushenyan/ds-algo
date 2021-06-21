# Dynamic Programming

Dynamic programming is a strategy for breaking down the problem into sub-problems in a recursive manner.

It is very common when solving similar problems listed below:

- Fibonacci sequence.
- Count the number of different ways to move through a 6x8 grid.
- Given a set of coins, how to make 1337 dollars to be represented in the least number of coins? (combination counting problem)
- Given a set of substrings, what are the possible ways to construct the string 'foobar'?

Take Fibonacci sequence for example, suppose we want the result of number 7th.

```ts
function fib(n: number): number {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
```

Time Complexity: `O(2^n)`

Space Complexity: `O(n)`

## Memoization

In recursive manner, the whole operation can be visuallized as a tree:

![tree](https://github.com/zushenyan/ds-algo/blob/main/dynamic-programming/tree.png)

In the graph above, we can see there are tons of duplicated nodes circled in red rectangles.

We can optimize it with either **memoization** or **tabulation**, either one can help optimze our performance (the `n` here represents the height of the tree):

Time complexity: `O(n)`

Space Complexity: `O(n)`

**Implementation**

```ts
function fib(n: number, memo: Record<number, number> = {}): number {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
```

## Tabulation

Tabulation always solve the problem in an iterative, array-like way. Unlike recursion, we can illustrate it with an array. Suppose we want to calculate `fib(6) = 8`

```
Original (It's length of 7 because we need to calculate the result.)
0 1 2 3 4 5 6
0 0 0 0 0 0 0

# Fill value 1 in index 1 because the 1st number in the fibonacci is 1.
(Just like how we set the termination condition for recursive version.)
0 1 2 3 4 5 6
0 1 0 0 0 0 0

# Add value from index 0 to both index 1 & 2
0 1 2 3 4 5 6
0 1 1 1 0 0 0
^ ^ ^

# Add value from index 1 to both index 2 & 3
0 1 2 3 4 5 6
0 1 1 1 0 0 0
  ^ ^ ^

# Add value from index 2 to both index 3 & 4
0 1 2 3 4 5 6
0 1 1 2 1 0 0
    ^ ^ ^

# Add value from index 3 to both index 4 & 5
0 1 2 3 4 5 6
0 1 1 2 3 2 0
      ^ ^ ^

# Add value from index 4 to both index 5 & 6
0 1 2 3 4 5 6
0 1 1 2 3 5 3
        ^ ^ ^

# Add value from index 5 to both index 6 (7 is ignored as out of bound)
0 1 2 3 4 5 6
0 1 1 2 3 5 8
          ^ ^
```

Time complexity: `O(n)`

Space Complexity: `O(n)`

**Implementation**

```ts
function fib(n: number): number {
  const table = Array(n + 1).fill(0);
  table[1] = 1;
  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  return table[n];
}
```
