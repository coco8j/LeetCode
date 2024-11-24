/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const maxNums = Math.max(...candies);

    const results = [];
    candies.forEach((kidsCandy, i) => {
        results[i] = (kidsCandy + extraCandies >= maxNums) ? true : false;
    })

    return results;
};