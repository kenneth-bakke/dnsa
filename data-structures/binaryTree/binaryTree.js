class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.nodeCount = 0;
    this.inOrderValues = [];
    this.preOrderValues = [];
    this.postOrderValues = [];
    this.levelOrderValues = [];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.nodeCount;
  }

  add(value) {
    if (this.contains(value)) {
      return false;
    } else {
      this.insert(this, value);
      this.nodeCount++;
      return true;
    }
  }

  insert(node, value) {
    // Base case, found a leaf
    if (!node) {
      node = new BinaryTree(value);
      // Recursive case, add to left or right (balanced tree);
    } else {
      if (value < node.value) {
        node.left = this.insert(node.left, value);
      } else {
        node.right = this.insert(node.right, value);
      }
    }
    return node;
  }

  remove(value) {
    if (this.contains(value)) {
      this.deleteNode(this, value);
      this.nodeCount--;
      return true;
    }
    return false;
  }

  deleteNode(node, value) {
    // Base case
    if (!node) return null;

    if (value < node.value) {
      node.left.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right.deleteNode(node.right, value);
    } else {
      if (!node.left) {
        const rightChild = node.right;

        node.value = null;
        node = null;

        return node;
        // return rightChild;
      } else if (!node.right) {
        const leftChild = node.left;

        node.value = null;
        node = null;

        return node;
        // return leftChild;
      } else {
        const temp = digLeft(node.right);

        node.value = temp.value;
        node.right = this.deleteNode(node.right, temp.value);
      }
    }
    return node;
  }

  digLeft(node) {
    const cur = node;
    while (cur.left) {
      cur = cur.left;
    }
    return cur;
  }

  digRight(node) {
    const cur = node;
    while (cur.right) {
      cur = cur.right;
    }
    return cur;
  }

  contains(value) {
    return this.exists(this, value);
  }

  exists(node, value) {
    if (!node) return false;

    if (value < node.value) {
      return this.exists(node.left, value);
    } else if (value > node.value) {
      return this.exists(node.right, value);
    } else {
      return true;
    }
  }

  height() {
    return this.depth(this);
  }

  depth(node) {
    if (!node) return 0;
    return Math.max(depth(node.left), depth(node.right)) + 1;
  }

  preOrderTraversal(node) {
    if (!node) return;
    // console.log(node.value);
    this.preOrderValues.push(node.value);
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
  }

  inOrderTraversal(node) {
    if (!node) return;
    this.inOrderTraversal(node.left);
    this.inOrderValues.push(node.value);
    // console.log(node.value);
    this.inOrderTraversal(node.right);
  }

  postOrderTraversal(node) {
    if (!node) return;
    this.postOrderTraversal(node.left);
    this.postOrderTraversal(node.right);
    // console.log(node.value);
    this.postOrderValues.push(node.value);
  }

  levelOrderTraversal(node) {
    if (!node) return;
    const nodesQueue = [node];

    while (nodesQueue.length) {
      const node = nodesQueue.shift();
      nodesQueue.push(node.left, node.right);
      console.log(node.value);
      this.levelOrderValues.push(node.value);
    }
  }
}

// Searching
function DFS(treeRoot, target) {
  if (!treeRoot) throw new Error('Tree does not exist');

  // Initialize list of nodes to check
  const nodesStack = [treeRoot];

  while (nodesStack.length) {
    // Take most recently added, this will slowly shrink our list of nodes
    const node = nodesStack.pop();

    // Check for our target
    if (node.value === target) {
      return node;
    }

    // Add nodes if they exist
    if (node.left) {
      nodesStack.push(node.left);
    }
    if (node.right) {
      nodesStack.push(node.right);
    }
  }

  throw new Error('Value not found');
}

function BFS(treeRoot, target) {
  if (!treeRoot) throw new Error('Tree does not exist');

  const nodesQueue = [treeRoot];

  while (nodesQueue.length) {
    const node = nodesQueue.shift();

    if (node.value === target) {
      return node;
    }
    if (node.left) {
      nodesQueue.push(node.left);
    }
    if (node.right) {
      nodesQueue.push(node.right);
    }
  }

  throw new Error('Value not found');
}

module.exports = {
  BinaryTree: BinaryTree,
  DFS: DFS,
  BFS: BFS,
};
