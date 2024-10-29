/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    if (!timeSeries.length) return 0;
    if (timeSeries.length === 1) return duration;

    const result = timeSeries.reduce((totalDuration, t, i, timeSerise) => {

        if (i === 0) return totalDuration += 0;

        const prevAttackTime = timeSerise[i - 1]
        const prevAttackEndTime = prevAttackTime + duration - 1;
        const currAttackTime = t;

        if (prevAttackEndTime < currAttackTime) totalDuration += duration;
        else totalDuration += currAttackTime - prevAttackTime;

        if (i === timeSerise.length - 1) totalDuration += duration;

        return totalDuration;
    }, 0)

    return result;
};