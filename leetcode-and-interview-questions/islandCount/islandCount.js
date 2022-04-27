/**
 * Island count without mutating original array
 */

const countIslands = function (grid) {
  if (!grid) return 0;
  let m,
    n = [grid.length, grid[0].length];
  let seen = createTFGrid(grid.length, grid[0].length);

  const dfs = function (i, j) {
    if (
      i < 0 ||
      i > grid.length ||
      j < 0 ||
      j > grid[0].length ||
      grid[i][j] === 0 ||
      seen[i][j]
    ) {
      return;
    }
    seen[i][j] = true;
    dfs(i, j++);
    dfs(i, j--);
    dfs(i++, j);
    dfs(i--, j);
  };

  let numIslands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
        numIslands++;
      }
    }
  }

  return numIslands;
};

const createTFGrid = function (m, n) {
  let TFGrid = [];
  for (let i = 0; i < m; i++) {
    TFGrid[i] = [];
    for (let j = 0; j < n; j++) {
      TFGrid[i][j] = false;
    }
  }
  return TFGrid;
};

module.exports = {
  countIslands: countIslands,
  createTFGrid: createTFGrid,
};
