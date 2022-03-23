/**
 * @param {string} s
 * @return {string}
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 * Example 1:
 *
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 * Example 2:
 *
 * Input: s = "cbbd"
 * Output: "bb"
 *
 * babad
 * b == yes
 * ba == no
 * bab == yes
 * baba == no
 * babad == no
 *
 * |----Approach----|
 * Iterate through the main string, starting with the first character. Add the current letter
 * to a 'palindrome' string. After each addition to this 'palindrome
 * string', check to see it is still a palindrome. If it is, compare it's length
 * to the length of the main palindrome string (the current longest palindrome)
 * If it is longer than the main palindrome, replace that main palindrome string
 * with the current string. If the current palindrome is not longer, then keep going.
 * If it is not a palindrome then reset the string to be empty and start iterating from the
 * next character
 *
 * Constraints:
 *
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters.
 */
var longestPalindrome = function (s) {
  var palindromes = {};

  for (let i = 0; i < s.length; i++) {
    let str = '';
    for (let j = i; j < s.length; j++) {
      str += s[j];
      if (isPalindrome(str)) {
        palindromes[str] = str.length;
      }
    }
  }

  return Object.keys(palindromes).reduce((a, b) =>
    palindromes[a] > palindromes[b] ? a : b
  );
};

var isPalindrome = function (string) {
  let reversed = string.toLowerCase().split('').reverse().join('');
  return string === reversed;
};

module.exports = {
  isPalindrome: isPalindrome,
  longestPalindrome: longestPalindrome,
};

// Expanding search algorithm
// var longestPalindrome = function(s) {
//   let longest = '';
//   const findLongestPalindrome = (str, i, j) => {
//       while(i >= 0 && j < str.length && str[i] === str[j]) {
//           i -= 1;
//           j += 1;
//       }
//       // slice the qualified substring from the second last iteration
//       return str.slice(i + 1, j);
//   }
//   for (let i = 0; i < s.length; i++) {
//       // palindrome can center around 1 or 2 letters
//       const current1 = findLongestPalindrome(s, i, i);
//       const current2 = findLongestPalindrome(s, i, i + 1);
//       const longerPalindrome =
//             current1.length > current2.length ? current1 : current2;
//       if (longerPalindrome.length > longest.length) {
//           longest = longerPalindrome;
//       }
//   }
//   return longest;
// };
