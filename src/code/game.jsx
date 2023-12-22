//import {setBoard } from "../components/Board"
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
const displayBoard = (board) => {
  let boardText = "";
  for (let i = 0; i < board.length; i++) {
    if (i % 3 == 0 && i != 0) console.log("-----------------------");
    for (let j = 0; j < board[0].length; j++) {
      if (j % 3 == 0 && j != 0) boardText += " | ";
      boardText += board[i][j].value + " ";
    }
    console.log(boardText);
    boardText = "";
  }
  console.log("__________________________________________________________");
};

// The rest of your code remains unchanged
const isSafe = (board, row, col, num) => {
  return (
    !usedInBox(board, row, col, num) &&
    !usedInRow(board, row, num) &&
    !usedInCol(board, col, num)
  );
};
const usedInCol = (board, col, num) => {
  for (let i = 0; i < 9; i++) {
    if (board[i][col].value == num) return true;
  }
};
const usedInRow = (board, row, num) => {
  for (let i = 0; i < 9; i++) {
    if (board[row][i].value == num) return true;
  }
};

const usedInBox = (board, row, col, num) => {
  let boxRow = Math.floor(row / 3) * 3;
  let boxCol = Math.floor(col / 3) * 3;
  for (let i = boxRow; i < boxRow + 3; i++) {
    for (let j = boxCol; j < boxCol + 3; j++) {
      if (board[i][j].value == num) return true;
    }
  }
};
const findEmptyLocation = (board, emptyCell) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j].value == 0) {
        emptyCell["row"] = i;
        emptyCell["col"] = j;
        return true;
      }
    }
  }
  return false;
};
const removeRepetative = (board, newRow, newCol, newMove) => {
  //update cols possibleMoves
  for (let i = 0; i < board.length; i++) {
    //remove the newMove from all cols possibleMoves
    board[i][newCol].possibleValues = board[i][newCol].possibleValues.filter(
      (move) => move !== newMove
    );
    if (board[i][newCol].possibleValues.length == 0) {
      //return the removed element incase of backtracking (there exist element without possibleMoves)
      board[i][newCol].possibleValues.push(newMove);
      return false;
    }
  }
  //update rows
  for (let i = 0; i < board[0].length; i++) {
    board[newRow][i].possibleValues = board[newRow][i].possibleValues.filter(
      (move) => move !== newMove
    );
    if (board[newRow][i].possibleValues.length == 0) {
      //return the removed element incase of backtracking
      board[newRow][i].possibleValues.push(newMove);
      return false;
    }
  }
  //update box
  let boxRow = Math.floor(newRow / 3) * 3;
  let boxCol = Math.floor(newCol / 3) * 3;
  for (let i = boxRow; i < boxRow + 3; i++) {
    for (let j = boxCol; j < boxCol + 3; j++) {
      board[i][j].possibleValues = board[i][j].possibleValues.filter(
        (move) => move !== newMove
      );
      if (board[i][j].possibleValues.length == 0) {
        //return the removed element incase of backtracking
        board[i][j].possibleValues.push(newMove);
        return false;
      }
    }
  }
  return true;
};

function solveSudoku(board) {
  let emptyCell = { row: 0, col: 0 };
  if (!findEmptyLocation(board, emptyCell)) return true;
  const newRow = emptyCell["row"];
  const newCol = emptyCell["col"];
  for (let i = 0; i < board[newRow][newCol].possibleValues.length; i++) {
    const newMove = board[newRow][newCol].possibleValues[i];
    if (isSafe(board, newRow, newCol, newMove)) {
      //if (removeRepetative(board, newRow, newCol, newMove)) {
        board[newRow][newCol].value = newMove;
        // Recursively attempt to solve the remaining puzzle
        if (solveSudoku(board)) {
          return true; // Solution found, break out of the loop
        }
        board[newRow][newCol].value = 0;
      //}
    }
  }
  // If no valid move leads to a solution, return false
  return false;
}

const sudokuBoard = initializeBoard(9, 9);
//displayBoard(sudokuBoard);
displayBoard(sudokuBoard);
const startTime = performance.now();
solveSudoku(sudokuBoard);
const endTime = performance.now();
const runtime = endTime - startTime;
console.log(`runtime: ${runtime}`);
displayBoard(sudokuBoard);
export {
  isSafe,
  initializeBoard,
  displayBoard,
  findEmptyLocation,
  removeRepetative,
  solveSudoku,
  Cell,
};
