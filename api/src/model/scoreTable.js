const knex = require('./knex');

function addANewScore(score) {
    return knex("score_table").insert(score);
}

function getScoreTable() {
    return knex("score_table").select('*');
}

module.exports = {
    addANewScore, 
    getScoreTable
}