/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let right = 0, left = nums.length - 1;

    while(right <= left)  {
        const mid = Math.floor((right + left) / 2);

        if (target < nums[mid]) {
            left = mid - 1;
        }

        if (target > nums[mid]) {
            right = mid + 1;
        }

        if (target === nums[mid]) {
            return mid;
        }
    }

    return right;
};