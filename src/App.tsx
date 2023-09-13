import { useState } from "react";
import { Board } from "./components/Board";
import { FenInput } from "./components/FenInput";
import { defaultFen } from "./constants";

function App() {
  const [fen, setFen] = useState(defaultFen);

  return (
    <>
      <FenInput fen={fen} setFen={setFen} />
      <Board fen={fen} />
    </>
  );
}

export default App;
