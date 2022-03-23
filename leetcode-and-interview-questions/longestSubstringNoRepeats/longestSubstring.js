// Longest Substring Without Repeating Characters
/**
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 */

// My solution (not 100% correct)
// input string
var lengthOfLongestSubstring = function(s) {
  let subString = {};
  let longestSS = 0;
  let currentSS = 0;

  for (let i = 0; i < s.length; i++) {
    // if current character is in our substring
    if (subString[s[i]]) {
      // check if our current substring length is larger than the longest one
      if (currentSS > longestSS) {
        // if so, the update our longest to be the new, larger one
        longestSS = currentSS;
        // reset the current substring length to 0
        currentSS = 0;
        // reset the substring tracker
        subString = {};
      } else {
        currentSS = 0;
      }
    } else {
      subString[s[i]] = 1;
      currentSS++;
    }
  }

  // return int length
  return longestSS;
}
// the basic idea is, keep a hashmap which stores the characters in string as keys and their positions as values,
// and keep two pointers which define the max substring. move the right pointer to scan through the string ,
// and meanwhile update the hashmap. If the character is already in the hashmap,
// then move the left pointer to the right of the same character last found.
// Note that the two pointers can only move forward.
// Proper version of my idea
var lols = function(string) {
  // Create a map
  let seen = new Map();
  let max = 0;
  let j = 0;
  // iterate through the string
  for (let i = 0; i < string.length; i++) {
    // if the string is in our map
    if (seen.has(string[i])) {
      // update our pointer to the greater of it's current val and the value of the current char in the map
      j = Math.max(j, seen.get(string[i]) + 1);
    }
    // set or update the current characters value to be the current index it's at
    seen.set(string[i], i);
    // Ensure the max is the longest between it's current val and the current index minus the pointer index plus one
    max = Math.max(max, i-j+1);
  }
  return max;
}

console.log(lols("abcabcbb"));
