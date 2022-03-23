function maxXor(lo, hi, k) {
  // Write your code here
  let a = lo;
  let b = a + 1;
  let max = 0;

  while(b <= hi && a !== b) {
      max = a ^ b;
      // case a ^ b is our limit return that as it can get no higher
      if (max === k) {
          return k;
      // a ^ b is above limit, reset and increment b
      } else if (max > k) {
          max = 0;
      // a ^ b is below limit
      }
      b++;
      if (b > hi) {
          b--;
          a++;
      }
  }
  return max;
}

console.log(maxXor(2, 4, 8));