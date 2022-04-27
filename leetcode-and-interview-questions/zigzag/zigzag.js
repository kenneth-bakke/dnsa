/**
 * class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s

        row_arr = [""] * numRows
        row_idx = 1
        going_up = True

        for ch in s:
            row_arr[row_idx-1] += ch
            if row_idx == numRows:
                going_up = False
            elif row_idx == 1:
                going_up = True

            if going_up:
                row_idx += 1
            else:
                row_idx -= 1

        return "".join(row_arr)
 */

var zigZag = function (string, numRows) {
  if (numRows === 1) return string;

  var rowArray = createMatrix(numRows);

  rowIndex = 1;
  increasing = true;

  // Iterate the string
  for (let i = 0; i < string.length; i++) {
    rowArray[rowIndex - 1] += string[i];
    if (rowIndex === numRows) increasing = false;
    else if (rowIndex === 1) increasing = true;

    if (increasing) {
      rowIndex++;
    } else {
      rowIndex--;
    }
  }
  return rowArray.join('');
};

var createMatrix = function (numRows) {
  var matrix = [];
  for (let i = 0; i < numRows; i++) {
    matrix.push('');
  }
  return matrix;
};

module.exports = {
  createMatrix: createMatrix,
  zigZag: zigZag,
};
