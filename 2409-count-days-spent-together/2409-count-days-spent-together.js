/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const daysInmonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const accumDays = daysInmonth.reduce(
        (accum, value, i) => {
            (i === 0) ? accum.push(value) : accum.push(accum[i - 1] + daysInmonth[i - 1])
            return accum
        }, []);


    const [aliceArrivedMonth, aliceArrivedDay] = format(arriveAlice);
    const [aliceLeaveMonth, aliceLeaveDay] = format(leaveAlice);
    const [bobArrivedMonth, bobArrivedDay] = format(arriveBob);
    const [bobLeaveMonth, bobLeaveDay] = format(leaveBob);

    const aliceArrive = accumDays[aliceArrivedMonth - 1] + aliceArrivedDay;
    const aliceLeave = accumDays[aliceLeaveMonth - 1] + aliceLeaveDay;
    const bobArrive = accumDays[bobArrivedMonth - 1] + bobArrivedDay;
    const bobLeave = accumDays[bobLeaveMonth - 1] + bobLeaveDay;

    const maxArrival = aliceArrive >= bobArrive ? aliceArrive : bobArrive;
    const minLeave = aliceLeave <= bobLeave ? aliceLeave : bobLeave;

    return (maxArrival >= minLeave) ? 0 : minLeave - maxArrival + 1;
};

function format(string) {
    const [mm, dd] = string.split("-");
    return [+mm, +dd];
}