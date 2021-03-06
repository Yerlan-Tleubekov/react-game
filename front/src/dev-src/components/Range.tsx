import React, { useState } from 'react';
import IconButton from './IconButton';
import HighVolumeIcon from 'src/dev-src/assets/images/plus.svg';
import LowVolumeIcon from 'src/dev-src/assets/images/minus.png';
import { VOLUME_INITIAL } from 'src/dev-src/constants/index';

type RangeProps = {
  onClick?: any;
};

const Range = ({ onClick = () => {} }: RangeProps) => {
  const [volume, setVolume] = useState<number>(VOLUME_INITIAL);

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
    <div className="d-flex align-items-center">
      <IconButton src={LowVolumeIcon} onClick={() => switchVolume(false)} />
      <p className="volume-actions-cnt__count p-1 ">{volume}</p>
      <IconButton src={HighVolumeIcon} onClick={() => switchVolume(true)} />
    </div>
  );
};

export default Range;
