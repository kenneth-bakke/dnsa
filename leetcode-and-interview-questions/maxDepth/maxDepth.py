class Tree():
  def __init__(self, v, l, r):
    self.v = v
    self.l = l
    self.r = r


class Solution:
  def maxDepth(self, root):
    if root is None:
      return 0
    return max(self.maxDepth(root.l), self.maxDepth(root.r)) + 1


a = Tree(3,
  Tree(9, None, None),
  Tree(20,
    Tree(15, None, None),
    Tree(7, None, None)
  )
)


m = Solution()
print(m.maxDepth(a))