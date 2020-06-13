// Question : https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  let d1Sum = 0,
    d2sum = 0;
  for (let i = 0, j = arr.length - 1; i < arr.length, j >= 0; i++, j--) {
    d1Sum = d1Sum + arr[i][i];
    d2sum = d2sum + arr[i][j];
  }
  let difference = Math.abs(d1Sum - d2sum);
  return difference;
}

let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
console.log("Diagonal Difference = " + diagonalDifference(arr));
