import React from "react";
import TicTacToeGround from "src/dev-src/pages/gameProcess/Ground";
import GameProcessContainer from "./GameProcessContainer";
import TicTacToeHeader from "./TicTacToeHeader";

const GameProcess = () => {
  return (
    <GameProcessContainer>
      <TicTacToeHeader />
      <TicTacToeGround />
    </GameProcessContainer>
  );
};

export default GameProcess;
