import { PieceName } from "../../types/types";
import { piecesMap } from "../../utils/piecesMap";
import "./Cell.css";

interface CellProps {
  name?: string;
  isWhite?: boolean;
}

export const Cell = ({ name, isWhite }: CellProps) => {
  const pieceIcon = name
    ? piecesMap(isWhite)[name.toLowerCase() as PieceName]
    : "";

  return <div className="cell">{pieceIcon}</div>;
};
