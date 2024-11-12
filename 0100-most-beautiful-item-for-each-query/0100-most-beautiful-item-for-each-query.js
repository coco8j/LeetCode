/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function (items, queries) {
    items.sort((a, b) => a[0] - b[0]);

    const uniqueItems = [];
    let mostBeautys = 0;

    for (const [price, beauty] of items) {
        mostBeautys = Math.max(mostBeautys, beauty);
        uniqueItems.push([price, mostBeautys]);
    }

    return queries.map((priceBound) => {
        let left = 0;
        let right = uniqueItems.length - 1;

        while (left <= right) {
            const mid = Math.floor((right + left) / 2);
            const midPrice = uniqueItems[mid][0];

            if (midPrice <= priceBound) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return right >= 0 ? uniqueItems[right][1] : 0;
    })
};