const { BinaryTree, DFS, BFS, levelOrderTraversal } = require('./binaryTree');

describe('Binary search tree', () => {
  it('Adds to the tree', () => {
    const root = new BinaryTree(1);
    root.add(2);
    expect(root.isEmpty()).toBeFalsy();
    expect(root.value).toBe(1);
    expect(root.left).toBeNull();
    expect(root.right).not.toBeUndefined();
    expect(root.contains(2)).toEqual(true);
  });

  it('Removes from the tree', () => {
    const root = new BinaryTree(1);
    root.add(2);
    root.remove(2);
    console.log(root);
    expect(root.isEmpty()).toBeTruthy();
    expect(root.value).toBe(1);
    expect(root.left).toBeNull();
    expect(root.right.value).toBeNull();
    expect(root.right.left).toBeNull();
    expect(root.right.right).toBeNull();
    expect(root.contains(2)).toEqual(false);
    expect(root.size()).toBe(0);
  });

  it('Traverses in order properly', () => {
    const root = new BinaryTree(7);
    root.add(20);
    root.add(5);
    root.add(15);
    root.add(10);
    root.add(4);
    root.add(4);
    root.add(33);
    root.add(2);
    root.add(25);
    root.add(6);
    root.inOrderTraversal(root);
    expect(root.inOrderValues).toEqual([2, 4, 5, 6, 7, 10, 15, 20, 25, 33]);
  });

  it('Traverses in pre-order properly', () => {
    const root = new BinaryTree(7);
    root.add(20);
    root.add(5);
    root.add(15);
    root.add(10);
    root.add(4);
    root.add(4);
    root.add(33);
    root.add(2);
    root.add(25);
    root.add(6);
    root.preOrderTraversal(root);
    expect(root.preOrderValues).toEqual([7, 5, 4, 2, 6, 20, 15, 10, 33, 25]);
  });

  it('Traverses in post-order properly', () => {
    const root = new BinaryTree(7);
    root.add(20);
    root.add(5);
    root.add(15);
    root.add(10);
    root.add(4);
    root.add(4);
    root.add(33);
    root.add(2);
    root.add(25);
    root.add(6);
    root.postOrderTraversal(root);
    expect(root.postOrderValues).toEqual([2, 4, 6, 5, 10, 15, 25, 33, 20, 7]);
  });
});

describe('Depth first search', () => {
  it('Finds a value that exists in one leaf tree', () => {
    const root = new BinaryTree(1);
    expect(DFS(root, 1).value).toEqual(1);
  });

  it('Finds a value that exists in tree of depth 2', () => {
    const root = new BinaryTree(1);
    root.add(2);
    root.add(3);
    expect(DFS(root, 3).value).toEqual(3);
  });

  it('Throws an error when value not found', () => {
    const root = new BinaryTree(1);
    root.add(2);
    root.add(3);
    expect(() => DFS(root, 4)).toThrow(Error);
    expect(() => DFS(root, 4)).toThrow('Value not found');
  });
});

describe('Breadth first search', () => {
  it('Finds a value that exists in one leaf tree', () => {
    const root = new BinaryTree(1);
    expect(BFS(root, 1).value).toEqual(1);
  });

  it('Finds a value that exists in tree of depth 2', () => {
    const root = new BinaryTree(1);
    root.add(2);
    root.add(3);
    expect(BFS(root, 3).value).toEqual(3);
  });

  it('Throws an error when value not found', () => {
    const root = new BinaryTree(1);
    root.add(2);
    root.add(3);
    expect(() => BFS(root, 4)).toThrow(Error);
    expect(() => BFS(root, 4)).toThrow('Value not found');
  });
});
