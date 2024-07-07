/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange, rest = 0) {
    const drinkedCounts = numBottles;

    const exchangedBottles = Math.floor((drinkedCounts + rest) / numExchange);

    if (!exchangedBottles) {
        return drinkedCounts;
    }

    const newRest = (drinkedCounts + rest) % numExchange;

    return drinkedCounts + numWaterBottles(exchangedBottles, numExchange, newRest);
};