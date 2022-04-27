/**
 * Given a string, reverse it without using any extra memory
 */

function reverseString(str) {
  // take the first and last element, swap them until you get to the middle
  let left = 0;
  let right = str.length - 1;
  let strArr = [...str];

  while (left < right) {
    let temp = strArr[left];
    strArr[left] = strArr[right];
    strArr[right] = temp;
    left++;
    right--;
  }

  str = strArr.join('');
  return str;
}

module.exports = reverseString;
// Example

// hello
// 0<->4
// oellh
//  1-3
// olleh
//   2 if i == j leave it

// olleh : result
