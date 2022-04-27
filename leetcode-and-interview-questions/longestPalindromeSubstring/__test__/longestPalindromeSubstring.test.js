const exp = require('constants');
var {
  isPalindrome,
  longestPalindrome,
} = require('../longestPalindromeSubstring.js');

describe('Is palindrome checker', () => {
  it('Returns true for a palindrome', () => {
    let verified = isPalindrome('aba');
    expect(verified).toBe(true);
  });
  it('Returns false for non-palindrome', () => {
    let verified = isPalindrome('abc');
    expect(verified).toBe(false);
  });
});

describe('Longest palindrome substring', () => {
  it('Finds a palindrome in a string', () => {
    let res = longestPalindrome('xyzabaxyz');
    expect(res).toEqual('aba');
  });
  it('Works on long palindromes', () => {
    let res = longestPalindrome('SQQSYYSQQS');
    expect(res).toBe('SQQSYYSQQS');
  });
});
