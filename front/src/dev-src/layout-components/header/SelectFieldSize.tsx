import React, { useState } from 'react';
import Radio from 'src/dev-src/components/Radio';
import { LOCALSTORAGE_KEYS } from 'src/dev-src/constants';

const RADIO_VALUES = ['small', 'medium', 'large'];

const SelectFieldSize = () => {
  const selectedSize: string =
    localStorage.getItem(LOCALSTORAGE_KEYS.size) || 'small';

  const [currentSelected, setCurrentSelected] = useState<string>(selectedSize);

  function handleSelect(key: string = '') {
    localStorage.setItem(LOCALSTORAGE_KEYS.size, key);
    setCurrentSelected(key);
  }

  return (
    <React.Fragment>
      <div>
        <p>Select playground size</p>
        <div className="d-flex justify-content-around ">
          {RADIO_VALUES.map((radio, index) => (
            <Radio
              key={index}
              onClick={handleSelect}
              id={radio}
              title={radio}
              current={currentSelected}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SelectFieldSize;
