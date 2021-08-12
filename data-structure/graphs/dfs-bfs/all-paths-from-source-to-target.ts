// https://leetcode.com/problems/all-paths-from-source-to-target/

const backtrack = (graph: number[][]) => {
  const destinationNodeIndex = graph.length - 1;
  const ans: number[][] = [];
  const temp: number[] = [];
  const helper = ([nodeIndex, edges]: [number, number[]]) => {
    if (nodeIndex === destinationNodeIndex) {
      ans.push([...temp]);
      return;
    }
    for (const i of edges) {
      temp.push(i);
      helper([i, graph[i]]);
      temp.pop();
    }
  };
  temp.push(0);
  helper([0, graph[0]]);
  return ans;
};

const dp = (graph: number[][]) => {
  const destinationNodeIndex = graph.length - 1;
  const memo: Record<number, number[][]> = {};
  const helper = (nodeIndex: number): number[][] => {
    if (memo[nodeIndex]) return memo[nodeIndex];
    const results: number[][] = [];
    if (nodeIndex === destinationNodeIndex) {
      results.push([destinationNodeIndex]);
      return results;
    }
    for (const nextNodeIndex of graph[nodeIndex]) {
      const paths = helper(nextNodeIndex);
      for (const path of paths) {
        results.push([nodeIndex, ...path]);
      }
    }
    memo[nodeIndex] = results;
    return results;
  };
  return helper(0);
};

function allPathsSourceTarget(graph: number[][]): number[][] {
  return dp(graph);
}
