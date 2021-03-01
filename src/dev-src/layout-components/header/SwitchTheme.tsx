import React, { useState } from 'react';
import IconButton from 'src/dev-src/components/IconButton';
import MotleyTheme from 'src/dev-src/assets/images/color.png';
import WhiteTheme from 'src/dev-src/assets/images/no-color.png';

const SwitchTheme = () => {
  const [isWhiteTheme, setIsWhiteTheme] = useState<boolean>(false);
  function themeSwitcher() {
    setIsWhiteTheme((prev) => !prev);
  }
  return (
    <div className='switch-theme'>
      <IconButton
        src={isWhiteTheme ? WhiteTheme : MotleyTheme}
        onClick={themeSwitcher}
      />
    </div>
  );
};

export default SwitchTheme;
