/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
    const isDivisible = (candidateNum) => {
        let counts = 0
        for (num of nums) {
            if (num > maxOperations) {
                const currentOpertunity = Math.ceil(num / candidateNum) - 1;
                counts += currentOpertunity;
            }
            if (counts > maxOperations) return false;
        }
        return true;
    };

    let left = 1, right = Math.max(...nums);
    let result = right; // 나눌 수 있는 숫자의 제한이 0 일 경우, 나눈 결과의 최대값은 가장 큰 숫자이다.

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (isDivisible(middle)) {
            result = middle;
            right = middle - 1; //  max 값이 줄어들었을 때엔 result 값 업데이트
        } else {
            left = middle + 1;
        }
    }

    return result;
};