"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trie = exports.TrieNode = void 0;
var TrieNode = /** @class */ (function () {
    function TrieNode() {
        this.endsWord = false;
        this.children = {};
    }
    return TrieNode;
}());
exports.TrieNode = TrieNode;
var Trie = /** @class */ (function () {
    function Trie(words) {
        this.root = new TrieNode();
        if (!words)
            return;
        for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
            var word = words_1[_i];
            this.insert(word);
        }
    }
    Trie.prototype.insert = function (word) {
        var node = this.root;
        for (var i = 0; i < word.length; i++) {
            var char = word[i];
            if (!node.children[char])
                node.children[char] = new TrieNode();
            node = node.children[char];
        }
        node.endsWord = true;
    };
    Trie.prototype.search = function (word) {
        var node = this.root;
        for (var i = 0; i < word.length; i++) {
            var char = word[i];
            if (!node.children[char])
                return false;
            node = node.children[char];
        }
        return node.endsWord;
    };
    Trie.prototype.startsWith = function (prefix) {
        var node = this.root;
        for (var i = 0; i < prefix.length; i++) {
            var char = prefix[i];
            if (!node.children[char])
                return false;
            node = node.children[char];
        }
        return true;
    };
    return Trie;
}());
exports.Trie = Trie;
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
var myTrie = new Trie();
myTrie.insert('apple');
console.log(myTrie.root);
