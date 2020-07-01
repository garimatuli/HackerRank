// Question : https://www.hackerrank.com/challenges/2d-array/problem

let arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

console.log("Input array : " + arr);

// hourglassSum function
function hourglassSum(arr) {
  let hourglassSumArr = [];
  console.log("Array Length : " + arr.length);

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr.length - 2; j++) {
      // calculating sum of one hourglass
      let sum = 0;

      // sum of hourglass top
      sum = sum + arr[i][j] + arr[i][j + 1] + arr[i][j + 2];

      // sum of hourglass mid
      sum = sum + arr[i + 1][j + 1];

      // sum of hourglass bottom
      sum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

      hourglassSumArr.push(sum);
    }
  }

  console.log("Hourglass Sum's array : " + hourglassSumArr);

  let maxHourGlassSum = Math.max(...hourglassSumArr);
  return maxHourGlassSum;
}

let result = hourglassSum(arr);
console.log("Max HourGlass Sum : " + result);
