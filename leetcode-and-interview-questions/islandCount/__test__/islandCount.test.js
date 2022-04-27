const { expect } = require('chai');
const exp = require('constants');
const { createTFGrid, countIslands } = require('../islandCount.js');

const testTFGrid = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
];

const testGrid1 = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

const testGrid2 = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];

describe('TFGrid', () => {
  it('returns an m*n grid', () => {
    let [m, n] = [5, 4];
    let grid = createTFGrid(m, n);

    expect(grid).toEqual(testGrid1);
  });
});

describe('countIslands', () => {
  let numIslands1 = countIslands(testGrid1);
  let numIslands2 = countIslands(testGrid2);
  it('returns an integer', () => {
    expect(typeof numIslands).toBe('number');
  });
  it('returns the correct number of islands', () => {
    expect(numIslands1).toEqual(1);
    expect(numIslands2).toEqual(1);
  });
});
