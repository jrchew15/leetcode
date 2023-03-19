interface TrieNodeInterface {
    endsWord: boolean;
    children: { [char: string]: TrieNode };
}

export class TrieNode implements TrieNodeInterface {
    endsWord = false;
    children: { [char: string]: TrieNode } = {};
    constructor() { }
}

interface TrieInterface {
    root: TrieNode;
}

export class Trie implements TrieInterface {
    root = new TrieNode();
    constructor(words?: string[]) {
        if (!words) return
        for (let word of words) this.insert(word)
    }

    insert(word: string): void {
        let node: TrieNode = this.root;
        for (let i = 0; i < word.length; i++) {
            let char: string = word[i];
            if (!node.children[char]) node.children[char] = new TrieNode()

            node = node.children[char]
        }
        node.endsWord = true;
    }

    search(word: string): boolean {
        let node: TrieNode = this.root;
        for (let i = 0; i < word.length; i++) {
            let char: string = word[i];

            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.endsWord;
    }

    startsWith(prefix: string): boolean {
        let node: TrieNode = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let char: string = prefix[i];

            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const myTrie = new Trie();
myTrie.insert('apple')
console.log(myTrie.root)
