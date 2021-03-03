// https://leetcode.com/problems/binary-tree-right-side-view/

interface TreeNode {
  val: number;
  left: TreeNode;
  right: TreeNode;
}

function dfs(root: TreeNode | null): number[] {
  const result = [];
  const helper = (node: TreeNode | null, level: number) => {
    if (node === null) return;

    if (level > result.length - 1) result.push(node.val);
    result[level] = node.val;
    helper(node.left, level + 1);
    helper(node.right, level + 1);
  };
  helper(root, 0);
  return result;
}

function bfs(root: TreeNode | null): number[] {
  const result = [];
  const queue = [];
  if (root) queue.push(root);
  while (queue.length > 0) {
    let val: number;
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const n = queue.shift();
      val = n.val;
      if (n.left) queue.push(n.left);
      if (n.right) queue.push(n.right);
    }
    result.push(val);
  }
  return result;
}
