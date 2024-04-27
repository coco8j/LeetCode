/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    const result = this;
    const lastIndex = this.length - 1;

    if (this.length === 0) {
        return -1;
    }

    return result[lastIndex]
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */