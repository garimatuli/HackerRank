// program that prints each number from 1 to n on a new line.
// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
    else {
      if (i % 5 == 0) console.log("Buzz");
      else if (i % 3 == 0) console.log("Fizz");
      else console.log(i);
    }
  }

  //   // Using Ternary Operator
  //   let a = 0,
  //     b = 0;
  //   for (let i = 1; i <= n; i++) {
  //     a = i % 3 == 0;
  //     b = i % 5 == 0;
  //     console.log(a ? (b ? "FizzBuzz" : "Fizz") : b ? "Buzz" : i);
  //   }
}

fizzBuzz(15);
