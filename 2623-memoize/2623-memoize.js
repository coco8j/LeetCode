/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const storage = [];
    return function (...args) {
        if (!storage[args]) {
            return storage[args] = fn(...args)
        }
        return storage[args]
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */