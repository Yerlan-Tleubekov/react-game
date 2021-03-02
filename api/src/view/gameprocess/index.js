const gameProcess = (req, res) => {
  res.send({
    data: {
      message: "this is game process",
    },
  });
};

module.exports = gameProcess;
