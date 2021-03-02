const { Router } = require("express");
const router = Router();
const { PAGES } = require("../constants/index");
const gameProcess = require("./gameprocess/index");
const currentGameProcess = require("./gameprocess/getcurrent/index");
const saveCurrentGameProcess = require("./gameprocess/savecurrent/index");
const getScoreTable = require("./scoretable/getscoretable/index");
const saveScoreInTable = require("./scoretable/savescore/index");
const home = require("./home/index");

router.get(PAGES.home, home);

router.post(PAGES.gameProcess, gameProcess);

router.get(PAGES.gameProcessGetCurrent, currentGameProcess);

router.post(PAGES.gameProcessSaveCurrent, saveCurrentGameProcess);

router.get(PAGES.getScoreTable, getScoreTable);

router.post(PAGES.saveScoreInTable, saveScoreInTable);

module.exports = router;
