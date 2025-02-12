const assert = require('assert');
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    let arrayOfCarPairing = position.map((p, i) => [p, speed[i]]);
    let numberOfFleets = 0;
    arrayOfCarPairing.sort((element1, element2) => (element2[0] > element1[0]) ? -1 : 1)
    let lastValue = -Infinity;
    while(arrayOfCarPairing.length>0){
        car = arrayOfCarPairing.pop();
        const value = (target-car[0])/car[1]
        if (value > lastValue) {
            numberOfFleets++
            lastValue = value;
        };
    }

    return numberOfFleets;
};

assert.equal(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]), 3);
assert.equal(carFleet(10, [3], [3]), 1);
assert.equal(carFleet(100, [0, 2, 4], [4, 2, 1]), 1);