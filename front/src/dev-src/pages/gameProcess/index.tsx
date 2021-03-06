import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOCALSTORAGE_KEYS, ICONS } from "src/dev-src/constants";
import TicTacToeGround from "src/dev-src/pages/gameProcess/Ground";
import GameProcessContainer from "./GameProcessContainer";
import TicTacToeHeader from "./TicTacToeHeader";

const GameProcess = () => {
  const data = useSelector((state: any) => state),
    { settings, restart } = data,
    { icons, playground, size } = settings;
  const [firstIcon, secondIcon] = ICONS[icons];

  const [winnerFirst, setWinnerFirst] = useState<number>(0);
  const [winnerSecond, setWinnerSecond] = useState<number>(0);

  function setSizeOfPlayground(): string {
    const small = "small",
      medium = "medium",
      large = "large",
      classNameForSmall = "ground-container-sm",
      classNameForMedium = "ground-container",
      classNameForLarge = "ground-container-lg";

    switch (size) {
      case small:
        return classNameForSmall;
      case medium:
        return classNameForMedium;
      case large:
        return classNameForLarge;
      default:
        return classNameForMedium;
    }
  }

  useEffect(() => {
    if (restart) {
      setWinnerFirst(0);
      setWinnerSecond(0);
    }
  }, [restart]);

  return (
    <GameProcessContainer>
      <div className={setSizeOfPlayground()}>
        <TicTacToeHeader
          firstIcon={firstIcon}
          secondIcon={secondIcon}
          winnerFirst={winnerFirst}
          winnerSecond={winnerSecond}
        />
        <TicTacToeGround
          playground={playground}
          firstIcon={firstIcon}
          secondIcon={secondIcon}
          restart={restart}
          setWinnerFirst={setWinnerFirst}
          setWinnerSecond={setWinnerSecond}
        />
      </div>
    </GameProcessContainer>
  );
};

export default GameProcess;
