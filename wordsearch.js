// find all start positions via double for loop
// for each start, dfs moving pointer along word
function exist(board, word) {
    let starts = [];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word[0]) starts.push(`${i}${j}`)
        }
    }

    for (let start of starts) {
        let visited = new Set([start])
        if (found(start, word, visited)) return true;
    }
    return false;

    function found(start, word, visited) {
        if (!word) return true

        let next = [];
        let x = Number(start[0]);
        let y = Number(start[1]);

        visited.add(start);

        if (board[x+1] && !visited.has(`${x+1}${y}`) && board[x+1][y] === word[1]) next.push(`${x+1}${y}`)
        if (board[x-1] && !visited.has(`${x-1}${y}`) && board[x-1][y] === word[1]) next.push(`${x-1}${y}`)
        if (!visited.has(`${x}${y+1}`) && board[x][y+1] === word[1]) next.push(`${x}${y+1}`)
        if (!visited.has(`${x}${y-1}`) && board[x][y-1] === word[1]) next.push(`${x}${y-1}`)

        return
    }
}
