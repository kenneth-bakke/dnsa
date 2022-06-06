const { QuickFind } = require('../quickFind');
const { QuickUnion } = require('../quickUnion');
const { QuickUnionWeighted } = require('../quickUnionWeighted');
const {
  WeightedQuickUnionPathCompression,
} = require('../quickUnionPathCompression');

describe('quick find', () => {
  let start = Date.now();
  const quickFind = new QuickFind(10);
  let duration = Date.now() - start;
  console.log('Time taken', duration);

  it('Creates a UF', () => {
    expect(quickFind.length).toBe(10);
    expect(typeof quickFind.storage).toBe('object');
  });

  it('Properly connects two nodes', () => {
    start = Date.now();
    quickFind.union(1, 6);
    expect(quickFind.connected(1, 6)).toBe(true);
    duration = Date.now() - start;
    console.log('Time taken', duration);
  });

  it('Properly connects multiple nodes', () => {
    start = Date.now();
    quickFind.union(6, 2);
    expect(quickFind.connected(1, 2)).toBe(true);
    duration = Date.now() - start;
    console.log('Time taken', duration);
  });

  it('Returns false for two nodes that are not connected', () => {
    start = Date.now();
    expect(quickFind.connected(1, 3)).toBe(false);
    duration = Date.now() - start;
    console.log('Time taken', duration);
  });
});

describe('quick union', () => {
  let start = Date.now();
  const quickUnion = new QuickUnion(10);
  let duration = Date.now() - start;
  console.log('Time taken', duration);

  it('Creates a UF', () => {
    expect(quickUnion.length).toBe(10);
    expect(typeof quickUnion.storage).toBe('object');
  });

  it('Properly connects two nodes', () => {
    quickUnion.union(1, 6);
    expect(quickUnion.connected(1, 6)).toBe(true);
  });

  it('Properly connects multiple nodes', () => {
    quickUnion.union(6, 2);
    expect(quickUnion.connected(1, 2)).toBe(true);
  });

  it('Returns false for two nodes that are not connected', () => {
    expect(quickUnion.connected(1, 3)).toBe(false);
  });
});

describe('weighted quick union', () => {
  let start = Date.now();
  const quickUnionWeighted = new QuickUnionWeighted(10);
  let duration = Date.now() - start;
  console.log('Time taken', duration);

  it('Creates a UF', () => {
    expect(quickUnionWeighted.length).toBe(10);
    expect(typeof quickUnionWeighted.storage).toBe('object');
  });

  it('Properly connects two nodes', () => {
    start = Date.now();
    quickUnionWeighted.union(1, 6);
    expect(quickUnionWeighted.connected(1, 6)).toBe(true);
    duration = Date.now() - start;
    console.log('Time taken', duration);
  });

  it('Properly connects multiple nodes', () => {
    start = Date.now();
    quickUnionWeighted.union(6, 2);
    expect(quickUnionWeighted.connected(1, 2)).toBe(true);
    duration = Date.now() - start;
    console.log('Time taken', duration);
  });

  it('Returns false for two nodes that are not connected', () => {
    start = Date.now();
    expect(quickUnionWeighted.connected(1, 3)).toBe(false);
    duration = Date.now() - start;
    console.log('Time taken', duration);
  });
});

describe('WQUPC', () => {
  let start = Date.now();
  const weightedQuickUnionPathCompression =
    new WeightedQuickUnionPathCompression(10);
  let duration = Date.now() - start;
  console.log('Time taken', duration);

  it('Creates a UF', () => {
    expect(weightedQuickUnionPathCompression.length).toBe(10);
    expect(typeof weightedQuickUnionPathCompression.storage).toBe('object');
  });

  it('Properly connects two nodes', () => {
    start = Date.now();
    weightedQuickUnionPathCompression.union(1, 6);
    expect(weightedQuickUnionPathCompression.connected(1, 6)).toBe(true);
    duration = Date.now() - start;
    console.log('Time taken', duration);
  });

  it('Properly connects multiple nodes', () => {
    start = Date.now();
    weightedQuickUnionPathCompression.union(6, 2);
    expect(weightedQuickUnionPathCompression.connected(1, 2)).toBe(true);
    duration = Date.now() - start;
    console.log('Time taken', duration);
  });

  it('Returns false for two nodes that are not connected', () => {
    start = Date.now();
    expect(weightedQuickUnionPathCompression.connected(1, 3)).toBe(false);
    duration = Date.now() - start;
    console.log('Time taken', duration);
  });
});
