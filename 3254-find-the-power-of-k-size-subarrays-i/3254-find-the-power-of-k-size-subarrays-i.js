/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
    const notPower = Array(nums.length);
    nums.forEach((current, i, nums) => {
        if (i === nums.length - 1) return;
        const next = nums[i + 1];
        if (current + 1 !== next) notPower[i] = "true";
    })

    const result = [];
    for (let start = 0; start <= nums.length - k; start++) {
        const end = start + k - 1;
        const currentNotPower = notPower.slice(start, end);

        result[start] = (currentNotPower.includes("true")) ? -1 : nums[end]
    }

    return result;
};