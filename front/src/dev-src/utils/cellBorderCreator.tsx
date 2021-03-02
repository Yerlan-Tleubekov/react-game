import { setUniqueValues } from "../utils";

export function cellBorderCreator(
  x: number,
  y: number,
  arrayX: Array<any>,
  arrayY: Array<any>
): string {
  const lenArrayX = arrayX.length - 1;
  const lenArrayY = arrayY.length - 1;
  const firstIndex = 0;
  const deleteCount = 1;
  let cellClassname: Array<string> = [
    "cell",
    "border-top",
    "border-bottom",
    "border-right",
    "border-left",
  ];

  if (x === 0) {
    const topIndex = cellClassname.findIndex((item) => item === "border-top");
    cellClassname.splice(topIndex, deleteCount);
  }

  if (y === 0) {
    const leftIndex = cellClassname.findIndex((item) => item === "border-left");
    cellClassname.splice(leftIndex, deleteCount);
  }

  if (x === lenArrayX) {
    const bottomIndex = cellClassname.findIndex(
      (item) => item === "border-bottom"
    );
    cellClassname.splice(bottomIndex, deleteCount);
  }

  if (y === lenArrayY) {
    const rightIndex = cellClassname.findIndex(
      (item) => item === "border-right"
    );
    cellClassname.splice(rightIndex, deleteCount);
  }

  return setUniqueValues(cellClassname).join(" ");
}
