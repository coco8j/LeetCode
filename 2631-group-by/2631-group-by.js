/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    const resultObj = {};

    for (const element of this) {
        const key = fn(element);

        if (Object.hasOwn(resultObj, key)) {
            resultObj[key].push(element)
        } else {
            let valueArray = [];
            resultObj[key] = valueArray;
            valueArray.push(element);
        }
    }

    return resultObj
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */