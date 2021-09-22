// https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/

const makeAdjList = (vertices: number, edges: number[][]): number[][] => {
  return edges.reduce(
    (arr, [from, to]) => {
      arr[from].push(to);
      return arr;
    },
    new Array(vertices).fill(0).map(() => [])
  );
};

const dfs = (n: number, edges: number[][]): number[] => {
  const visited = new Array(n).fill(false);
  const adjList = makeAdjList(n, edges);

  const helper = (vertexIndex: number) => {
    // vertices that no other vertices point to are the vertices we are looking for.
    // visited[vertexIndex] = true
    adjList[vertexIndex].forEach((to) => {
      if (visited[to]) return;
      visited[to] = true;
      helper(to);
    });
  };

  adjList.forEach((edge, vertexIndex) => helper(vertexIndex));
  const answer = visited.reduce((arr, v, i) => {
    !v && arr.push(i);
    return arr;
  }, []);
  return answer;
};

const bfs = (n: number, edges: number[][]): number[] => {
  const visited = new Array(n).fill(false);
  const adjList = makeAdjList(n, edges);
  const queue: number[] = [];

  adjList.forEach((edge, vertex) => {
    if (visited[vertex]) return;
    queue.push(...edge);
    // vertices that no other vertices point to are the vertices we are looking for.
    // visited[vertex] = true
    while (queue.length > 0) {
      const to2 = queue.shift();
      if (visited[to2]) continue;
      queue.push(...adjList[to2]);
      visited[to2] = true;
    }
  });

  const answer = visited.reduce((arr, v, i) => {
    !v && arr.push(i);
    return arr;
  }, []);

  return answer;
};

const fastest = (n: number, edges: number[][]) => {
  const arr = new Array(n).fill(0).map((v, i) => [i, 0]);
  edges.forEach(([, to]) => arr[to][1]++);
  return arr.filter(([, c]) => c === 0).map(([k]) => k);
};
