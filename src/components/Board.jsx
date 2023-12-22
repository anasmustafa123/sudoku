import "../styles/board.css";
import { Cell, solveSudoku } from "../code/game";
import { useEffect, useState } from "react";

function Board({ setShownPage }) {
  const [isSolving, setIsSolving] = useState(-1);
  const [solution, setSolution] = useState(null);
  const [board, setBoard] = useState(() => {
    let copy = Array.from({ length: 9 }, () => Array(9).fill(new Cell()));
    copy = deepCopy(copy);
    copy[0][0].value = 5;
    copy[0][1].value = 4;
    copy[0][7].value = 3;
    copy[5][5].value = 4;
    copy[8][8].value = 8;
    return copy;
  });

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

  const changeBoard = (e, row, col) => {
    let copyArray = deepCopy(board);
    let { name, value } = e.target;
    copyArray[row][col].value = parseInt(value);
    console.log(copyArray);
    //if (solveSudoku(board)) {
    setBoard(copyArray);
    //} else {
    //setBoard(board);
    //}
  };

  useEffect(() => {
    console.log("solving");
    if (solution == null) {
      let resultBoard = deepCopy(board);
      console.log(resultBoard)
      solveSudoku(resultBoard);
      setSolution(resultBoard);
    }
    let copyBoard = deepCopy(board);
    //15 ---> row: 1,  col:6
    let i = parseInt(isSolving / 9);
    let j = parseInt(isSolving % 9);
    console.log(` solution:  ${solution}`);
    if (solution != null) {
      copyBoard[i][j].value = solution[i][j].value;
      console.log(copyBoard);
      setBoard(copyBoard);
    }
  }, [isSolving]);

  return (
    <>
      <div onClick={() => setShownPage(0)} className="returnBtn">
        <i className="bx bxs-left-arrow-alt"></i>
      </div>
      <div className="boardContainer">
        {board.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`row row${rowIndex} ${
              rowIndex == 3 || rowIndex == 6 ? "topStroke" : ""
            }`}
          >
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${
                  colIndex == 3 || colIndex == 6 ? "leftStroke" : ""
                }`}
              >
                <input
                  type="number"
                  className="input"
                  onChange={(e) => {
                    changeBoard(e, rowIndex, colIndex);
                  }}
                  value={
                    board[rowIndex][colIndex].value !== 0
                      ? board[rowIndex][colIndex].value
                      : ""
                  }
                  readOnly
                />
              </div>
            ))}
          </div>
        ))}
        <div className="play_container">
          <div
            onClick={() => {
              if (isSolving < 80) {
                setIsSolving(isSolving + 1);
              }
            }}
            className="nextMove"
          >
            <i className="bx bxs-right-arrow-alt"></i>
          </div>
          <div className="arcConsistency">
            <i className="bx bx-help-circle"></i>
          </div>
        </div>
      </div>
    </>
  );
}
export default Board;
