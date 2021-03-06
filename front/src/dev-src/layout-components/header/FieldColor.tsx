import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOCALSTORAGE_KEYS } from "src/dev-src/constants";
import { setAppSettingsPlayground } from "src/dev-src/redux/appActions";

const PLAYGROUNDS = [
  "field-color field-color__first",
  "field-color field-color__second",
  "field-color field-color__third",
];

const SelectFieldColor = () => {
  const data = useSelector((state: any) => state),
    { settings } = data;
  const dispatch = useDispatch();

  const [active, setActive] = useState<number>(settings.playground);

  function handleClickOnPlayground(index: number) {
    setActive(index);
    localStorage.setItem(LOCALSTORAGE_KEYS.playground, index.toString());
    dispatch(setAppSettingsPlayground(index));
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
              index === active ? playground + " active-block" : playground
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
