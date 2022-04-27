var isSubsequence = function (s, t) {
  if (s.length > t.length) return false; // Cannot be subsequence if it is larger than check-string
  var prevExistingIndex = -1;
  var foundInTCounter = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (s[i] === t[j]) {
        if (j > prevExistingIndex) {
          prevExistingIndex = j;
          foundInTCounter++;
          break;
        }
      }
    }
  }

  return foundInTCounter === s.length ? true : false;
};

/**
 * After looking at leetcode discussion, it seems there is a shorter time complexity with
 * basically the same logic
 */

var isSubsequenceNTime = function (s, t) {
  if (s.length > t.length) return false;
  var subsequence = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[subsequence] === t[i]) {
      subsequence++;
    }
  }
  return subsequence === s.length;
};

exports.isSubsequence = isSubsequence;
