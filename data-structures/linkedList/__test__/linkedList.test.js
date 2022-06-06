const { LinkedList, LinkedListNode } = require('../linkedList');
const { generateLinkedList } = require('../linkedListUtils');

describe('Linked list node', () => {
  it('Creates a new node', () => {
    const node = new LinkedListNode(1);
    expect(node.value).toBe(1);
    expect(node.next).toBe(null);
    expect(typeof node).toBe('object');
  });

  it('Creates a new linked list', () => {
    const head = new LinkedListNode(1);
    const a = new LinkedListNode(2);
    const b = new LinkedListNode(3);
    const c = new LinkedListNode(4);
    const d = new LinkedListNode(5);
    const e = new LinkedListNode(6);
    const f = new LinkedListNode(7);

    head.next = a;
    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    e.next = f;
    f.next = null;

    expect(head.next).toBe(a);
    expect(a.next).toBe(b);
    expect(b.next).toBe(c);
    expect(c.next).toBe(d);
    expect(d.next).toBe(e);
    expect(e.next).toBe(f);
    expect(f.next).toBe(null);
  });
});

describe('Linked list', () => {
  it('Creates a linked list', () => {
    const head = new LinkedListNode(1);
    const list = new LinkedList(head);
    expect(typeof list.head).toBe('object');
    expect(list.head.value).toBe(1);
    expect(list.head).toBe(head);
  });
});

describe('Generate linked list', () => {
  it('Generates a linked list properly', () => {
    const values = [1, 2, 3, 4, 5];
    const list = generateLinkedList(values);

    let cur = list.head;
    for (let i = 0; i < values.length; i++) {
      expect(cur.value).toBe(values[i]);
      cur = cur.next;
    }
  });
});

describe('Linked list methods', () => {
  it('Gets the length of the list', () => {
    const list = generateLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(list.length).toBe(10);
  });

  it('Appends to a linked list', () => {
    const head = new LinkedListNode(1);
    const list = new LinkedList(head);

    for (let i = 2; i < 5; i++) {
      list.append(i);
    }

    let cur = list.head;
    for (let i = 1; i < 5; i++) {
      expect(cur.value).toBe(i);
      cur = cur.next;
    }
  });

  it('Prepends to a linked list', () => {
    const head = new LinkedListNode(1);
    const list = new LinkedList(head);

    for (let i = 2; i < 5; i++) {
      list.prepend(i);
    }

    let cur = list.head;
    for (let i = 4; i > 0; i--) {
      expect(cur.value).toBe(i);
      cur = cur.next;
    }
  });

  it('Deletes from a linked list', () => {
    const list = generateLinkedList([1, 2, 3, 4, 5]);
    list.delete(3);
    expect(list.values).toStrictEqual([1, 2, 4, 5]);
  });
});
