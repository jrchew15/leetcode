/*
start paths queue at 0,0
run a loop incrementing effort
depth first neighbors within effort
if m,n in path, return effort

return effort
*/

function getNeighbors(node, effort, matrix) {
    let neighbors = [];
    let val = matrix[node[0]][node[1]];
    if (node[0] > 0) { carefulPush(node[0] - 1, node[1]) }
    if (node[0] < matrix.length - 1) { carefulPush(node[0] + 1, node[1]) }
    if (node[1] > 0) { carefulPush(node[0], node[1] - 1) }
    if (node[1] < matrix.length[0] - 1) { carefulPush(node[0], node[1] + 1) }

    function carefulPush(row, col) {
        if (Math.abs(val - matrix[row][col]) <= effort) {
            neighbors.push([row, col])
        }
    }
}

function minimumEffortPath(heights) {
    let pathsQueue = [[[0, 0]]];
    let visited = new Set(['0,0']);

    while (pathsQueue.length) {

    }
}
