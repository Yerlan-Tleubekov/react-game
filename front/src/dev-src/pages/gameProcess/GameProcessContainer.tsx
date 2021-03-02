import React from "react";

type GameProcessContainerProps = {
  children: any;
};

const GameProcessContainer = ({ children }: GameProcessContainerProps) => {

  return <div className='game-process-container'>{children}</div>;
};

export default GameProcessContainer;
