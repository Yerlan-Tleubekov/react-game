import React from 'react';
import SwitchTheme from './SwitchTheme';
import VolumeActions from './VolumeActions';

const Header = () => {
  return (
    <div className='header'>
      <SwitchTheme />
      <VolumeActions />
    </div>
  );
};

export default Header;
