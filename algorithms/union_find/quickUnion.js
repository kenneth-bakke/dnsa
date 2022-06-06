/**
 * Lazy algorithm for Union Find using Quick Union
 * Still too slow but less code and a bit faster than quickFind
 * Will not support large scaling in dynamic connectivity
 */

class QuickUnion {
  constructor(N) {
    this.storage = [];
    this.initialize(N);
  }

  initialize(N) {
    for (let i = 0; i < N; i++) {
      this.storage[i] = i;
    }
  }

  get length() {
    return this.storage.length;
  }

  // Finds the root of any node
  root(i) {
    while (i !== this.storage[i]) {
      i = this.storage[i];
    }
    return i;
  }

  connected(p, q) {
    return this.root(p) === this.root(q);
  }

  union(p, q) {
    let i = this.root(p);
    let j = this.root(q);
    this.storage[i] = j;
  }
}

exports.QuickUnion = QuickUnion;
