exports.up = async function (knex) {
    return Promise.all([
      knex.schema.createTableIfNotExists("score_table", async (table) => {
        table.increments().primary();
  
        table.string("name").notNullable();
        table.string("round").notNullable();
        table.string("win").notNullable();
        table.string("loose").notNullable();
      }),
    ]);
  };
  
  exports.down = async function (knex) {
    return Promise.all([knex.schema.dropTable("score_table")]);
  };
  