import { ChangeEvent, MouseEvent, useState } from "react";
import { isValidLength } from "../../utils/isValidLengthFEN";
import { exampleFens } from "../../constants";
import "./FenInput.css";

interface FenInputProps {
  fen: string;
  setFen: React.Dispatch<React.SetStateAction<string>>;
}

export const FenInput = ({ fen, setFen }: FenInputProps) => {
  const [value, setValue] = useState(fen);
  const [hasError, setHasError] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const generateBoard = () => {
    const isValid = isValidLength(value);

    if (!isValid) {
      setHasError(true);
      return;
    }

    setFen(value.replace(/ /g, ""));
  };

  const setExample = (
    event: MouseEvent<HTMLButtonElement> & {
      target: HTMLButtonElement;
    }
  ) => {
    setFen(event.target?.innerText);
    setValue(event.target?.innerText);
    setHasError(false);
  };

  const clearError = () => setHasError(false);

  return (
    <div className="container">
      <h1>Enter FEN</h1>

      <input
        className="input"
        onChange={onChange}
        value={value}
        onFocus={clearError}
        placeholder="enter fen"
      />

      <button onClick={generateBoard}>Generate board</button>

      {hasError && <h3 className="error">FEN is invalid</h3>}

      <div className="examples">
        <h3>Examples:</h3>
        {exampleFens.map((fen) => (
          <button key={fen} onClick={setExample}>
            {fen}
          </button>
        ))}
      </div>
    </div>
  );
};
