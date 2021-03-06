import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "src/dev-src/components/Button";
import IconButton from "src/dev-src/components/IconButton";
import { ICONS, LOCALSTORAGE_KEYS } from "src/dev-src/constants";
import { setRestartGame } from "src/dev-src/redux/appActions";

type TicTacToeHeaderType = {
  firstIcon: string;
  secondIcon: string;
  winnerFirst: number;
  winnerSecond: number;
};

const TicTacToeHeader = ({
  firstIcon,
  secondIcon,
  winnerFirst,
  winnerSecond,
}: TicTacToeHeaderType) => {
  // const [activeIcon, setActiveIcon] = useState<number>(+currentActiveIcon);

  const dispatch = useDispatch();

  function restartGame() {
    dispatch(setRestartGame(true));
  }

  return (
    <div className="container">
      <div className="g-header">
        <div className="row">
          <div className="ground-header">
            <IconButton src={firstIcon} />
            <div className="d-flex">
              <p className="m-0">{winnerFirst}</p>
              <p className="m-0">:</p>
              <p className="m-0">{winnerSecond}</p>
            </div>
            <IconButton src={secondIcon} />
          </div>
        </div>
        <div className="row">
          <button onClick={restartGame} className="btn">
            Restart Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicTacToeHeader;
