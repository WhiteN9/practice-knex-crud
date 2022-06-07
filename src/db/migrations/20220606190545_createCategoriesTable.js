/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  return knex.schema.hasTable("categories").then((exists) => {
    if (!exists) {
      return knex.schema.createTableIfNotExists("categories", (table) => {
        table.increments("category_id").primary();
        table.string("category_name");
        table.text("category_description");
        table.timestamps(true, true);
      });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("categories");
};
