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
    let node = trie;
    let q = [node];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let temp = [];
        for (let curr of q) {
            if (curr[char]) {
                temp.push(curr[char])
                if (curr[char].word) temp.push(trie)
            }
        }
        q = temp
    }
    return q.length > 0 && q.some(x => x.word)
};

let x = makeTrie(['leet', 'code', 'leaf', 'leetcode'])
console.log(x.l.e)
console.log(wordBreak('leetcode', ['leet', 'code', 'leaf']))
console.log(wordBreak('catdog', ['cat', 'cats', 'dog', 'doggie', 'mouse']))
