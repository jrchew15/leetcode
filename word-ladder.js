class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Queue {
    constructor() { this.head = null; this.tail = null; this.length = 0; }

    // addToHead(val) {
    //     if (!this.head) { this.head = new Node(val); this.tail = this.head; return this.head }
    //     this.head = new Node(val, this.head);
    // }

    removeFromHead() {
        this.length--
        if (this.head === this.tail) {
            let removed = this.head; this.head = null; this.tail = null; return removed
        }
        let removed = this.head;
        this.head = removed.next;
        return removed;
    }

    addToTail(val) {
        this.length++
        if (!this.head) {
            this.head = new Node(val);
            this.tail = this.head;
            return this.head;
        }

        this.tail.next = new Node(val);
        this.tail = this.tail.next;
        return this.head;
    }
}

function wordNeighbors(word, wordList) {
    let wordSet = new Set(wordList); let differsBy1 = new Set()
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        for (let current of wordSet) {
            if (current[i] !== char) {
                if (differsBy1.has(current)) {
                    differsBy1.delete(current);
                    wordSet.delete(current);
                } else {
                    differsBy1.add(current)
                }
            }
        }
    }
    return differsBy1
}

function ladderLength(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;
    let q = new Queue;
    q.addToTail(new Node(beginWord));
    let count = 0;
    let visited = new Set();
    while (q.head) {
        let level = q.length;
        count++;
        for (let i = 0; i < level; i++) {
            let word = q.removeFromHead().val;
            if (word === endWord) { return count; }
            wordNeighbors(word, wordList).forEach(_check)
        }
    }
    return 0;
    function _check(neighbor) {
        if (!visited.has(neighbor)) {
            visited.add(neighbor);
            q.addToTail(neighbor)
        }
    }
};

let beginWord = 'hit';
let list = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(ladderLength(beginWord, 'cog', list))
console.log(ladderLength(beginWord, 'cog', ["hot", "dot", "dog", "lot", "log"]))
