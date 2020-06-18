// Count number of occurrences of each letter in a string
// Input  = "United States Of America"

function countOccurence(str) {
  let modifiedStr = str.toLowerCase();
  console.log(modifiedStr);

  //    // for removing spaces in case you don't want if (ch != " ")
  //   let strWithoutSpace = modifiedStr.replace(/ /g, "");
  //   console.log(strWithoutSpace);

  let countMap = new Map();

  for (let i = 0; i < modifiedStr.length; i++) {
    let ch = modifiedStr[i];
    if (ch != " ") {
      if (countMap.has(ch)) {
        countMap.set(ch, countMap.get(ch) + 1);
      } else {
        countMap.set(ch, 1);
      }
    }
  }
  return countMap;
}

let str = "United States Of America";
console.log(countOccurence(str));
