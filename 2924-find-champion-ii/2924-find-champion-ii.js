/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function (n, edges) {
    if (n === 1) return 0;

    const organized = new Map();

    edges.forEach(([winner, looser], i) => {
        const winnerValue = organized.get(winner) || record();
        winnerValue.weaker += 1;
        organized.set(winner, winnerValue);


        const looserValue = organized.get(looser) || record();
        looserValue.stronger += 1;
        organized.set(looser, looserValue)
    });

    if (organized.size !== n) return -1;

    const nominates = [];
    organized.forEach((log, team) => {
        if (!log.stronger) nominates.push(team);
    });

    return nominates.length === 1 ? nominates[0] : -1;
};


function record() {
    return {
        stronger: 0,
        weaker: 0,
    };
}