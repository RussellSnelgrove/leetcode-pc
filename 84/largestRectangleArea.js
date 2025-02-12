const assert = require('assert');

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
	const heightsLength = heights.length;
	let maxArea = 0;
	let indexHieghtArray = [];
	for (let i = 0; i < heightsLength; i++) {
		let index = i;
		while (indexHieghtArray.length > 0 && indexHieghtArray.at(-1).height > heights[i]){
			const element = indexHieghtArray.pop();
			index = element.index;
			maxArea = Math.max((i-element.index) * element.height, maxArea);
		}
		indexHieghtArray.push({ index, height: heights[i] })
	}
	while (indexHieghtArray.length > 0){
		const element = indexHieghtArray.pop();
		maxArea = Math.max((heightsLength-element.index) * element.height, maxArea);
	}
	return maxArea;
};

assert.equal(largestRectangleArea([2, 1, 5, 6, 2, 3]), 10);
assert.equal(largestRectangleArea([7, 1, 7, 2, 2, 4]), 8);
assert.equal(largestRectangleArea([1, 3, 7]), 7);
assert.equal(largestRectangleArea([2, 4]), 4);
