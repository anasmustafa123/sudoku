/* function delayed2DLoop(rows, cols, delay) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 10; j++) {
      setTimeout(function () {
        // Your code to be executed inside the loop
        console.log(`Row: ${i}, Col: ${j}`);
      }, i * 10 * 1000 + j * 1000);
    }
  }
}

// Example usage:
delayed2DLoop(3, 4, 1000); */

/* class Cell {
  constructor() {
    this.possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.value = 0;
  }
}
function deepCopy(originalArray) {
  let copy = Array.from({ length: 9 }, () => Array(9).fill(null));

  originalArray.forEach((row, rowIndex) => {
    row.forEach((singleCell, colIndex) => {
      // Create a new instance of the 'Cell' class for each cell in the array
      copy[rowIndex][colIndex] = new Cell();
      copy[rowIndex][colIndex].value = singleCell.value;
    });
  });
  return copy;
}

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

let real = Array.from({ length: 9 }, () => Array(9).fill(new Cell()));
real[1][3].value = 10;
let copy = deepCopy(real);
displayBoard(real);
displayBoard(copy);
 */

let test = 80;
console.log(`i:${parseInt(test / 9)}, j:${parseInt(test % 9)}`);
