import "./App.css";
import WelcomePage from "./components/WelcomePage";
import Board from "./components/Board";
import { useState } from "react";
import { Cell } from "./code/game";
function App() {
  const [board, setBoard] = useState(
    Array.from({ length: 9 }, () => Array(9).fill(new Cell()))
  ); 
  const [shownPage, setShownPage] = useState(0);
  return (
    <>
      {shownPage == 0 && (
        <WelcomePage
          setShownPage={setShownPage}
          board={board}
          setBoard={setBoard}
        ></WelcomePage>
      )}
      {shownPage == 1 && (
        <Board
          board={board}
          setBoard={setBoard}
          setShownPage={setShownPage}
        ></Board>
      )}
    </>
  );
}

export default App;
