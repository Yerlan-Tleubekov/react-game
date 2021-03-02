const db = require("../../../model/scoreTable");
const getScoreTableController = () => {
  return db
    .getScoreTable()
    .then((answer) => ({
      data: {
        score_table: answer,
      },
      code: 200,
    }))
    .catch((err) => ({
      data: {
        error: {
          message: err.message,
        },
      },
      code: 400,
    }));
};

module.exports = getScoreTableController;
