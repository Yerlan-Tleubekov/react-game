import React, { useState } from 'react';

import MusicOnIcon from 'src/dev-src/assets/images/on.png';
import MusicOFfIcon from 'src/dev-src/assets/images/muted.png';
import IconButton from 'src/dev-src/components/IconButton';
import 'src/dev-src/assets/style/header.css';
import Switch from 'src/dev-src/components/Switch';
import Range from 'src/dev-src/components/Range';

const VolumeActions = () => {
  const [isMuted, setIsMuted] = useState<boolean>(false);

  function switchMusicPlay() {
    setIsMuted((prev) => !prev);
  }

  return (
    <div className="volume-actions-cnt">
      <div className="d-flex justify-content-between align-items-center">
        <p>Volume</p>
        <div className="d-flex flex-column align-items-center">
          <Switch />
          <Range />
        </div>
      </div>
      <hr className="mt-0" />
      <div className="d-flex justify-content-between align-items-center">
        <p>Music</p>
        <div className="d-flex flex-column align-items-center">
          <Switch />
          <Range />
        </div>

        {/* <IconButton
          src={isMuted || volume === 0 ? MusicOFfIcon : MusicOnIcon}
          alt="music"
          onClick={switchMusicPlay}
        /> */}
      </div>
      <hr className="mt-0" />
    </div>
  );
};

export default VolumeActions;
