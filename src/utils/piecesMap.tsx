import { Bishop } from "../svg/Bishop";
import { King } from "../svg/King";
import { Knight } from "../svg/Knight";
import { Pawn } from "../svg/Pawn";
import { Queen } from "../svg/Queen";
import { Rook } from "../svg/Rook";
import { PieceName } from "../types/types";

export const piecesMap = (isWhite = false) => ({
  [PieceName.Rook]: <Rook isWhite={isWhite} />,
  [PieceName.Knight]: <Knight isWhite={isWhite} />,
  [PieceName.Bishop]: <Bishop isWhite={isWhite} />,
  [PieceName.Queen]: <Queen isWhite={isWhite} />,
  [PieceName.King]: <King isWhite={isWhite} />,
  [PieceName.Pawn]: <Pawn isWhite={isWhite} />,
});
