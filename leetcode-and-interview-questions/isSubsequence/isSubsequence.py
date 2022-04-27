class Solution(object):
    def isSubsequence(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if len(s) > len(t):
            return False
        subsequence = 0
        for char in t:
            if subsequence <= len(s) - 1:
                if char == s[subsequence]:
                    subsequence += 1

        return subsequence == len(s)
