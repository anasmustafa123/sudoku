function isSafe(board, row, col, num) {
  // Check if the number is not present in the current row, column, and the 3x3 grid
  return (
    !usedInRow(board, row, num) &&
    !usedInCol(board, col, num) &&
    !usedInBox(board, row - (row % 3), col - (col % 3), num)
  );
}

function usedInRow(board, row, num) {
  return board[row].includes(num);
}

function usedInCol(board, col, num) {
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === num) {
      return true;
    }
  }
  return false;
}

function usedInBox(board, startRow, startCol, num) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i + startRow][j + startCol] === num) {
        return true;
      }
    }
  }
  return false;
}

function findEmptyLocation(board, emptySpot) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        emptySpot[0] = i;
        emptySpot[1] = j;
        return true;
      }
    }
  }
  return false;
}

function solveSudoku(board) {
  const emptySpot = [0, 0];

  if (!findEmptyLocation(board, emptySpot)) {
    return true; // No empty spots left, the Sudoku is solved
  }

  const [row, col] = emptySpot;

  for (let num = 1; num <= 9; num++) {
    if (isSafe(board, row, col, num)) {
      board[row][col] = num;

      if (solveSudoku(board)) {
        return true; // If placing the number leads to a solution, we are done
      }

      board[row][col] = 0; // If placing the number doesn't lead to a solution, backtrack
    }
  }

  return false; // No number from 1 to 9 can be placed, need to backtrack further
}

// Example Sudoku board (0 represents empty cells)
const sudokuBoard = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];
const displayBoard2 = (board) => {
  for (let i = 0; i < board.length; i++) {
    console.log("");
    for (let j = 0; j < board[0].length; j++) {
      console.log(`${board[i][j]}`);
    }
  }
};
if (solveSudoku(sudokuBoard)) {
  displayBoard2(sudokuBoard);
} else {
  console.log("No solution exists.");
}
