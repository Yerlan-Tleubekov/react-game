import React, { useState } from 'react';
import IconButton from 'src/dev-src/components/IconButton';
import MultiplyIcon from 'src/dev-src/assets/images/1.1.png';
import Multiply from 'src/dev-src/components/Multiply';
import Nolik from 'src/dev-src/components/Nolik';
import Hulk from 'src/dev-src/assets/images/2.1.png';
import Thor from 'src/dev-src/assets/images/2.2.png';
import Human from 'src/dev-src/assets/images/3.1.png';
import Ork from 'src/dev-src/assets/images/3.2.png';
import { LOCALSTORAGE_KEYS } from 'src/dev-src/constants';

type IconsBlockType = {
  children: any;
  className: string;
  index: number;
  onClick: any;
};

const CHOOSE_TYPES = [
  {
    children: (
      <div className="d-flex">
        <IconButton src={MultiplyIcon} />
        <Nolik width="50px" height="50px" />
      </div>
    ),
    blockClasses: 'icons-block first-block',
  },
  {
    children: (
      <React.Fragment>
        <IconButton src={Thor} />
        <IconButton src={Hulk} />
      </React.Fragment>
    ),
    blockClasses: 'icons-block second-block',
  },
  {
    children: (
      <React.Fragment>
        <IconButton src={Human} />
        <IconButton src={Ork} />
      </React.Fragment>
    ),
    blockClasses: 'icons-block third-block',
  },
];

const SelectIcon = () => {
  const activeIndex = localStorage.getItem(LOCALSTORAGE_KEYS.activeIcons) || 0;

  const [active, setActive] = useState<number>(+activeIndex);

  function saveCurrentIcons(index: number) {
    setActive(index);
    localStorage.setItem(LOCALSTORAGE_KEYS.activeIcons, index.toString());
  }

  function IconsBlock({
    children,
    className,
    index,
    onClick = () => {},
  }: IconsBlockType) {
    return (
      <div
        className={index === active ? `${className} active-block` : className}
        onClick={onClick}
      >
        <div className="d-flex">{children}</div>
      </div>
    );
  }

  return (
    <div>
      <p>Select Icon</p>
      <div className=" d-flex ">
        {CHOOSE_TYPES.map((type, index) => (
          <IconsBlock
            key={index}
            index={index}
            className={type.blockClasses}
            onClick={() => saveCurrentIcons(index)}
          >
            {type.children}
          </IconsBlock>
        ))}
      </div>
    </div>
  );
};

export default SelectIcon;
