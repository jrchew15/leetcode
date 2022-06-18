var longestStrChain = function (words) {
    let wordsByLength = {}; let max = 0;
    for (let word of words) {
        let n = word.length;
        if (wordsByLength[n]) { wordsByLength[n].push(word) }
        else { wordsByLength[n] = [word] }
        if (n > max) {max = n}
    }

    let maxchain = 0;
    for (let word of wordsByLength[max]) {
        let m = chainFromParent(word);
        if (m < maxchain) {maxchain=m}
    }
    function chainFromParent(parent) {

    }
};
