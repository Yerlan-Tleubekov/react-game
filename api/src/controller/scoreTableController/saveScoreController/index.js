const db = require("../../../model/scoreTable");

const saveScoreController = (score = {}) => {
  return db
    .addANewScore(score)
    .then(() => ({
      data: {},
      code: 200,
    }))
    .catch((err) => {
      return {
        data: {
          error: err.message,
        },
        code: 400,
      };
    });
};

module.exports = saveScoreController;
