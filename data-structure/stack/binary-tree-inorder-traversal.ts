// https://leetcode.com/problems/binary-tree-inorder-traversal/

interface TreeNode {
  val: number;
  left: TreeNode;
  right: TreeNode;
}

function recursion(root: TreeNode | null): number[] {
  const stack = [];
  const helper = (node: TreeNode | null) => {
    if (node === null) return;

    helper(node.left);
    stack.push(node.val);
    helper(node.right);
  };
  helper(root);
  return stack;
}

function iteration(root: TreeNode | null): number[] {
  const result = [];
  const stack = [];
  let curr = root;
  while (curr !== null || stack.length > 0) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    result.push(curr.val);
    curr = curr.right;
  }
  return result;
}
