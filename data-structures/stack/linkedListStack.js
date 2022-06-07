/**
 * Using a stack in JS is really easy because JS Array.prototype has
 * push/pop built in so you just need to implement the logic and properly
 * use push pop when you want to simulate a stack. This is a simple way
 * to implement a stack using linked lists
 */

const { LinkedListNode } = require('../linkedList/linkedList');

class LinkedListStack {
  constructor() {
    this.first = null;
    this.size = 0;
  }

  get length() {
    return this.size;
  }

  push(item) {
    const oldFirst = this.first;
    this.first = new LinkedListNode(item);
    this.first.next = oldFirst;
    this.size++;
  }

  pop() {
    const poppedItem = this.first.value;
    this.first = this.first.next;
    this.size--;
    return poppedItem;
  }

  isEmpty() {
    return this.first === null;
  }
}
