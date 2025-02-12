var topKFrequent = function(nums, k) {
    const result = {};
  
    for (let i = 0; i < nums.length; i++) {
        if (result[nums[i]] === undefined) result[nums[i]] = 0;
        result[nums[i]]++;
    }
    const arr = Object.entries(result).map(([num, freq]) => [freq, parseInt(num)]);
    arr.sort((element1, element2) => element2[0] - element1[0]);
    return arr.slice(0,k).map(element => element[1])
};

console.log(topKFrequent([1,1,1,2,2,3], 2));