import React, { useEffect, useRef, useState } from 'react';
import Modal from 'src/dev-src/components/Modal';
import FullScreenButton from './FullScreenButton';
import SwitchTheme from './SwitchTheme';
import VolumeActions from './VolumeActions';
import SettingsIcon from 'src/dev-src/assets/images/settings.svg';
import IconButton from 'src/dev-src/components/IconButton';
import Settings from './Settings';
const BgMusic = require('src/dev-src/assets/music/bg-music.mp3');


const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const music = useRef(new Audio(BgMusic.default))


  useEffect(() => {
    console.log('asd');

    // music.current.muted = true;

    // music.current.addEventListener('canplaythrough', (e) => {
    //   music.current.autoplay = true;
    
    //   const playPromise = music.current.play();
    //   if (playPromise !== undefined) {
    //     playPromise
    //       .then(() => {
    //         music.current.muted = false;
    //         music.current.loop = true;
    
    //         console.log('played');
    //       })
    //       .catch((err) => {
    //         music.current.muted = false;
    //         console.log('error', err);
    //       });
    //   }
    // });
  }, []);

  return (
    <div className="header">
      <FullScreenButton />
      <IconButton onClick={() => setIsOpen(true)} src={SettingsIcon} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Settings />
      </Modal>
    </div>
  );
};

export default Header;
