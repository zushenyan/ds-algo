// https://leetcode.com/problems/permutations/

function permute(nums: number[]): number[][] {
  const list = [];
  backtrack(list, [], nums);
  return list;
}

function backtrack(list: number[][], tempList: number[], nums: number[]) {
  if (tempList.length === nums.length) {
    list.push([...tempList]);
  } else {
    for (let n of nums) {
      if (tempList.includes(n)) continue;
      tempList.push(n);
      backtrack(list, tempList, nums);
      tempList.pop();
    }
  }
}
