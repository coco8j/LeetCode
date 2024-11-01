/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
    const binaryNumbers = Array(n)
    for (let i = 0; i < n; i++) {
        binaryNumbers[i] = Number((start + 2 * i).toString(2));
    }

    binaryNumbers.sort((a, b) => b.toString().length - a.toString().length)

    console.log(binaryNumbers)
    const binarySum = binaryNumbers.reduce((accum, binaryNumber, i) => {
        const currentValue = binaryNumber.toString();
        if (i === 0) return [...currentValue];

        const sum = []
        const difference = accum.length - currentValue.length;
        for (let i = 0; i < accum.length; i++) {
            const place = i - difference;

            if (place < 0) {
                sum[i] = accum[i]
            }
            else if (accum[i] === "1" && currentValue[place] === "1") {
                sum[i] = "0"
            }

            else sum[i] = (Number(accum[i]) + Number(currentValue[place])).toString();
        }

        return sum;
    }, [])

    return parseInt(binarySum.join(""), 2);
};

