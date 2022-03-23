class Solution:
  def lols(self, string):
    map = {}
    max = 0
    j = 0
    for i, el in enumerate(string):
      print(el, i)
      # if i in map:
      #   j = max(j, map[i] + 1)
      # map[i]


lol = Solution()
print(lol.lols('abcabcbb'))