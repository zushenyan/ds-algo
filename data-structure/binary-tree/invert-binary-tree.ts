// https://leetcode.com/problems/invert-binary-tree/

interface TreeNode {
  val: number;
  left: TreeNode;
  right: TreeNode;
}

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root) {
    const temp = root.right;
    root.right = invertTree(root.left);
    root.left = invertTree(temp);
    return root;
  }
  return null;
}
