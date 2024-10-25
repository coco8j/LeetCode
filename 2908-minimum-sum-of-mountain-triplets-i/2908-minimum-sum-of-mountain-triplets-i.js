/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums) {
    if (nums.length < 3) return -1;

    let result = -1;
    let mountainNumbers = [];

    for (let first = 0; first < nums.length - 2; first++) {
        mountainNumbers[0] = nums[first]

        const nextNums = nums.slice(first + 1);
        for (let second = 0; second < nextNums.length - 1; second++) {
            if (mountainNumbers[0] < nextNums[second]) {
                mountainNumbers[1] = nextNums[second]

                const nextNextNums = nextNums.slice(second + 1);
                for (let third = 0; third < nextNextNums.length; third++) {
                    if (nextNextNums[third] < mountainNumbers[1]) {
                        mountainNumbers[2] = nextNextNums[third]

                        const sum = mountainNumbers.reduce((accumulator, current) => accumulator + current, 0);

                        if (result === -1 || sum < result) {
                            result = sum;
                        }

                    }

                }
            }
        }
    }

    return result;
};
