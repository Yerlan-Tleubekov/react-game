import React from "react";
import TicTacToeGround from "src/dev-src/components/Ground";
import GameProcessContainer from "./GameProcessContainer";

const GameProcess = () => {
  return (
    <GameProcessContainer>
      <TicTacToeGround />
    </GameProcessContainer>
  );
};

export default GameProcess;
