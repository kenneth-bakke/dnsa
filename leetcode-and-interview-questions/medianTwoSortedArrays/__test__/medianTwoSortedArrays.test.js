const {
  merge,
  findMedian,
  findMedianSortedArrays,
} = require('../medianOfTwoSortedArrays');

describe('merge', () => {
  it('should merge two arrays correctly', () => {
    let a1 = [1, 2];
    let a2 = [3, 4];
    let merged = merge(a1, a2);
    expect(merged).toEqual([1, 2, 3, 4]);
  });

  it('should merge two arrays of different length correctly', () => {
    let a1 = [1, 2];
    let a2 = [3, 4, 5];
    let merged = merge(a1, a2);
    expect(merged).toEqual([1, 2, 3, 4, 5]);
  });

  it('should pass leetcode first test', () => {
    let a1 = [1, 3];
    let a2 = [2];
    let merged = merge(a1, a2);
    expect(merged).toEqual([1, 2, 3]);
  });
});

describe('find median', () => {
  it('returns the correct median in an odd length list', () => {
    let list = [1, 2, 3, 4, 5];
    let median = findMedian(list, true);
    expect(median).toBe(3);
  });

  it('returns the correct median in an even length list', () => {
    let list = [1, 2, 3, 4];
    let median = findMedian(list, false);
    expect(median).toBe(2.5);
  });

  it('returns the median in a long even list', () => {
    let list = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    let median = findMedian(list, false);
    expect(median).toBe(10.5);
  });
});

describe('median of two sorted arrays', () => {
  it('returns easiest test case', () => {
    let a1 = [1, 3];
    let a2 = [2];
    let median = findMedianSortedArrays(a1, a2);
    expect(median).toEqual(2);
  });
});
