const assert = require('assert');

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let leftPointer = 0;
    let currentMaxProfit = 0;
    for(let rightPointer=1; rightPointer<prices.length-1; rightPointer++){
        if (prices[rightPointer] < prices[leftPointer]) {
            leftPointer=rightPointer;
            continue;
        }
        if (prices[rightPointer] - prices[leftPointer] > currentMaxProfit) currentMaxProfit=prices[rightPointer] - prices[leftPointer];
    }
    return currentMaxProfit;
};


assert.deepEqual(maxProfit([7,1,5,3,6,4]), 5);
assert.deepEqual(maxProfit([7,6,4,3,1]), 0);
