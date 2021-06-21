// https://leetcode.com/problems/generate-parentheses/

function generateParenthesis(n: number): string[] {
  const list = [];
  backtrack(list, [], n, 0, 0);
  return list;
}

function backtrack(
  list: string[],
  tempList: string[],
  n: number,
  left: number,
  right: number
) {
  if (tempList.length === n * 2) {
    list.push(tempList.join(""));
  }
  if (left < n) {
    tempList.push("(");
    backtrack(list, tempList, n, left + 1, right);
    tempList.pop();
  }
  if (right < left) {
    tempList.push(")");
    backtrack(list, tempList, n, left, right + 1);
    tempList.pop();
  }
}
