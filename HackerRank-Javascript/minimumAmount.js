// virtusa hackerRank interview question
// Calculate minimum amount 

function calculateAmount(prices) {
  let costs = [],
    price_dealt = [],
    sum = 0,

  for (let i = 0; i < prices.length; i++) {
    if (i == 0) {
      costs[0] = prices[0];
    } else {
      costs[i] = Math.max(prices[i] - Math.min(...price_dealt), 0);
    }
    price_dealt[i] = prices[i];
    sum = sum + costs[i];
  }
  return sum;
}

// console.log(Math.min(...[2, 3, 4]));

console.log("Total Costs = " + calculateAmount([2, 5, 1, 4])); // Total Costs = 8;
console.log("Total Costs = " + calculateAmount([4, 9, 2, 3])); // Total Costs = 10
console.log("Total Costs = " + calculateAmount([1, 2, 3, 4])); // Total Costs = 7
console.log("Total Costs = " + calculateAmount([])); // Total Costs = 0
console.log("Total Costs = " + calculateAmount([1])); // Total Costs = 1
