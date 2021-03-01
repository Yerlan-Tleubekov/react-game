import React, { useState } from 'react';
import HighVolumeIcon from 'src/dev-src/assets/images/high-volume.png';
import LowVolumeIcon from 'src/dev-src/assets/images/low-volume.png';
import MusicOnIcon from 'src/dev-src/assets/images/on.png';
import MusicOFfIcon from 'src/dev-src/assets/images/muted.png';
import IconButton from 'src/dev-src/components/IconButton';
import 'src/dev-src/assets/style/header.css';

const VOLUME_ICONS = [LowVolumeIcon, HighVolumeIcon];
const VOLUME_INITIAL = 5;

const VolumeActions = () => {
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(VOLUME_INITIAL);

  function switchMusicPlay() {
    setIsMuted((prev) => !prev);
  }

  function switchVolume(isHigher: boolean) {
    setVolume((prev) => {
      const currentVolume = isHigher ? prev + 1 : prev - 1;

      if (currentVolume > 10) {
        return 10;
      }

      return currentVolume > 0 ? currentVolume : 0;
    });
  }

  return (
    <div className="volume-actions-cnt">
      <IconButton src={LowVolumeIcon} onClick={() => switchVolume(false)} />
      <p className="volume-actions-cnt__count p-1 ">{volume}</p>
      <IconButton src={HighVolumeIcon} onClick={() => switchVolume(true)} />
      <IconButton
        src={isMuted || volume === 0 ? MusicOFfIcon : MusicOnIcon}
        alt="music"
        onClick={switchMusicPlay}
      />
    </div>
  );
};

export default VolumeActions;
