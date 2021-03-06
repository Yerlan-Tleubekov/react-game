import React, { useEffect, useState } from "react";
import "src/dev-src/assets/style/ground.css";
import {
  INITIAL_MATRIX,
  LOCALSTORAGE_KEYS,
  WINNING_CONDITIONS,
} from "src/dev-src/constants/index";
import {
  cloneDeepArray,
  getTwoDimenArrayIndexInOneDimenArray,
  hasOneEmptyCell,
  random,
} from "src/dev-src/utils/index";
import { cellBorderCreator } from "src/dev-src/utils/cellBorderCreator";
import IconButton from "../../components/IconButton";
import MultiplyIcon from "src/dev-src/assets/images/1.1.png";
import Nolik from "src/dev-src/assets/images/1.2.png";
import Ork from "src/dev-src/assets/images/2.1.png";
import Human from "src/dev-src/assets/images/2.2.png";
import Hulk from "src/dev-src/assets/images/3.1.png";
import Thor from "src/dev-src/assets/images/3.2.png";
import Statistic from "./Statistic";
import { setRestartGame } from "src/dev-src/redux/appActions";
import { useDispatch } from "react-redux";
import Modal from "src/dev-src/components/Modal";

interface Move {
  i: number;
  j: number;
}

const ICONS = [
  [MultiplyIcon, Nolik],
  [Human, Ork],
  [Thor, Hulk],
];

type TicTacToeGroundType = {
  firstIcon: string;
  secondIcon: string;
  playground: number;
  restart: boolean;
  setWinnerFirst: any;
  setWinnerSecond: any;
};

const WINNER_F = "Winner First Player";
const WINNER_S = "Winner Second Player";

const TicTacToeGround = ({
  firstIcon,
  secondIcon,
  playground,
  restart,
  setWinnerFirst,
  setWinnerSecond,
}: TicTacToeGroundType) => {
  const dispatch = useDispatch();

  const [AIFight, setAIFight] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState(false);
  const [winner, setWinner] = useState(WINNER_F);
  const [nextTurn, setNextTurn] = useState<boolean>(true);
  const [gameMatrix, setGameMatrix] = useState<Array<Array<number | null>>>(
    INITIAL_MATRIX
  );
  const [roundCount, setRoundCount] = useState<number>(1);

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
        setIsOpen(true);
        if (nextTurn) {
          setWinnerSecond((prev: any) => prev + 1);
          setWinner(WINNER_S);
        } else {
          setWinnerFirst((prev: any) => prev + 1);
          setWinner(WINNER_F);
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

  function setBGOfPlayground(): string {
    let className = "cell col-md-4 ";

    switch (playground) {
      case 0:
        className += "dark";
        break;

      case 2:
        className += "green";
        break;
      default:
        break;
    }

    return className;
  }

  useEffect(() => {
    if (!AIFight && !nextTurn) {
      AITurn();
    }
  }, [nextTurn]);

  useEffect(() => {
    if (restart) {
      setGameMatrix(INITIAL_MATRIX);
      dispatch(setRestartGame(false));
    }
  }, [restart]);

  useEffect(() => {
    handleResultValidation();
  }, [gameMatrix]);

  return (
    <React.Fragment>
      <div className="ground">
        {gameMatrix.map((row, rowIndex, arrayRow) => (
          <div key={rowIndex} className="row">
            {row.map((col, colIndex) => (
              <button
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
                className={setBGOfPlayground()}
              >
                {col === 0 && ""}
                {col !== 0 && (
                  <IconButton
                    src={col === 1 ? firstIcon || "" : secondIcon || ""}
                  />
                )}
              </button>
            ))}
          </div>
        ))}
      </div>
      <Statistic draw={draw} roundCount={roundCount} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>{winner}</div>
      </Modal>
    </React.Fragment>
  );
};

export default TicTacToeGround;
