import React from 'react';

type RadioTypes = {
  id: string;
  title: string;
  onClick: any;
  current: string;
};

const Radio = ({ id, title, onClick = () => {}, current }: RadioTypes) => {
  return (
    <div className="form-check d-flex align-items-center">
      <input
        className="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id={id}
        checked={current === title}
        onClick={onClick.bind(null, id)}
      />
      <label className="form-check-label" htmlFor={id}>
        {title}
      </label>
    </div>
  );
};

export default Radio;
