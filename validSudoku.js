
var isValidSudoku = function(board) {
    // initialize obj's and sets
    let rowSets = {};
    let colSets = {};
    let boxSets = {};

    for (let i=0; i < 9; i++) {
        rowSets[i] = new Set();
        colSets[i] = new Set();
        boxSets[i] = new Set();
    }

    for (let i=0; i < 9; i++) {
        for (let j=0; j < 9; j++) {
            let num = board[i][j];
            if (num === '.') continue
            let boxNum = Math.floor(i/3) * 3 + Math.floor(j/3);
            if (rowSets[i].has(num) || colSets[j].has(num) || boxSets[boxNum].has(num)) return false;
            rowSets[i].add(num)
            colSets[j].add(num)
            boxSets[boxNum].add(num)
        }
    }
    return true;
};

let board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

let board2 =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board))
console.log(isValidSudoku(board2))
