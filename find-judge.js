var findJudge = function (n, trust) {
    let untrusting = new Set(); let trustSet = new Set();
    for (let i = 1; i <= n; i++) {
        untrusting.add(i);
    }
    for (let j = 0; j < trust.length; j++) {
        untrusting.delete(trust[j][0]);
        trustSet.add(trust[j].toString())
    }
    console.log(untrusting, trustSet)
    for (let i = 1; i <= n; i++) {
        for (let contender of untrusting) {
            if (!trustSet.has(`${i},${contender}`) && i !== contender) {
                untrusting.delete(contender)
            }
        }
    }
    if (untrusting.size) { for (let x of untrusting) { return x } }
    return -1;
};

let trust = [[1, 2]];
console.log(findJudge(2, trust))
