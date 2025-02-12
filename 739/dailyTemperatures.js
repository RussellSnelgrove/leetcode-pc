const assert = require('assert');
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const stackOfTemps = [];
    const result = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        if (stackOfTemps.length > 0 && temperatures[i] > stackOfTemps?.at(-1)?.temp) {
            while (temperatures[i] > stackOfTemps?.at(-1)?.temp) {
                const temperature = stackOfTemps.pop();
                result[temperature.index] = i - temperature.index;
            }
        }
        stackOfTemps.push({ temp: temperatures[i], index: i });
    }
    return result;
};


assert.deepEqual(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
assert.deepEqual(dailyTemperatures([30, 40, 50, 60]), [1, 1, 1, 0]);
assert.deepEqual(dailyTemperatures([30, 60, 90]), [1, 1, 0]);