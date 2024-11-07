/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    if (!nums.length) return 0;

    let lengthRecord = 1;
    let p1 = 0, p2 = 0;

    while (p2 < nums.length - 1) {
        p2++;
        
        if (nums[p2 - 1] >= nums[p2]) {
            const length = p2 - p1;
            if (lengthRecord < length) lengthRecord = length;

            p1 = p2;
        } else if (p2 === nums.length - 1) {
            const length = p2 - p1 + 1;
            if (lengthRecord < length) lengthRecord = length;
        }
    }

    return lengthRecord;
};