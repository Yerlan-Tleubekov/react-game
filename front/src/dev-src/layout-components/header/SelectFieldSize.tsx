import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Radio from "src/dev-src/components/Radio";
import { LOCALSTORAGE_KEYS } from "src/dev-src/constants";
import { setAppSettingsPlaygroundSize } from "src/dev-src/redux/appActions";

const RADIO_VALUES = ["small", "medium", "large"];

const SelectFieldSize = () => {
  const data = useSelector((state: any) => state),
    { settings } = data;
  const dispatch = useDispatch();

  const [currentSelected, setCurrentSelected] = useState<string>(settings.size);


  function handleSelect(key: string = "") {
    localStorage.setItem(LOCALSTORAGE_KEYS.size, key);
    setCurrentSelected(key);
    dispatch(setAppSettingsPlaygroundSize(key));
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
