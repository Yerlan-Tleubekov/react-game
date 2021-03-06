import React from "react";

type StatisticType = {
  roundCount: number;
  draw: number;
};

const Statistic = ({ roundCount, draw }: StatisticType) => {
  return (
    <div>
      <div>roundCount: {roundCount}</div>
      <div>draw: {draw}</div>
    </div>
  );
};

export default Statistic;
