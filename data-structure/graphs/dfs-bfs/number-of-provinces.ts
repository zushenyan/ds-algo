// https://leetcode.com/problems/number-of-provinces

const dfs = (matrix: number[][]) => {
  const visited = new Array(matrix.length).fill(0);
  let counter = 0;
  const helper = (i: number) => {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 1 && visited[j] === 0) {
        visited[j] = 1;
        helper(j);
      }
    }
  };
  for (let i = 0; i < matrix.length; i++) {
    if (visited[i] === 0) {
      helper(i);
      counter++;
    }
  }
  return counter;
};

const bfs = (matrix: number[][]) => {
  const visited = new Array(matrix.length).fill(0);
  const queue = [];
  let counter = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (visited[i] === 0) {
      queue.push(i);
      while (queue.length > 0) {
        const s = queue.pop();
        visited[s] = 1;
        for (let j = 0; j < matrix.length; j++) {
          if (matrix[s][j] === 1 && visited[j] === 0) {
            queue.push(j);
          }
        }
      }
      counter++;
    }
  }
  return counter;
};

const unionFind = (matrix: number[][]) => {
  const parent = new Array(matrix.length).fill(-1);

  const find = (i: number) => {
    if (parent[i] === -1) return i;
    return find(parent[i]);
  };
  const union = (x: number, y: number) => {
    const xx = find(x);
    const yy = find(y);
    if (xx !== yy) parent[xx] = yy;
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1 && i !== j) union(j, i);
    }
  }
  return parent.filter((v) => v === -1).length;
};
