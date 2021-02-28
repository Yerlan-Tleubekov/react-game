import React from "react";
import "../assets/style/ground.css";
import { CELL_BORDERS } from "../constants";

type TicTacToeGroundProps = {
  rows?: number;
  cols?: number;
};

const TicTacToeGround = ({ rows = 3, cols = 3 }: TicTacToeGroundProps) => {
  function setUniqueValues(values: Array<string>): Array<string> {
    const uniqueValuesSet = new Set(values);
    const uniqueValuesArray = Array.from(uniqueValuesSet);

    console.log(uniqueValuesArray);

    return uniqueValuesArray;
  }

  function cellBorderCreator(x: number, y: number): string {
    let cellClassname: Array<string> = ["cell"];

    if (x === 0) {
      cellClassname.push(...CELL_BORDERS.xEqualZero);
    }

    if (y === 0) {
      cellClassname.push(...CELL_BORDERS.yEqualZero);
    }

    return setUniqueValues(cellClassname).join(" ");
  }

  return (
    <div className="ground">
      {Array(rows)
        .fill(rows)
        .map((rowField, x) =>
          Array(cols)
            .fill(cols)
            .map((colField, y) => (
              <div className={cellBorderCreator(x, y)}></div>
            ))
        )}
    </div>
  );
};

export default TicTacToeGround;
