const { createMatrix, zigZag } = require('../zigzag');

describe('create matrix', () => {
  it('creates a matrix', () => {
    let matrix = createMatrix(3);
    let expectedMatrix = ['', '', ''];
    expect(matrix).toEqual(expectedMatrix);
  });
});

describe('zig zag', () => {
  it('zig zags a simple string by 3', () => {
    let zigzagged = zigZag('PAYPALISHIRING', 3);
    expect(zigzagged).toEqual('PAHNAPLSIIGYIR');
  });
  it('zig zags a very small string', () => {
    let zig = zigZag('AB', 1);
    let zag = 'AB';
    expect(zig).toEqual(zag);
  });
});
