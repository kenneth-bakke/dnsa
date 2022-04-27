/**
 * Given the head of a linked list, return the list after sorting it in ascending order.
 *
 * Input: head = [4,2,1,3]
 * Output: [1,2,3,4]
 *
 * Input: head = [-1,5,3,4,0]
 * Output: [-1,0,3,4,5]
 *
 * Input: head = []
 * Output: []
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 *
 * @param {ListNode} head
 * @return {ListNode}
 */

const sortList = function (head) {
  if (!head) return;
  let cur = head;
  let root = cur;
  while (cur.next) {
    if (cur.val > cur.next.val) {
      cur = swap(cur, cur.next);
    }
    cur = cur.next;
  }
  head =
  return head;
};

const swap = function (cur, next) {
  let temp = next;
  cur.next = next.next;
  temp.next = cur;
  cur = temp;
  return cur;
};

// Array version
var sortArrList = function (array) {
  let arr = [...array];
  // iterate the list
  for (let i = 0; i < arr.length; i++) {
    // if current value is greater than next value
    if (arr[i] > arr[i + 1]) {
      // swap them
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      // reset the counter
      i = -1;
    }
  }

  // list is sorted
  return arr;
};

module.exports = {
  sortList: sortList,
  swap: swap,
};

console.log(sortArrList([4, 2, 1, 3]));
console.log(sortArrList([-1, 5, 3, 4, 0]));
console.log(sortArrList([]));
