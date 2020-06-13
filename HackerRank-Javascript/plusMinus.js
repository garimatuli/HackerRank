// Question : https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(ar) {
  let plusN = 0,
    negN = 0;

  ar.forEach((element) => {
    if (element > 0) plusN++;
    else if (element < 0) negN++;
  });

  console.log(
    " fraction of positive numbers = " + (plusN / ar.length).toFixed(6)
  );
  console.log(
    " fraction of negative numbers = " + (negN / ar.length).toFixed(6)
  );
  console.log(
    " fraction of zeroes = " +
      ((ar.length - (plusN + negN)) / ar.length).toFixed(6)
  );
}

const ar = [-4, 3, -9, 0, 4, 1];
plusMinus(ar);
