import React from 'react';
import IconButton from 'src/dev-src/components/IconButton';
import FullScreenIcon from 'src/dev-src/assets/images/fullscreen.png'

const FullScreenButton = () => {

  function fullScreenButtonClickHandler() {
    document.documentElement.requestFullscreen()
  }

  return (
    <div>
      <IconButton src={FullScreenIcon} onClick={fullScreenButtonClickHandler} />
    </div>
  )   
}

export default FullScreenButton;