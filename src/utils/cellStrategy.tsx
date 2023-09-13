import { Cell } from "../components/Cell";
import { getEmptyCells } from "./getEmptyCells";
import { isNumber } from "./isNumber";
import { isWhite } from "./isWhite";

export const cellStrategy = (name: string, index: number) =>
  isNumber(name) ? (
    getEmptyCells(parseInt(name), index)
  ) : (
    <Cell isWhite={isWhite(name)} key={name + index} name={name} />
  );
