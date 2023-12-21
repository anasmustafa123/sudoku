import "../styles/board.css";

function Board({ setShownPage, board, setBoard }) {
  function deepCopy(originalArray) {
    let copy = Array.from({ length: 9 }, () => Array(9).fill(new Cell()));
    originalArray.map((row, rowIndex) => {
      row.map((singleCell, colIndex) => {
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
          <div className="nextMove">
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
