import React, { useState } from 'react';
import Button from 'src/dev-src/components/Button';
import IconButton from 'src/dev-src/components/IconButton';
import { ICONS, LOCALSTORAGE_KEYS } from 'src/dev-src/constants';

const TicTacToeHeader = () => {
  const currentActiveIcon =
    localStorage.getItem(LOCALSTORAGE_KEYS.activeIcons) || 0;

  const [activeIcon, setActiveIcon] = useState<number>(+currentActiveIcon);

  return (
    <div className="row">
      <div className="container">
        <IconButton src={ICONS[activeIcon][0]} />
        <Button title="Hello" />
        <IconButton src={ICONS[activeIcon][1]} />
      </div>
    </div>
  );
};

export default TicTacToeHeader;
