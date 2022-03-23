/** Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * Example 1
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Example 2
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * Example 3
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
*/

var twoSum = function(nums, target) {
  // Constant lookup
  let seen = {}
  // Loop through input array
  for (let i = 0; i < nums.length; i++) {
      // subtract current value from the target
      let diff = target - nums[i];
      // check if the difference has been seen
      // if so, return the value at that key (meaning the value is the index)
      // and the current index (i)
      if (diff in seen) return [seen[diff], i]
      // If we made it here, we haven't return our sum indices, set
      // the index of our current value to i
      seen[nums[i]] = i;
  }
  // Edge case for no two numbers equaling the target
  return null
};