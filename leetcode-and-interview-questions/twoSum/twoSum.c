/**
 *
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * Example 1
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Example 2
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * Example 3
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 */


// /-----------Brute Force----------/
// int* twoSum(int* nums, int numsSize, int target) {
//   int* ret = (int *) malloc(2 * sizeof(int));
//   for(ret[0] = 0; ret[0] < numsSize; ++ret[0]) {
//     for(ret[1] = ret[0] + 1; ret[1] < numsSize; ++ret[1]) {
//       if(nums[ret[0]] + nums[ret[1]] == target) {
//         return ret;
//       }
//     }
//   }
//   return ret;
// }

// /----------Standard Version----------/
#include<stdio.h>
#include<stdlib.h>

void swap(int * const a, int * const b) {
  int tmp = *a;
  *a = *b;
  *b = tmp;
}

int partition_indexes(const int* const nums, int* const indexes, int lo, int hi) {
  int pivot = lo++;
  int pivot_val = nums[indexes[pivot]];
  int idx = pivot;
  int tmp;
  for(; lo < hi; ++lo) {
    if(nums[indexes[lo]] <= pivot_val) {
      swap(indexes + lo, indexes + hi);
    }
  }

  swap(indexes + pivot, indexes + idx);

  return idx;
}

void sort_indexes(const int* const nums, int*const indexes, int lo, int hi) {
  if (lo < hi) {
    int pivot = partition_indexes(nums, indexes, lo, hi);
    sort_indexes(nums, indexes, lo, pivot);
    sort_indexes(nums, indexes, pivot+1, hi);
  }
}

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
  int* ret = (int*)malloc(2*sizeof(int));
  int* indexes = (int*)malloc(numsSize*sizeof(int));
  for(int i = 0; i < numsSize; ++i) {
    indexes[i] = i;
  }
  sort_indexes(nums, indexes, 0, numsSize);

  int lo = 0;
  int hi = numsSize - 1;
  while (nums[indexes[lo]] + nums[indexes[hi]] != target) {
    if (nums[indexes[lo]] + nums[indexes[hi]] < target) {
      ++lo;
    } else {
      --hi;
    }
  }

  ret[0] = indexes[lo];
  ret[1] = indexes[hi];
  printf("[");
  for(int j = 0; j < 2; j++) {
    if (j == 1) {
      printf("%d", ret[j]);
    } else {
      printf("%d, ", ret[j]);
    }
  }
  printf("]\n");
  free(indexes);
  *returnSize = 2;
  return ret;
}

int main(void) {
  int testArr[4] = {2, 7, 11, 15};
  twoSum(testArr, 4, 9, &testArr[0]);
  return 0;
}

// /----------HASH VERSION----------/
// struct number_hash {
//   int value;
//   int index;
//   UT_hash_handle hh;
// };

// void destroy_table(struct number_hash** table) {
//   struct number_hash* curr;
//   struct number_hash* tmp;

//   HASH_ITER(hh, *table, curr, tmp) {
//     HASH_DEL(*table, curr);
//     free(curr);
//   }
// }

// int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
//   struct number_hash* table = NULL;
//   struct number_hash* element;
//   int* ret = (int*) malloc(2 * sizeof(int));
//   int remaining;
//   for (int i = 0; i < numsSize; ++i) {
//     remaining = target - nums[i];

//     // Find if there has already been an element such that the sum is target
//     HASH_FIND_INT(table, &remaining, element);
//     if (element) {
//       ret[0] = element->index;
//       ret[1] = i;
//       break;
//     }

//     // Add the new number to the hash table if it doesn't exist already
//     HASH_FIND_INT(table, &nums[i], element);
//     if (!element) {
//       element = (struct number_hash *) malloc(sizeof(*element));
//       element->value = nums[i];
//       element->index = i;

//       HASH_ADD_INT(table, value, element);
//     }
//   }

//   destroy_table(&table);

//   *returnSize = 2;
//   return ret;
// }