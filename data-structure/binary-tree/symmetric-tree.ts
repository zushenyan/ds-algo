// https://leetcode.com/problems/symmetric-tree/

interface TreeNode {
  val: number;
  left: TreeNode;
  right: TreeNode;
}

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true;
  const helper = (l: TreeNode | null, r: TreeNode | null): boolean => {
    if (l === null && r === null) return true;
    if (l === null || r === null) return false;
    return (
      l.val === r.val && helper(l.left, r.right) && helper(l.right, r.left)
    );
  };
  return helper(root, root);
}
