const getScoreTableController = require("../../../controller/scoreTableController/getScoreTableController/index");

const getScoreTable = async (req, res) => {
  const json = await getScoreTableController();
  
  res.status(json.code).json(json);
};

module.exports = getScoreTable;
