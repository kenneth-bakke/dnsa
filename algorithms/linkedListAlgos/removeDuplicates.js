const {
  LinkedListNode,
} = require('../../data-structures/linkedList/linkedList');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * Write a function that removes duplicates from an unsorted linked list
 *
 * FOLLOW-UP: How would you do this if a temporary buffer is not allowed?
 *
 * @param {LinkedList} linkedList
 * @return {LinkedListNode}
 */

function removeDuplicates(linkedList) {
  let seen = {};
  let cur = linkedList.head;

  if (!cur || !cur.next) {
    return linkedList;
  }

  while (cur) {
    seen[cur.value] = true;
    if (cur.next && seen[cur.next.value]) {
      cur.next = cur.next.next;
    }
    cur = cur.next;
  }

  return linkedList;
}

module.exports = {
  removeDuplicates: removeDuplicates,
};
