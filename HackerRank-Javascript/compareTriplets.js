// Question: https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
  let scoreA = 0,
    scoreB = 0;

  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] < b[i]) scoreB++;
      if (a[i] > b[i]) scoreA++;
    }
    return [scoreA, scoreB];
  } else {
    return "Arrays should be of equal length";
  }

  console.log("This will not print");
}

console.log(compareTriplets([1, 2, 3], [2, 2, 2]));
console.log(compareTriplets([1, 2], [2, 2, 2]));
