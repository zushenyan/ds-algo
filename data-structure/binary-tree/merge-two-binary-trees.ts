// https://leetcode.com/problems/merge-two-binary-trees/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(v: number, l: TreeNode | null, r: TreeNode | null) {
    this.val = v;
    this.left = l;
    this.right = r;
  }
}

function mergeTrees(t1: TreeNode | null, t2: TreeNode | null): TreeNode | null {
  if (!t1 && !t2) return null;
  return new TreeNode(
    (t1?.val || 0) + (t2?.val || 0),
    mergeTrees(t1?.left, t2?.left),
    mergeTrees(t1?.right, t2?.right)
  );
}
