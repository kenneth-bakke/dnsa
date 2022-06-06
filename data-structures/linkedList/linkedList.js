class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(node) {
    this.head = node;
    this.tail = node;
    this.size = 1;
  }

  append(value) {
    this.tail.next = new LinkedListNode(value, null);
    this.tail = this.tail.next;
    this.size = this.size + 1;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    this.size = this.size + 1;
  }

  insert(value, index) {
    if (index > this.length) throw new Error('Index does not exist');
  }

  delete(data) {
    if (this.head.value === data) {
      if (this.head.next) {
        const deletedNode = this.head;
        this.head = this.head.next;
        return deletedNode;
      } else {
        return null;
      }
    }

    let cur = this.head;

    while (cur) {
      if (cur.next.value === data) {
        const deletedNode = cur.next;
        cur.next = cur.next.next;
        return deletedNode;
      }
      cur = cur.next;
    }

    return;
  }

  get length() {
    return this.size;
  }

  get values() {
    let cur = this.head;
    let values = [];
    while (cur) {
      values.push(cur.value);
      cur = cur.next;
    }
    return values;
  }
}

module.exports = {
  LinkedList: LinkedList,
  LinkedListNode: LinkedListNode,
};
