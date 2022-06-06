const { LinkedListNode, LinkedList } = require('./linkedList');

module.exports = {
  generateLinkedList: (valuesArray) => {
    const head = new LinkedListNode(valuesArray[0]);
    const newLinkedList = new LinkedList(head);

    for (let i = 1; i < valuesArray.length; i++) {
      newLinkedList.append(valuesArray[i]);
    }

    return newLinkedList;
  },
};
