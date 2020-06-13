//Question : https://www.hackerrank.com/challenges/simple-array-sum/problem

function simpleArraySum(ar) {
  let sum = 0;
  ar.forEach((element) => {
    sum = element + sum;
  });

  return sum;
}

const arr = [1, 2, 3, 4, 5];
console.log(simpleArraySum(arr));
