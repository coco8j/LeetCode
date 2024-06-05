/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
    const evenIndex = [];
    const oddIndex = [];

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            evenIndex.push(nums[i]);
        } else {
            oddIndex.push(nums[i]);
        }
    }

    evenIndex.sort();
    oddIndex.sort((a,b) => b - a);

    const result = [];
    maxLength = Math.max(evenIndex.length, oddIndex.length);

    for (let i = 0; i < maxLength; i++) {
        if (evenIndex[i] || evenIndex[i] === 0) {
            result.push(evenIndex[i]);
        }

        if (oddIndex[i] || oddIndex[i] === 0) {
            result.push(oddIndex[i]);
        }
    }

    return result;
};