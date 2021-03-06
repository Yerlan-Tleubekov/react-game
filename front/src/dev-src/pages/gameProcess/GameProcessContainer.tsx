import React from 'react';

type GameProcessContainerProps = {
  children: any;
};

const GameProcessContainer = ({ children }: GameProcessContainerProps) => {
  return (
    <div className="game-process-container">
      <div className="container">{children}</div>
    </div>
  );
};

export default GameProcessContainer;
