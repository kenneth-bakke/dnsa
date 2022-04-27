# Given an array of integers nums and an integer target,
# return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution,
# and you may not use the same element twice.
# You can return the answer in any order.
# Example 1
# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]
# Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
#
# Example 2
# Input: nums = [3,2,4], target = 6
# Output: [1,2]
#
# Example 3
# Input: nums = [3,3], target = 6
# Output: [0,1]

class TwoSum:
  def two_sum(self, l, target):
    # Buffer dict
    seen = {}
    # Loop through list
    for i in range(len(l)):
      # if our current value is in our buffer dict
      if l[i] in seen:
        # return a list with the value where our current value is the key, and i
        return [seen[l[i]],  i]
      else:
        # Otherwise, set the current value as a key in buffer dict and i as the value
        seen[target - l[i]] = i
    # If we made it here, there is no solution, return none
    return None

ts = TwoSum()
res = ts.two_sum([2, 7, 11, 15], 9)
print(f'res is {res}, should be {[0, 1]}')