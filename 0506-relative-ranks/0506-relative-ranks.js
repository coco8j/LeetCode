/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    const scoreRank = [];
    scoreRank.push(...score);
    scoreRank.sort((a, b) => {
        if (a > b) { return -1 }
        if (a < b) { return 1 }
    });
    
    const answer = score.map(
        function convertPrise(num) {
            const rankNum = scoreRank.indexOf(num) + 1;

            if (num === scoreRank[0]) {
                return "Gold Medal";
            } else if (num === scoreRank[1]) {
                return "Silver Medal";
            } else if (num === scoreRank[2]) {
                return "Bronze Medal";
            } return String(rankNum);
        })

    return answer;
};