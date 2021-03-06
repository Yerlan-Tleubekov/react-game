import React, { useState } from 'react';
import { LOCALSTORAGE_KEYS } from 'src/dev-src/constants';

const PLAYGROUNDS = [
  'field-color field-color__first',
  'field-color field-color__second',
  'field-color field-color__third',
];

const SelectFieldColor = () => {
  const currentActive = localStorage.getItem(LOCALSTORAGE_KEYS.playground) || 0;

  const [active, setActive] = useState<number>(+currentActive);

  function handleClickOnPlayground(index: number) {
    setActive(index);
    localStorage.setItem(LOCALSTORAGE_KEYS.playground, index.toString());
  }

  return (
    <React.Fragment>
      <div>
        <p>Select playground</p>
      </div>
      <div className="select-field-color">
        {PLAYGROUNDS.map((playground, index) => (
          <div
            className={
              index === active ? playground + ' active-block' : playground
            }
            key={index}
            onClick={() => handleClickOnPlayground(index)}
          ></div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default SelectFieldColor;
