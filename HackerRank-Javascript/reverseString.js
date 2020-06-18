// Reverse Strings as shown below
// Input = "United States of America"
// Output1 = aciremA fo setatS detinU
// Output2 = America Of States United

function reverseString(str) {
  let inputStr = str.split("").reverse().join("");
  return inputStr;
}

function reverseStringWords(str) {
  let inputStr = str.split(" ").reverse().join(" ");
  return inputStr;
}

function reverseWithoutusingReverseFunction(str) {
  let inputStr = str.split(" ");
  // console.log(inputStr);
  let strArr = [];
  let resultStr = " ";
  for (let i = inputStr.length - 1; i >= 0; i--) {
    strArr.push(inputStr[i]);
  }
  // console.log(strArr);
  resultStr = strArr.join(" ");
  return resultStr;
}

console.log("Reversed String : " + reverseString("United States of America"));

console.log(
  "Reversed String Words : " + reverseStringWords("United States of America")
);

console.log(
  "Reversed String Words : " +
    reverseWithoutusingReverseFunction("United States Of America")
);
