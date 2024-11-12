/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function (items, queries) {
    items.sort((a, b) => a[0] - b[0]);
    let mostBeautys = [];

    for (let i = 0; i < queries.length; i++) {
        const priceBound = queries[i];
        let mostBeauty = 0;

        for (let j = 0; j < items.length && items[j][0] <= priceBound; j++) {
            const [price, beauty] = items[j];
            if (mostBeauty < beauty) mostBeauty = beauty;
        }

        mostBeautys[i] = mostBeauty;

    }

    return mostBeautys;
};