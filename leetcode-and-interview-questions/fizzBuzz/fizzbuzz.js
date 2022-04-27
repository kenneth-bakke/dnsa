/**
 * The FizzBuzz problem is a classic test given in coding interviews.
 * The task is simple: Print integers 1 to N,
 * but print “Fizz” if an integer is divisible by 3,
 * “Buzz” if an integer is divisible by 5,
 * and “FizzBuzz” if an integer is divisible by both 3 and 5.
 */

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let fb = i % 3 === 0 && i % 5 === 0 ? "FizzBuzz" : null;
    console.log(fb ? fb : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i);
  }
}

console.log(fizzBuzz(101));
