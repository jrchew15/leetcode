import { TrieNode } from './Trie';

interface Dictionary {
    root: TrieNode
}

class WordDictionary implements Dictionary {
    root: TrieNode = new TrieNode()
    constructor() {

    }

    addWord(word: string): void {
        let node: TrieNode = this.root;
        for (let i = 0; i < word.length; i++) {
            if (node.children[word[i]] === undefined) {
                node.children[word[i]] = new TrieNode()
            }
            node = node.children[word[i]]
        }
        node.endsWord = true;
    }

    search(word: string, idx: number = 0, node: TrieNode = this.root): boolean {
        for (let i = idx; i < word.length; i++) {
            if (word[i] === '.') {
                for (let char in node.children) {
                    if (this.search(word, i + 1, node.children[char])) return true;
                }
                return false;
            }
            if (node.children[word[i]] === undefined) return false;
            node = node.children[word[i]]
        }
        return node.endsWord;
    }
}
