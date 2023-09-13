import { Cell } from "../components/Cell";

export const getEmptyCells = (count: number, index: number) => {
  const cells = [];
  for (let i = 0; i < count; i++) {
    cells.push(<Cell key={i + index} />);
  }
  return cells;
};
