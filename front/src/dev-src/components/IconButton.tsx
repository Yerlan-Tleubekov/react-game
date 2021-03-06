import React from 'react';

type IconButtonProps = {
  src: string;
  className?: string;
  alt?: string;
  iconClassname?: string;
  iconCntClassname?: string;
  iconBtnClassName?: string;
  onClick?: any;
};

const IconButton = ({
  src = '',
  iconClassname = 'w-100',
  iconCntClassname = 'icon-button p-1 ',
  iconBtnClassName = 'btn',
  alt = 'image',
  onClick = (): void => {},
}: IconButtonProps) => {
  return (
    <div className={iconCntClassname} onClick={onClick}>
      <img src={src} alt={alt} className={iconClassname} />
    </div>
  );
};

export default IconButton;
