const {
  LinkedListNode,
} = require('../../../data-structures/linkedList/linkedList');
const {
  generateLinkedList,
} = require('../../../data-structures/linkedList/linkedListUtils');
const { removeDuplicates } = require('../removeDuplicates');
const fs = require('fs');

describe('Remove dupes', () => {
  it('Removes one set of duplicates', () => {
    const oneDuplicate = generateLinkedList([1, 1, 2]);
    const rem = removeDuplicates(oneDuplicate);
    expect(rem.values).toStrictEqual([1, 2]);
  });

  it('Removes multiple instances of duplicates', () => {
    const multipleDuplicates = generateLinkedList([1, 1, 2, 3, 4, 5, 5]);
    const rem = removeDuplicates(multipleDuplicates);
    expect(rem.values).toStrictEqual([1, 2, 3, 4, 5]);
  });

  it('Removes duplicates from a very large list', () => {
    const bigArray = [];

    for (let i = 1; i <= 200; i++) {
      bigArray.push(Math.floor(Math.random() * 200));
    }

    const filteredBigArray = new Set(bigArray);

    const bigList = generateLinkedList(bigArray);
    const filteredBigList = generateLinkedList(Array.from(filteredBigArray));

    const rem = removeDuplicates(bigList);

    expect(rem.values).toEqual(filteredBigList.values);
  });

  it('Deals with list of length one', () => {
    expect(removeDuplicates(generateLinkedList([1])).values).toStrictEqual([1]);
  });

  it('Returns original list if no duplicates exist', () => {
    const noDupes = generateLinkedList([1, 2, 3, 4, 5]);
    const rem = removeDuplicates(noDupes);
    expect(rem).toStrictEqual(noDupes);
  });
});
