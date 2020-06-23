// Question : https://www.hackerrank.com/challenges/staircase/problem

/* str.repeat(count) : The repeat() method constructs and returns a new string
 * which contains the specified number of copies of the string
 * on which it was called, concatenated together.
 *
 * fill() method changes all elements in an array to a static value,
 * from a start index (default 0) to an end index (default array.length).
 * It returns the modified array.
 *
 * join() joins the elements of an array into a string.
 * The elements of the string will be separated by a specified separator
 * and its default value is comma(, )
 */

function staircaseWithRepeat(n) {
  let i = 0;
  const char = "#";
  for (i = 1; i <= n; i++) {
    let result = " ".repeat(n - i) + char.repeat(i);
    console.log(result);
  }
}

function staircaseWithFill(n) {
  const char = "#";
  let arr = Array(n).fill(" "); // creates an array of length n & fills it with " "
  for (let i = 1; i <= n; i++) {
    let result = arr.fill(char, -i, arr.length); // fills specified indices with the character
    console.log(result.join("")); // to join array elements to a string
  }
}

staircaseWithRepeat(5);
staircaseWithFill(5);
