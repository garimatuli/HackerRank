// using reduce()
// The reduce() method executes a reducer function (that you provide)
// on each element of the array, resulting in single output value.

function shortestLongest(str) {
  // Longest word in a string:
  let longest = str
    .split(" ")
    .reduce((left, right) => (left.length >= right.length ? left : right));

  // Shortest word in a string:
  let shortest = str
    .split(" ")
    .reduce((left, right) => (left.length <= right.length ? left : right));

  return [shortest, longest];
}

console.log(shortestLongest("United States of America"));

function shortestLongestWord(arr) {
  // Longest word in an array of strings:
  let longest = arr.reduce((left, right) =>
    left.length >= right.length ? left : right
  );

  // Shortest word in an array of strings:
  let shortest = arr.reduce((left, right) =>
    left.length <= right.length ? left : right
  );

  return [shortest, longest];
}

console.log(
  shortestLongestWord(["United States of America", "India", "USA", "XYZ"])
);
