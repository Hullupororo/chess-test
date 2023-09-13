import { MAX_LENGTH } from "../constants";
import { isNumber } from "./isNumber";

export const isValidLength = (fen: string) => {
  let count = 0;
  const val = fen.split("/").join("").replace(/ /g, "");

  for (const i of val) {
    if (isNumber(i)) {
      count += parseInt(i);
    } else {
      count += 1;
    }
  }

  return count === MAX_LENGTH;
};
