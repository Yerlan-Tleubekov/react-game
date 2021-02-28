import React, { useEffect, useState } from "react";
import "../assets/style/ground.css";
import { WINNING_CONDITIONS } from "../constants";
import {
  cloneDeepArray,
  getTwoDimenArrayIndexInOneDimenArray,
  hasOneEmptyCell,
} from "../utils";
import { cellBorderCreator } from "../utils/cellBorderCreator";

const INITIAL_MATRIX = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const TicTacToeGround = () => {
  const [nextTurn, setNextTurn] = useState<boolean>(true);
  const [gameMatrix, setGameMatrix] = useState<Array<Array<number | null>>>(
    INITIAL_MATRIX
  );

  function onCellClickHandler(x: number, y: number, count: number, event: any) {
    const isNotEmpty = gameMatrix[x][y];

    if (isNotEmpty) {
      return;
    }

    setGameMatrix((prev) => {
      const newPrev = cloneDeepArray(prev);
      newPrev[x][y] = nextTurn ? 1 : 2;
      return newPrev;
    });
    setNextTurn((prev) => !prev);
  }

  function handleResultValidation() {
    for (let i = 0; i < WINNING_CONDITIONS.length; i++) {
      const winCondition = WINNING_CONDITIONS[i];

      const [x, y] = winCondition[0];
      const [x1, y1] = winCondition[1];
      const [x2, y2] = winCondition[2];
      let a = gameMatrix[x][y];
      let b = gameMatrix[x1][y1];
      let c = gameMatrix[x2][y2];

      if (!a || !b || !c) {
        continue;
      }

      console.log("a, b, c, winwin", a, b, c);

      if (a === b && b === c) {
        console.log("WIN WIN WIN WIN WIN WIN WIN WIN ");
        setGameMatrix(INITIAL_MATRIX);
        return;
      } else {
        let isDraw = !hasOneEmptyCell(gameMatrix);
        console.log("isDraw", isDraw);

        if (isDraw) {
          console.log("DRAW DRAW DRAW DRAW DRAW DRAW DRAW DRAW DRAW ");
          setGameMatrix(INITIAL_MATRIX);
          return;
        }
      }
    }
  }

  useEffect(() => {
    handleResultValidation();
  }, [gameMatrix]);

  return (
    <table className="ground">
      <tbody>
        {gameMatrix.map((row, rowIndex, arrayRow) => (
          <tr key={rowIndex}>
            {row.map((col, colIndex, arrayCol) => (
              <td
                key={colIndex}
                onClick={(e) => {
                  onCellClickHandler(
                    rowIndex,
                    colIndex,
                    getTwoDimenArrayIndexInOneDimenArray(
                      rowIndex,
                      row.length,
                      colIndex
                    ),
                    e
                  );
                }}
                className={cellBorderCreator(
                  rowIndex,
                  colIndex,
                  arrayRow,
                  arrayCol
                )}
              >
                {col}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TicTacToeGround;
