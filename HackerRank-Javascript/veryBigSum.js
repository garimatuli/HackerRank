// Question: https://www.hackerrank.com/challenges/a-very-big-sum/problem

function aVeryBigSum(ar) {
  let sum = 0;
  ar.forEach((element) => (sum = element + sum));
  return sum;
}

const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(aVeryBigSum(ar));
