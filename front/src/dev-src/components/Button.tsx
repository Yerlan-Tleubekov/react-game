import React from "react";

const Button = ({ title = "", onClick = () => {} }) => {
  return (
    <button className="btn btn-light mb-1" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
