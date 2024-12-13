/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
    const marked = new Set();
    const sortedNums = [...nums];
    sortedNums.sort((a, b) => a - b);
    let score = 0;

    for (let i = 0; i < sortedNums.length; i++) {
        if (marked.size - 2 >= nums.length) return score;

        const num = sortedNums[i];
        const index = nums.indexOf(num);
        nums[index] = '';

        if (!marked.has(index)) {
            score += num;

            marked.add(index);
            marked.add(index-1);
            marked.add(index+1);
        }
    }

    return score;
};