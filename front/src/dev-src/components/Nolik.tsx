import React from 'react';

type NolikTypes = {
  width?: string;
  height?: string;
};

const Nolik = ({ width, height }: NolikTypes) => {
  return (
    <div
      style={width && height ? { width, height } : {}}
      className="nolik"
    ></div>
  );
};

export default Nolik;
