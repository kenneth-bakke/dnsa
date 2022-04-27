/**
@param {number[]} nums1
@param {number[]} nums2
@return {number}

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106


 * |-----Approach-----|
 * STEP 1
 * combine both of the arrays (final boss array) [1, 3, 5, 2, 4]
 * sort combined array (divide and conquor algo) [1, 2, 3, 4, 5]
 *
 * STEP 2
 * check length of final boss array [1, 2, 3, 4, 5] -> L(5)
 *
 * STEP 3
 * return value at middle index (odd length) [-, -, 3, -, -] -> 3
 * OR
 * return average of value at both middle indices (even length) [1, 2, 3, 4] -> (2 + 3) / 2 = 2.5
 *
 * |-----LOGIC-----|
 * |****
 * Merge sort makes the most sense here as it fits O() reqs
 * and since we have two sorted arrays of arbitrary length
 * it seems to be the most appropriate algo
 * ****|
 *
 * STEP 1 Mergesort(list)
 * ---base case---
 * if list is length <= 1 -> return the list
 *
 * ---recursive case---
 * incrementally build a left and right half of the list
 * left -> empty array
 * right -> empty array
 * iterate the array
 *   if current item is less than value in the middle
 *     it goes into the left array
 *   otherwise
 *     it goes into the right array
 *
 * left = mergesort(left)
 * right = mergesort(right)
 *
 * merge both left and right
 *
 * STEP 1.5 Actualmerge(list1, list2)
 * create an empty array
 *
 * while left and right are no empty
 *   if first item in left is < first item in right
 *     remove first item from left
 *     push it to empty array
 *   otherwise
 *     remove first item from right
 *     push it to empty array
 *
 * in case left or right were longer than the other finish each off separately
 * while left is not empty
 *    remove first item from left
 *    push it to empty array
 *
 * while right is not empty
 *     remove first item from right
 *     push it to empty array
 *
 * return (now not) empty array
 *
 * STEP 2
 * if the final boss array is odd length -> (odd/even check function)
 *   then return the middle index
 * if the final boss array is even length -> (odd/even check function)
 *   then return the two middle indices average
 *
 */

var findMedianSortedArrays = function (nums1, nums2) {
  let finalBossArray = merge(nums1, nums2);
  let isOdd = finalBossArray.length % 2 !== 0 ? true : false;
  let median = findMedian(finalBossArray, isOdd);
  return median;
};

var findMedian = function (array, isOdd = true) {
  if (isOdd) {
    let mid = Math.floor(array.length / 2);
    return array[mid];
  }
  let leftMid = Math.floor(array.length / 2) - 1;
  let leftValue = array[leftMid];
  let rightMid = Math.ceil(array.length / 2);
  let rightValue = array[rightMid];
  return (leftValue + rightValue) / 2;
};

// Unneccesary, lists are already sorted
// var mergeSort = function (numArray) {
//   let length = numArray.length;
//   // If list is length <= 1 -> return the list
//   if (numArray.length <= 1) {
//     return numArray;
//   }

//   // Incrementally build a left and right half of the list
//   var left = [];
//   var right = [];

//   for (let i = 0; i < length; i++) {
//     let midIndex = Math.floor(numArray.length / 2);
//     let midValue = numArray[midIndex];
//     let currentValue = numArray[i];

//     if (currentValue < midValue) {
//       left.push(currentValue);
//     } else {
//       right.push(currentValue);
//     }
//   }

//   // Recursively sort each array
//   left = mergesort(left);
//   right = mergesort(right);

//   // Merge sorted halves
//   return merge(left, right);
// };

// This will return a sorted array so we don't need the above mergeSort function
var merge = function (leftArr, rightArr) {
  let merged = [];
  // While left and right are nt empty
  while (leftArr.length > 0 && rightArr.length > 0) {
    let firstLeft = leftArr[0];
    let firstRight = rightArr[0];

    if (firstLeft < firstRight) {
      merged.push(leftArr.shift());
    } else {
      merged.push(rightArr.shift());
    }
  }

  // Add remaining elements to return list
  // (will only ever go into one or the other)
  while (leftArr.length > 0) {
    merged.push(leftArr.shift());
  }
  while (rightArr.length > 0) {
    merged.push(rightArr.shift());
  }

  return merged;
};

module.exports = {
  merge: merge,
  // mergeSort: mergeSort,
  findMedian: findMedian,
  findMedianSortedArrays: findMedianSortedArrays,
};
