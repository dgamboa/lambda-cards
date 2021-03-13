exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', tbl => {
    tbl.increments();
    tbl.text('question').notNullable();
    tbl.text('answer').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('questions');
};
