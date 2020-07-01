// problem solving certificate - easy

"use strict";

/*
 * Complete the 'getBattery' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY events as parameter.
 */

function getBattery(events) {
  // Write your code here
  let maxCharge = 100;
  let currentCharge = 50;
  let n = events.length;

  for (let i = 0; i < n; i++) {
    //if (events[i] > 0) {
    currentCharge = currentCharge + events[i];
    if (currentCharge > maxCharge) currentCharge = maxCharge;
    //}
    // if (events[i] < 0 ){
    //  currentCharge = currentCharge + events[i];
    if (currentCharge < 0) currentCharge = 0;
    // }
  }
  return currentCharge;
}
let events = [25, -30, 70, -10];

const result = getBattery(events);
console.log(result);

// sample Input [25,-30,70,-10]
// Sample Output  90
