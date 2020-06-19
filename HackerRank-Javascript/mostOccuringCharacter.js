// virtusa hackerRank interview question
// most occuring character that appears first in the string
// constraint: should be a-z or A-Z or  0-9

function countOccurence(str) {
  let countMap = new Map();

  if (str.match(/^[a-zA-Z0-9]+$/i)) {
    let max = 0;
    let maxCh = "";
    for (let i = 0; i < str.length; i++) {
      if (countMap.has(str[i])) {
        countMap.set(str[i], countMap.get(str[i]) + 1);
      } else {
        countMap.set(str[i], 1);
      }
    }
    // Syntax myMap.forEach( (value,key) => {});
    countMap.forEach((value, key) => {
      if (value > max) {
        max = value;
        maxCh = key;
      }
    });
    return maxCh;
  }
}

let str = "helloworld";
console.log(countOccurence(str));
console.log(countOccurence("9999helloooo888world"));
// console.log(countOccurence("@#$%"));
// console.log(countOccurence("-abcd"));
// console.log(countOccurence("-1234567899"));
console.log(countOccurence("1234567899"));
