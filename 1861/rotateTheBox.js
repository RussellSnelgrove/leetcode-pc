const assert = require('assert');

/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function (boxGrid) {
    const result = [];
    boxGrid[0].forEach(() => result.push([]));
    for (let i = 0; i < boxGrid.length; i++) {
        const row = boxGrid.at(-(i+1));
        let placement = row.length - 1;
        for (let j = row.length - 1; j >= 0; j--) {
            if (row[j] === '.'){
                result[j][i] = '.'
                continue;
            }
            if (row[j] === '#') {
                result[placement][i] = '#';
                placement--;
            }
            if (row[j] === '*') {
                while (placement !== j) {
                    result[placement][i] = '.';
                    placement--;
                }
                result[placement][i] = '*';
                placement--;
            }
        }
        while (placement >= 0) {
            result[placement][i] = '.';
            placement--;
        }
    }
    return result;
};



assert.deepEqual(rotateTheBox([["#", ".", "#"]]), [["."],
["#"],
["#"]]);
assert.deepEqual(rotateTheBox([
    ["#", ".", "*", "."],
    ["#", "#", "*", "."]
]), [
    ["#", "."],
    ["#", "#"],
    ["*", "*"],
    [".", "."]]);

assert.deepEqual(rotateTheBox([["#", "#", "*", ".", "*", "."],
["#", "#", "#", "*", ".", "."],
["#", "#", "#", ".", "#", "."]]),
    [[".", "#", "#"],
    [".", "#", "#"],
    ["#", "#", "*"],
    ["#", "*", "."],
    ["#", ".", "*"],
    ["#", ".", "."]]);