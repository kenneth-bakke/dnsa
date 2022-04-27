import functools


# My solution
class Solution:
  def singleNumber(self, nums: List[int]) -> int:
    seen = {}
    for n in nums:
      if n in seen:
        seen[n] += 1
      else:
        seen[n] = 1
    for i in seen:
      if seen[i] == 1:
        return i
    return None


# Sleeker solution
class Solution:
  def singleNumber(self, nums):
    seen = {}
    for n in nums:
      seen[n] = seen.get(n, 0) + 1
    for k, v in nums.items():
      if v == 1:
        return k


# O(N) solution
class Solution:
  def singleNumber(self, nums):
    res = 0
    for n in nums:
      res ^= n
    return res


# One liner
class Solution:
  def singleNumber(self, nums):
    return reduce(lambda x, y: x ^ y, nums)

class Solution:
  def singleNumber(self, nums):
    for i in range(1,len(nums)):
        nums[0] ^= nums[i]
    return nums[0]