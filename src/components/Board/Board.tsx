import { cellStrategy } from "../../utils/cellStrategy";
import { prepareBoard } from "../../utils/prepareBoard";
import "./Board.css";

interface BoardProps {
  fen: string;
}

export const Board = ({ fen }: BoardProps) => {
  const board = prepareBoard(fen);

  return (
    <div className="board">
      {board.map((piece, index) => cellStrategy(piece, index))}
    </div>
  );
};
