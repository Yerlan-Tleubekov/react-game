// pipe
// https://sanstv.ru/color

// maket url
// https://www.marketjs.com/blog/classic-game-of-tic-tac-toe-with-new-fun-features
import MultiplyIcon from 'src/dev-src/assets/images/1.1.png';
import Nolik from 'src/dev-src/assets/images/1.2.png';
import Ork from 'src/dev-src/assets/images/2.1.png';
import Human from 'src/dev-src/assets/images/2.2.png';
import Hulk from 'src/dev-src/assets/images/3.1.png';
import Thor from 'src/dev-src/assets/images/3.2.png';

export const PAGES = {
  main: '/main',
  gameProcess: '/game-process',
  recordsTable: '/records-table',
};

export const MAIN_PAGE_BUTTONS = [
  ['Start Game', PAGES.gameProcess],
  ['Records Table', PAGES.recordsTable],
];

export const CELL_BORDERS = {
  xEqualZero: ['border-bottom', 'border-right', 'border-left'],
  yEqualZero: ['border-bottom', 'border-right', 'border-top'],
};

export const WINNING_CONDITIONS = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
];

export const SCHOOL_URL = 'https://rs.school/js/';

export const VOLUME_INITIAL = 5;

export const LOCALSTORAGE_KEYS = {
  activeIcons: 'activeIcons',
  size: 'size',
  playground: 'playground',
};

export const ICONS = [
  [MultiplyIcon, Nolik],
  [Human, Ork],
  [Thor, Hulk],
];

export const INITIAL_MATRIX = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
