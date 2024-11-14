/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function (n, quantities) {
    let left = 1;
    let right = Math.max(...quantities);

    function isDistributable(max) {
        let portioned = 0;
        for (const quantity of quantities) {
            const essentialStorCounts = Math.ceil(quantity / max);
            if (essentialStorCounts > n) return false;

            portioned += essentialStorCounts;
        }

        return portioned <= n;
    }

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (isDistributable(mid)) right = mid - 1;
        else left = mid + 1;
    }

    return left;
};
