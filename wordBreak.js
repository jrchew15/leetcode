function makeTrie(dict) {
    // outputs trie. something is a word if after keying into each character, there is a word: true property
    const trie = {}
    for (let word of dict) {
        let node = trie;
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (!node[char]) {
                node[char] = {}
            }
            node = node[char]
        }
        node.word = true;
    }
    return trie
}

function wordBreak(s, wordDict) {
    const trie = makeTrie(wordDict);
    let visited = new Set();
    let q = [0];

    while (q.length) {
        let curr = trie;
        let i = q.pop();
        visited.add(i)
        while (curr[s[i]]) {
            if (curr[s[i]].word && !visited.has(i+1)) q.push(i+1)
            curr = curr[s[i]];
            i++;
        }
        if (i === s.length && curr.word) return true;
    }
    return false;
};
