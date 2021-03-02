// https://leetcode.com/problems/valid-parentheses/

function isValid(s: string): boolean {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const v = s[i];
    if (v === "(") {
      stack.push(")");
    } else if (v === "[") {
      stack.push("]");
    } else if (v === "{") {
      stack.push("}");
    } else if (stack.pop() !== v) {
      return false;
    }
  }
  return stack.length === 0;
}
