import React from 'react';
import 'src/dev-src/assets/style/abstract/__switch.css';

const Switch = () => {
  return (
    <React.Fragment>
      <label className="label-switch switch-primary d-flex">
        <label>off</label>
        <input
          type="checkbox"
          className="switch switch-bootstrap status"
          name="status"
          id="status"
          value="1"
          // checked={true}
        />
        <span className="lable"></span>
        <label>on</label>
      </label>
    </React.Fragment>
  );
};

export default Switch;
