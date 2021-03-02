const saveScoreController = require("../../../controller/scoreTableController/saveScoreController/index");

const handleError = (res, e) => {
  console.log(e.message);
  res.send("err 500");
};

const saveScoreInTable = async (req, res) => {
  req.on("error", handleError.bind(null, res));

  const score = req.body;
  const json = await saveScoreController(score);

  console.log(score);

  res.status(json.code).json(json);
};

module.exports = saveScoreInTable;
