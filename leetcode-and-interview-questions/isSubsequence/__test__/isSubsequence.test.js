const { isSubsequence } = require('../isSubsequence');

describe('isSubsequence', () => {
  it('find a subsequence that exists', () => {
    let s = 'abc';
    let t = 'ahbdgc';
    let res = isSubsequence(s, t);
    expect(res).toBe(true);
  });

  it('finds a subsequence with multiple identical values', () => {
    let s = 'ab';
    let t = 'baab';
    let res = isSubsequence(s, t);
    expect(res).toBe(true);
  });
});
