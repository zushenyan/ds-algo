// https://leetcode.com/problems/unique-binary-search-trees/

// formula: F(i, N) = G(i-1) * G(N-i)

// time complexity O(n)
// space complexity O(n)
const g = (n: number, mem = {}) => {
  if (mem[n]) return mem[n];
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += g(i - 1, mem) * g(n - i, mem);
  }
  mem[n] = sum;
  return mem[n];
};

function numTrees(n: number): number {
  const mem = {
    0: 1,
    1: 1,
  };
  return g(n, mem);
}
