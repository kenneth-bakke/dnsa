#
# The FizzBuzz problem is a classic test given in coding interviews.
# The task is simple: Print integers 1 to N,
# but print “Fizz” if an integer is divisible by 3,
# “Buzz” if an integer is divisible by 5,
# and “FizzBuzz” if an integer is divisible by both 3 and 5.
#

class FizzBuzz:
  def fizz_buzz(self, n):
    for i in range(1, n - 1):
      fb = 'FizzBuzz' if i % 3 == 0 and i % 5 ==0 else None
      if fb:
        print(fb)
      elif i % 3 == 0:
        print('Fizz')
      elif i % 5 == 0:
        print('Buzz')
      else:
        print(i)

  def shortFB(self, n):
    for i in range(1, n - 1):
      fizz = 'Fizz' if i % 3 == 0 else '';
      buzz = 'Buzz' if i % 5 == 0 else '';
      print(f'{fizz}{buzz}' or i);


fizbuz = FizzBuzz()
# print(fizbuz.fizz_buzz(101))
print(fizbuz.shortFB(101))