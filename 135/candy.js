const assert = require('assert');

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    const totalKids = ratings.length;
    const candyDistribution = new Array(totalKids).fill(1);
    for (let i = 1; i < totalKids; i++) {
        if (ratings[i] > ratings[i - 1]) candyDistribution[i] = candyDistribution[i - 1] + 1;
    }

    for (let i = totalKids - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1] && candyDistribution[i] <= candyDistribution[i + 1]) candyDistribution[i] = candyDistribution[i + 1] + 1;
    }

    let totalCandy = 0;
    for (let i = 0; i < candyDistribution.length; i++) totalCandy += candyDistribution[i];
    return totalCandy;
};


assert.equal(candy([1, 0, 2]), 5);
assert.equal(candy([1, 2, 2]), 4);
assert.equal(candy([1, 3, 2, 2, 1]), 7);
assert.equal(candy([1, 2, 87, 87, 87, 2, 1]), 13);
assert.equal(candy([1, 6, 10, 8, 7, 3, 2]), 18);
