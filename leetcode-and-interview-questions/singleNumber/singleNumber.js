// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Input: nums = [2,2,1]
// Output: 1

// Input: nums = [4,1,2,1,2]
// Output: 4

// Input: nums = [1]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */

// O(2N)
var singleNumber = function(nums) {
  let seen = {}
  nums.forEach(num => {
    if (seen[num]) seen[num] += 1;
    else seen[num] = 1;
  })
  for (let n in seen) {
    if (seen[n] === 1) return n;
  }
  return null;
};

// O(N) solution
var singleNumber = function(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i];
  }
  return res;
}

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4,1,2,1,2]))