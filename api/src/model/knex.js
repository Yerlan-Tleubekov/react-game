const knex = require("knex");
const config = require("../../knexfile").development;

const connectedKnex = knex(config);

module.exports = connectedKnex;
