/**
 * @param {character[][]} board
 * @return {boolean}
 */
var getQuadrante = function (row, column) {
    return Math.floor(row/3) * 3 + Math.floor(column / 3);
}

var isValidSudoku = function (board) {
    let row = 0;
    let column = 0;
    const quadranteMap = {};
    const columnMap = {};
    for (let row = 0; row < board.length; row++) {
        const rowMap = {};
        for (let column = 0; column < board[row].length; column++) {
            const number = board[row][column];
            if (row === 0) columnMap[column] = {};
            if (number === '.') continue;
            const quadrante = getQuadrante(row, column);
            if (quadranteMap[quadrante] === undefined) quadranteMap[quadrante] = {};
            if (rowMap[number] || columnMap[column][number] || quadranteMap[quadrante][number]) return false
            rowMap[number] = number;
            columnMap[column][number] = true;
            quadranteMap[quadrante][number] = true;
        }
    }
};

const testCase1 = [["1", "2", ".", ".", "3", ".", ".", ".", "."],
["4", ".", ".", "5", ".", ".", ".", ".", "."],
[".", "9", "8", ".", ".", ".", ".", ".", "3"],
["5", ".", ".", ".", "6", ".", ".", ".", "4"],
[".", ".", ".", "8", ".", "3", ".", ".", "5"],
["7", ".", ".", ".", "2", ".", ".", ".", "6"],
[".", ".", ".", ".", ".", ".", "2", ".", "."],
[".", ".", ".", "4", "1", "9", ".", ".", "8"],
[".", ".", ".", ".", "8", ".", ".", "7", "9"]];

const testCase2 = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , [".", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

// const testCase3 = [
//     ["1", "2", ".", ".", "3", ".", ".", ".", "."],
//     ["4", ".", ".", "5", ".", ".", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", ".", "3"],
//     ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
//     [".", ".", ".", "8", ".", "3", ".", ".", "5"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", ".", ".", ".", ".", ".", "2", ".", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "8"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ];

console.log('testCase1', isValidSudoku(testCase1));
console.log('testCase2', isValidSudoku(testCase2));
// console.log('testCase3', isValidSudoku(testCase3));