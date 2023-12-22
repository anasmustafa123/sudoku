import "./App.css";
import WelcomePage from "./components/WelcomePage";
import Board from "./components/Board";
import { useState } from "react";
function App() {
  const [shownPage, setShownPage] = useState(0);
  return (
    <>
      {shownPage == 0 && (
        <WelcomePage
          setShownPage={setShownPage}
        ></WelcomePage>
      )}
      {shownPage == 1 && (
        <Board
          setShownPage={setShownPage}
        ></Board>
      )}
    </>
  );
}

export default App;
