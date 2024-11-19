/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    let result = 0;
    let sum = 0;
    let uniqueNums = new Map();
    let start = 0;

    for (let end = 0; end < nums.length; end++) {
        uniqueNums.set(nums[end], (uniqueNums.get(nums[end]) || 0) + 1);
        sum += nums[end];

        if (end - start + 1 > k) {
            uniqueNums.set(nums[start], uniqueNums.get(nums[start]) - 1);
            if (uniqueNums.get(nums[start]) === 0) uniqueNums.delete(nums[start]);
            sum -= nums[start];
            start++;
        }

        if (end - start + 1 === k && uniqueNums.size === k) {
            result = Math.max(result, sum);
        }
    }

    return result;
};