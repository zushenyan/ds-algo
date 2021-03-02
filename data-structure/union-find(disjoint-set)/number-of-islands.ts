// https://leetcode.com/problems/number-of-islands/

const dirs = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
const toLocation = (x: number, y: number) => `${x},${y}`;

function dfs(grid: string[][]): number {
  let islands = 0;
  const queue = [];
  const visit = new Set();

  const dfsHelper = (x: number, y: number) => {
    if (
      grid[y]?.[x] === undefined ||
      grid[y]?.[x] === "0" ||
      visit.has(toLocation(x, y))
    )
      return;
    visit.add(toLocation(x, y));
    dirs.forEach(([nx, ny]) => {
      dfsHelper(x + nx, y + ny);
    });
  };

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "1" && !visit.has(toLocation(x, y))) {
        islands++;
        dfsHelper(x, y);
      }
    }
  }
  return islands;
}

function bfs(grid: string[][]) {
  let islands = 0;
  const queue = [];
  const visit = new Set();

  const bfsHelper = (x, y) => {
    queue.push([x, y]);
    while (queue.length > 0) {
      const [ox, oy] = queue.shift();
      dirs.forEach(([sx, sy]) => {
        const [nx, ny] = [ox + sx, oy + sy];
        if (grid[ny]?.[nx] === "1" && !visit.has(toLocation(nx, ny))) {
          queue.push([nx, ny]);
          visit.add(toLocation(nx, ny));
        }
      });
    }
  };

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "1" && !visit.has(toLocation(x, y))) {
        islands++;
        bfsHelper(x, y);
      }
    }
  }
  return islands;
}

function unionFind(grid: string[][]) {
  let count = 0;
  let id = 0;
  const ids = [];

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "1") {
        count++;
      }
      ids.push(id);
      id++;
    }
  }

  function find(x) {
    return x === ids[x] ? x : find(ids[x]);
  }

  function union(x, y) {
    const [px, py] = [find(x), find(y)];
    if (px !== py) {
      ids[px] = py;
      count--;
    }
  }

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "1") {
        const index = y * grid[y].length + x;
        if (grid[y]?.[x + 1] === "1") union(index, index + 1);
        if (grid?.[y + 1]?.[x] === "1") union(index, index + grid[y].length);
      }
    }
  }
  return count;
}

function numIslands(grid: string[][]): number {
  return unionFind(grid);
}
