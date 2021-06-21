// https://leetcode.com/problems/subsets/

function subsets(nums: number[]): number[][] {
  const ans = [];
  backtrack(ans, [], nums, 0);
  return ans;
}

function backtrack(
  ans: number[][],
  tempList: number[],
  nums: number[],
  start: number
) {
  ans.push([...tempList]);
  for (let i = start; i < nums.length; i++) {
    tempList.push(nums[i]);
    backtrack(ans, tempList, nums, i + 1);
    tempList.pop();
  }
}
