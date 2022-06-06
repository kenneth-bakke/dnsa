/**
 * When finding the root of the tree for any node, we touch all node
 * While we're doing that, might as well have that node point to the root
 * One line change in root
 */

class WeightedQuickUnionPathCompression {
  // Add an additional array tracking the size of each node
  constructor(N) {
    this.storage = [];
    this.size = [];
    this.initialize(N);
  }

  initialize(N) {
    for (let i = 0; i < N; i++) {
      this.storage[i] = i;
      this.size[i] = 1;
    }
  }

  get length() {
    return this.storage.length;
  }

  // Same as quick union weighted, with line added
  root(i) {
    while (i !== this.storage[i]) {
      this.storage[i] = this.storage[this.storage[i]]; // Added line
      i = this.storage[i];
    }
    return i;
  }

  // Same as normal quick union
  connected(p, q) {
    return this.root(p) === this.root(q);
  }

  // Change the union to weight depending on size
  union(p, q) {
    let i = this.root(p);
    let j = this.root(q);
    if (i === j) return;

    // Depending on which tree is smaller adjust the root
    // and add the size of the one changing to the new root
    if (this.size[i] < this.size[j]) {
      this.storage[i] = j;
      this.size[j] += this.size[i];
    } else {
      this.storage[j] = i;
      this.size[i] += this.size[j];
    }
  }
}

exports.WeightedQuickUnionPathCompression = WeightedQuickUnionPathCompression;
