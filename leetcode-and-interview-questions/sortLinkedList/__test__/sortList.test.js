/**
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const { sortList, swap } = require('../sortList');

describe('swap', () => {
  it('swaps the middle node', () => {
    let swapped = swap({
      val: 2,
      next: {
        val: 1,
        next: {
          val: 3,
          next: null,
        },
      },
    });
    expect(swapped).toEqual({
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: null,
        },
      },
    });
  });
});

describe('sortList', () => {
  let testList;
  beforeEach(() => {
    testList = new ListNode(4, null);
    testList.next = new ListNode(2, null);
    testList.next.next = new ListNode(1, null);
    testList.next.next.next = new ListNode(3, null);
    return testList;
  });

  it('returns an object', () => {
    let sortedList = sortList(testList);
    expect(typeof sortedList).toBe('object');
  });

  it('maintains data types', () => {
    let sorted = sortList(testList);
    let expected = new ListNode(1, null);
    expected.next = new ListNode(2, null);
    expected.next.next = new ListNode(3, null);
    expected.next.next.next = new ListNode(4, null);
    expect(typeof sorted).toBe('object');
  });

  it('sorts a linked list', () => {
    let sorted = sortList(testList);
    let expected = new ListNode(1, null);
    expected.next = new ListNode(2, null);
    expected.next.next = new ListNode(3, null);
    expected.next.next.next = new ListNode(4, null);
    expect(sorted).toEqual(expected);
  });
});
