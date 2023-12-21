class Cell {
  constructor() {
    this.possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.value = 0;
  }
}
let initializeBoard = (rows, cols) => {
  let board = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push(new Cell());
    }
    board.push(row);
  }
  return board;
};
const removeRepetative = (board, newRow, newCol, newMove) => {
  //check cols
  for (let i = 0; i < board.length; i++) {
    let temp = board[i][newCol].possibleValues.filter(
      (move) => move !== newMove
    );
    board[i][newCol] = temp;
    console.log(
      `Before removal in row: ${JSON.stringify(
        board.map((row) => row[newCol].possibleValues)
      )}`
    );
    if (board[i][newCol].possibleValues.length == 0) {
      return false;
    }
  }
  //check rows
  for (let i = 0; i < board[0].length; i++) {
    let temp = board[newRow][i].possibleValues.filter(
      (move) => move !== newMove
    );
    board[i][newCol] = temp;
    if (board[newRow][i].possibleValues.length == 0) {
      return false;
    }
  }
  //check box
  let boxRow = Math.floor(newRow / 3) * 3;
  let boxCol = Math.floor(newCol / 3) * 3;
  for (let i = boxRow; i < boxRow + 3; i++) {
    for (let j = boxCol; j < boxCol + 3; j++) {
      //let temp = board[i][j].possibleValues.filter((move) => move !== newMove);
      //board[i][j].possibleValues = temp;
      if (board[i][j].possibleValues.length == 0) {
        return false;
      }
    }
  }
  return true;
};

const sudokuBoard = initializeBoard(9, 9);

function deepCopy(originalArray) {
  let copy = Array.from({ length: 9 }, () => Array(9).fill(0));
  originalArray.map((row, rowIndex) => {
    row.map((singleCell, colIndex) => {
      copy[rowIndex][colIndex] = singleCell;
    });
  });
  return copy;
}
let real = [
  [0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
let copy = deepCopy(real);
real[0][0] = 99
copy[2][2] = 88
console.log(real)
console.log(copy)
