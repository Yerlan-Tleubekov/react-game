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

interface Move {
  i: number;
  j: number;
}

const TicTacToeGround = () => {
  const [AIFight, setAIFight] = useState<boolean>(true);

  const [nextTurn, setNextTurn] = useState<boolean>(true);
  const [gameMatrix, setGameMatrix] = useState<Array<Array<number | null>>>(
    INITIAL_MATRIX
  );
  const [roundCount, setRoundCount] = useState<number>(1);
  const [winnerFirst, setWinnerFirst] = useState<number>(0);
  const [winnerSecond, setWinnerSecond] = useState<number>(0);
  const [draw, setDraw] = useState<number>(0);

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

      if (a === b && b === c) {
        setGameMatrix(INITIAL_MATRIX);
        setRoundCount((prev) => prev + 1);
        if (nextTurn) {
          setWinnerSecond((prev) => prev + 1);
        } else {
          setWinnerFirst((prev) => prev + 1);
        }
        setNextTurn(true);
        return;
      } else {
        let isDraw = !hasOneEmptyCell(gameMatrix);

        if (i === WINNING_CONDITIONS.length - 1 && isDraw) {
          setGameMatrix(INITIAL_MATRIX);
          setRoundCount((prev) => prev + 1);
          setDraw((prev) => prev + 1);
          setNextTurn(true);
          return;
        }
      }
    }
  }

  function random(array: Array<Move>): Move {
    const rndNumber = Math.trunc(Math.random() * (array.length - 1));

    return array[rndNumber];
  }

  function AITurn() {
    const horizontalLength = 3;
    const verticalLength = 3;
    const currentFreeTurns: Array<Move> = [];

    for (let i = 0; i < horizontalLength; i++) {
      for (let j = 0; j < verticalLength; j++) {
        if (gameMatrix[i][j] === null) {
          const temporaryMove: Move = { i, j };
          currentFreeTurns.push(temporaryMove);
        }
      }
    }
    if (!currentFreeTurns.length) {
      return;
    }
    const move: Move = random(currentFreeTurns);

    setGameMatrix((prev) => {
      const newPrev = cloneDeepArray(prev);
      if (AIFight) {
        newPrev[move.i][move.j] = nextTurn ? 1 : 2;
      } else {
        newPrev[move.i][move.j] = 2;
      }
      return newPrev;
    });
    setNextTurn((prev) => !prev);

  }

  useEffect(() => {
    if (!AIFight && !nextTurn) {
      AITurn();
    }
  }, [nextTurn]);

  useEffect(() => {
    handleResultValidation();
  }, [gameMatrix]);

  useEffect(() => {
    setInterval(() => {
      AITurn()
    }, 1000)
  }, [])

  return (
    <React.Fragment>
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
      <div>
        <div>roundCount: {roundCount}</div>
        <div>winnerFirst: {winnerFirst}</div>
        <div>winnerSecond: {winnerSecond}</div>
        <div>draw: {draw}</div>
      </div>
    </React.Fragment>
  );
};

export default TicTacToeGround;
