function indexToRowColumn(idx, n) {
    let row = n - Math.ceil(idx / n);
    let col = (row + n) % 2 ? (idx - 1) % n : n - 1 - ((idx - 1) % n);
    // console.log(idx, row, col)
    return [row, col]
}
function addNeighbors(q, curr, board, n) {
    for (let i = 1; i <= 6 && (i + curr) <= n * n; i++) {
        let [r, c] = indexToRowColumn(curr + i, n);
        q.push(board[r][c] === -1 ? curr + i : board[r][c])
    }
}

var snakesAndLadders = function (board) {
    // bfs looking for n^2
    // when looking for neighbors, use [i+1, ..., i+6] or board[r][c] if not -1
    const n = board.length;
    const n2 = n * n;
    const q = [1];
    const visited = new Set();
    let path = 0;

    while (q.length > 0) {
        let width = q.length;
        for (let i = 0; i < width; i++) {
            let curr = q.shift();
            if (!visited.has(curr)) {
                visited.add(curr);
                if (curr === n2) {
                    return path
                }
                addNeighbors(q, curr, board, n);
            }
        }
        path += 1
    }
    return -1
};

console.log(snakesAndLadders([[-1, -1, 19, 10, -1], [2, -1, -1, 6, -1], [-1, 17, -1, 19, -1], [25, -1, 20, -1, -1], [-1, -1, -1, -1, 15]]))
