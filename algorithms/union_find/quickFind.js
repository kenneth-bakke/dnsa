/**
 * Eager algorithm for Union Find using Quick Find
 * Overall implementation is O(N**2) because the constructor and union
 * are too slow.
 */

class QuickFind {
  // Create a simple array where index === component
  constructor(N) {
    this.storage = [];
    this.initialize(N);
  }

  // O(N)
  initialize(N) {
    for (let i = 0; i < N; i++) {
      this.storage[i] = i;
    }
  }

  get length() {
    return this.storage.length;
  }

  // O(1)
  connected(p, q) {
    return this.storage[p] === this.storage[q];
  }

  // O(N)
  union(p, q) {
    let pstorage = this.storage[p];
    let qstorage = this.storage[q];
    for (let i = 0; i < this.length; i++) {
      if (this.storage[i] === pstorage) {
        this.storage[i] = qstorage;
      }
    }
  }
}

exports.QuickFind = QuickFind;
