// pipe
// https://sanstv.ru/color

// maket url
// https://www.marketjs.com/blog/classic-game-of-tic-tac-toe-with-new-fun-features

export const PAGES = {
  main: "/main",
  gameProcess: "/game-process",
  recordsTable: "/records-table",
};

export const MAIN_PAGE_BUTTONS = [
  ["Start Game", PAGES.gameProcess],
  ["Records Table", PAGES.recordsTable],
];

export const CELL_BORDERS = {
  xEqualZero: ["border-bottom", "border-right", "border-left"],
  yEqualZero: ["border-bottom", "border-right", "border-top"],
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

export const SCHOOL_URL = 'https://rs.school/js/'