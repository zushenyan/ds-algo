// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

interface TreeNode {
  val: number;
  left: TreeNode;
  right: TreeNode;
}

// time complexity O(n)
// space complexity O(n)
function inorderRecursion(root: TreeNode | null, k: number): number {
  const list = [];
  const traverse = (n: TreeNode | null) => {
    if (n === null) return;
    traverse(n.left);
    list.push(n.val);
    traverse(n.right);
  };
  traverse(root);
  return list[k - 1];
}

// time complexity O(H + k), O(log(N) + k) for a balanced BST, O(N + k) for an unbalanced BST.
// space complexity O(H), O(log(N)) for a balanced BST, O(N) for an unbalanced BST.
function inorderIteration(root: TreeNode | null, k: number): number {
  const stack = [];

  while (true) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    k--;
    if (k < 1) return root.val;
    root = root.right;
  }
}
