const getData = async (url) => {
    const res = await fetch(url);
    return await res.text();
}

function getError(sack) {
    let left = new Set();

    for (let i = 0; i < sack.length / 2; i++) {
        left.add(sack[i]);
    }
    for (let i = sack.length / 2; i < sack.length; i++) {
        if (left.has(sack[i])) return sack[i]
    }
}

function priority(char) {
    if (char === char.toLowerCase()) {
        return char.charCodeAt(0) - 96
    }
    return char.charCodeAt(0) - 38
}
function findCommonChars(sacks) {
    let chars = [];
    for (let i = 0; i < sacks.length; i += 3) {
        let set1 = new Set()
        let set2 = new Set()
        for (let j = 0; j < sacks[i].length; j++) {
            set1.add(sacks[i][j]);
        }
        for (let j = 0; j < sacks[i + 1].length; j++) {
            if (set1.has(sacks[i + 1][j])) set2.add(sacks[i + 1][j]);
        }
        for (let j = 0; j < sacks[i + 2].length; j++) {
            if (set2.has(sacks[i + 2][j])) {
                chars.push(sacks[i + 2][j])
                break
            }
        }
    }
    return chars
}
